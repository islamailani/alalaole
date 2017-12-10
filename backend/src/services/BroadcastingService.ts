import { inject, injectable } from 'inversify';
import * as WebSocket from 'ws';

import TYPES from '../types';

import { UserRepository } from '../repository/UserRepository';

import { Comment } from '../models/Comment';

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

export enum CommentMessageType {
    New, Edit, Delete
}

interface CommentMessage {
    comment: Comment;
    type: CommentMessageType;
}

@injectable()
export class BroadcastingService {
    private clients: WebSocket[] = [];
    private subscriptions: Subscription[] = [];

    private webSocketServer: WebSocket.Server;

    constructor() {
        this.webSocketServer = new WebSocket.Server({ port: 1111 });
        this.webSocketServer.on('connection', (ws) => {
            ws.on('message', (message) => {
                this.handleMessage(ws, message);
            });
        });
    }

    public async broadcastToSubscribers(
        subscriptionType: SubscriptionType,
        issue: number,
        comment: Comment,
        commentMessageType: CommentMessageType
    ): Promise<void> {

        const commentMessage: CommentMessage = {
            comment, type: commentMessageType
        };

        this.subscriptions
            .filter((subscription) => subscription.subscriptionType === subscriptionType && subscription.issueId === issue)
            .forEach((sub) => this.send(sub.client, commentMessage));
    }

    private async send(socket: WebSocket, message: any) {
        socket.send(JSON.stringify(message));
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
