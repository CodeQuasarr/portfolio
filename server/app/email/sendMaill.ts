import nodemailer from 'nodemailer';
import SMTPTransport from "nodemailer/lib/smtp-transport";
import Mail from "nodemailer/lib/mailer";

const config = useRuntimeConfig();
console.log('config.mail.host', config.mail.host)
console.log('config.mail.port', config.mail.port)
console.log('config.mail.auth.user', config.mail.auth.user)
console.log('config.mail.auth.pass', config.mail.auth.pass)
const transport = nodemailer.createTransport({
    // @ts-ignore
    service: "gmail",
    host: config.mail.host,
    port: config.mail.port as unknown as number,
    auth: {
        user: config.mail.auth.user,
        pass: config.mail.auth.pass
    }
} as SMTPTransport.Options);

type SendEmailType = {
    recipient: Mail.Address,
    subject: string | undefined,
    text: string,
}

export const sendMail = async (dto: SendEmailType) => {
    try {
        const mail = await transport.sendMail({
            from: dto.recipient,
            to: useRuntimeConfig().mail.auth.user,
            subject: dto.subject,
            text: dto.text,
            html: dto.text
        });

        console.log("Message sent: %s", mail.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(mail));
        return mail;
    } catch (e: any) {
        console.error(e);
    }
}
