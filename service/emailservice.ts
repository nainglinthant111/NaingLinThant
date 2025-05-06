const nodemailer = require("nodemailer");
const { MailtrapTransport } = require("mailtrap");
export const sendEmail = async (formData: {
    name: string;
    email: string;
    message: string;
}) => {
    try {
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
            subject: "Contect By Portfolio",
            text:
                " name : " +
                formData.name +
                "\n email : " +
                formData.email +
                "\n message : " +
                formData.message,
            category: "Integration Test",
        };

        const info = await transporter.sendMail(mailOptions);

        return {
            success: true,
            messageId: info.messageId,
            response: info.response,
        };
    } catch (error) {
        return {
            success: false,
        };
    }
};
