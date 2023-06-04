import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'your_smtp_host',
      port: 587,
      secure: false,
      auth: {
        user: 'your_email',
        pass: 'your_email_password',
      },
    });
  }

  async sendMail(to: string, subject: string, html: string): Promise<void> {
    const mailOptions = {
      from: 'your_email',
      to,
      subject,
      html,
    };

    await this.transporter.sendMail(mailOptions);
  }
}
