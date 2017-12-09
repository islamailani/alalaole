import { inject, injectable } from 'inversify';
import * as WebSocket from 'ws';

import TYPES from '../types';

import { UserRepository } from '../repository/UserRepository';

enum PacketType {
    Authentication, Subscribe
}

export enum SubscriptionType {
    Comments, Votes
}

interface Subscription {
    client: WebSocket;
    subscriptionType: SubscriptionType;
    issueId: number;
}

interface Packet {
    type: PacketType;
    payload: any;
}

@injectable()
export class BroadcastingService {
    private clients: WebSocket[] = [];
    private subscriptions: Subscription[] = [];

    private webSocketServer: WebSocket.Server;

    constructor() {
        this.webSocketServer = new WebSocket.Server({ port: 8080 });

        this.webSocketServer.on('connection', (ws) => {
            ws.on('message', (message) => {
                this.handleMessage(ws, message);
            });
        });
    }

    public async broadcastToSubscribers(subscriptionType: SubscriptionType, issue: number, message: string): Promise<void> {
        this.subscriptions
            .filter((subscription) => subscription.subscriptionType === subscriptionType && subscription.issueId === issue)
            .forEach((sub) => sub.client.send(message));
    }

    private async handleMessage(sender: WebSocket, message: WebSocket.Data): Promise<void> {
        if (typeof message !== 'string') {
            return;
        }

        const packet: Packet = JSON.parse(message);

        const clientExisting = this.clients.find((client) => client === sender);
        if (!clientExisting) {
            this.clients.push(sender);
        }

        if (packet.type === PacketType.Subscribe) {
            const subscriptionType = packet.payload.subscriptionType;
            const subscriptionExisting = this.subscriptions.find((sub) =>
                sub.client === sender &&
                sub.subscriptionType === subscriptionType);

            if (!subscriptionExisting) {
                const sub: Subscription = { client: sender, subscriptionType: packet.payload.subscriptionType, issueId: packet.payload.issueId };
                this.subscriptions.push(sub);
            }
        }
    }
}
