"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/service/emailservice";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const result = await sendEmail(formData);
            if (result.success) {
                alert("Email sent successfully!");
            } else {
                alert("Failed to send email!");
            }
        } catch (error) {
            alert("Failed to send email!");
        }
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section className="py-16">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold text-center mb-2">
                    Contact Me
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
                    Feel free to reach out if you have any questions or want to
                    work together!
                </p>

                <div className="text-center mb-8">
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                        Email: nainglinthant1998@gmail.com
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                        Phone: +959 789 224 227
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium mb-2"
                        >
                            Name
                        </label>
                        <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium mb-2"
                        >
                            Email
                        </label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your email"
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium mb-2"
                        >
                            Message
                        </label>
                        <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your message"
                            rows={6}
                            required
                        />
                    </div>

                    <Button
                        type="submit"
                        className="w-full"
                    >
                        Send Message
                    </Button>
                </form>
            </div>
        </section>
    );
}
