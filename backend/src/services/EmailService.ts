import { inject, injectable } from 'inversify';
import * as nodemailer from 'nodemailer';

import TYPES from '../types';

import { Config } from '../config/Config';

@injectable()
export class EmailService {
    private transporter: nodemailer.Transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            service: Config.MailServer,
            auth: {
                user: Config.MailUsername,
                pass: Config.MailPassword
            }
        });
    }
    public async sendMail(recipient: string, subject: string, message: string): Promise<void> {
        const mailOptions: nodemailer.SendMailOptions = {
            from: 'xboyotrava@gmail.com',
            to: recipient,
            subject,
            html: message
        };
        this.transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                throw err;
            }
        });
    }
}
