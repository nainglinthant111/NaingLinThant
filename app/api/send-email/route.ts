import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { MailtrapTransport } from "mailtrap";

export async function POST(request: Request) {
    try {
        const formData = await request.json();
        const TOKEN = "7c58c3d801880d89a2e5ba728f98689d";

        const transporter = nodemailer.createTransport(
            MailtrapTransport({
                token: TOKEN,
            })
        );

        // Verify transporter connection
        await transporter.verify();
        console.log("SMTP connection verified successfully");

        const mailOptions = {
            from: {
                address: "hello@demomailtrap.co",
                name: "Mailtrap Test",
            },
            to: ["nainglinthant1998@gmail.com"],
            subject: "You are awesome!",
            text:
                "name : " +
                formData.name +
                "\n email : " +
                formData.email +
                "\n message : " +
                formData.message,
            category: "Integration Test",
        };

        const info = await transporter.sendMail(mailOptions);

        return NextResponse.json({
            success: true,
            messageId: info.messageId,
            response: info.response,
        });
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                error: "Failed to send email",
            },
            { status: 500 }
        );
    }
}
