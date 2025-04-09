import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import convertMarkdownToHTML from "@/utils/convertMarkdownToHTML";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
});

export default async function handler(
    request: NextApiRequest,
    response: NextApiResponse<{ message: string } | { error: string }>
) {
    if (request.method === "POST") {
        try {
            const to = "ivanrogacheov@gmail.com";

            const {
                name,
                email,
                phone,
                message,
                propertyInterest,
                checkIn,
                checkOut,
                guests,
            } = request.body;

            if (
                !name ||
                !email
            ) {
                return response.status(400).json({ error: "Missing required fields" });
            }

            const mailOptions = {
                from: process.env.SMTP_FROM,
                to,
                subject: "New Property Inquiry from Riviera Stays",
                html: generateEmail({
                    name,
                    email,
                    phone,
                    message,
                    propertyInterest,
                    checkIn,
                    checkOut,
                    guests,
                }),
            };

            await transporter.sendMail(mailOptions);
            return response.status(200).json({ message: "Email sent successfully" });
        } catch (error) {
            console.error("Error sending email:", error);
            return response.status(500).json({ error: "Failed to send email" });
        }
    } else {
        return response.status(405).json({ error: "Method not allowed" });
    }
}

export const config = {
    api: {
        bodyParser: {
            sizeLimit: "10mb",
        },
    },
};

function generateEmail({
    name,
    email,
    phone,
    message,
    propertyInterest,
    checkIn,
    checkOut,
    guests,
}: {
    name: string;
    email: string;
    phone?: string;
    message?: string;
    propertyInterest?: string;
    checkIn?: string;
    checkOut?: string;
    guests?: string;
}) {
    const formattedCheckIn = checkIn ? new Date(checkIn).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }) : '';

    const formattedCheckOut = checkOut ? new Date(checkOut).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }) : '';

    return `
        <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Riviera Stays - Property Inquiry</title>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Raleway:wght@300;400;500;600&display=swap');
                    
                    body, table, td, div, p, a {
                        -webkit-text-size-adjust: 100%;
                        -ms-text-size-adjust: 100%;
                        margin: 0;
                        padding: 0;
                        font-family: 'Raleway', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                        line-height: 1.5;
                        color: #333;
                    }

                    h1, h2, h3, h4, h5, h6 {
                        font-family: 'Playfair Display', serif;
                        font-weight: 500;
                        color: #1a1a1a;
                    }

                    .email-wrapper {
                        width: 100%;
                        max-width: 650px;
                        margin: 0 auto;
                        background-color: #ffffff;
                    }

                    .header {
                        background-color: #1a1a1a;
                        padding: 40px 0;
                        text-align: center;
                        position: relative;
                    }

                    .logo {
                        margin-bottom: 15px;
                    }

                    .header-content {
                        color: #ffffff;
                    }

                    .content {
                        padding: 40px 30px;
                        background-color: #ffffff;
                    }

                    .intro {
                        margin-bottom: 30px;
                        text-align: center;
                    }

                    .info-grid {
                        display: grid;
                        grid-template-columns: 1fr;
                        gap: 20px;
                        margin-bottom: 30px;
                    }

                    .info-card {
                        background: #f9f9f9;
                        border-radius: 8px;
                        padding: 25px;
                        box-shadow: 0 2px 15px rgba(0, 0, 0, 0.04);
                        border-left: 4px solid #1a1a1a;
                    }

                    .info-card h3 {
                        margin: 0 0 15px 0;
                        font-size: 18px;
                        color: #1a1a1a;
                    }

                    .info-card p {
                        margin: 0;
                        font-size: 16px;
                        color: #333;
                    }

                    .primary-info {
                        border-color: #1a1a1a;
                    }

                    .travel-info {
                        border-color: #5e81ac;
                    }

                    .property-info {
                        border-color: #88c0d0;
                    }

                    .message-info {
                        border-color: #a3be8c;
                    }

                    .date-display {
                        background-color: #f0f0f0;
                        border-radius: 6px;
                        padding: 12px;
                        display: inline-block;
                        font-size: 15px;
                        margin-top: 4px;
                    }

                    .date-label {
                        font-weight: 600;
                        display: block;
                        margin-bottom: 5px;
                        color: #555;
                    }

                    .date-range {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        flex-wrap: wrap;
                        gap: 10px;
                    }

                    .action-button {
                        display: inline-block;
                        background-color: #1a1a1a;
                        color: #ffffff;
                        text-decoration: none;
                        padding: 12px 25px;
                        border-radius: 4px;
                        font-weight: 500;
                        margin-top: 25px;
                        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                        transition: background-color 0.3s ease;
                    }

                    .action-button:hover {
                        background-color: #333333;
                    }

                    .footer {
                        text-align: center;
                        padding: 30px;
                        background: #1a1a1a;
                        color: #ffffff;
                    }

                    .footer-links {
                        margin: 15px 0;
                    }

                    .footer-links a {
                        color: #ffffff;
                        margin: 0 10px;
                        text-decoration: none;
                        opacity: 0.8;
                    }

                    .footer-links a:hover {
                        opacity: 1;
                    }

                    .footer-text {
                        font-size: 13px;
                        opacity: 0.7;
                        margin-top: 15px;
                    }

                    .message-text {
                        white-space: pre-line;
                        line-height: 1.6;
                    }

                    @media screen and (max-width: 650px) {
                        .content {
                            padding: 30px 20px;
                        }
                        
                        .date-range {
                            flex-direction: column;
                            align-items: flex-start;
                        }
                    }
                </style>
            </head>
            <body>
                <div class="email-wrapper">
                    <div class="header">
                        <div class="logo">
                            <img src="https://riviera-stays.com/logo-white.png" alt="Riviera Stays" width="180" style="max-width: 100%;">
                        </div>
                        <div class="header-content">
                            <h1 style="color: #ffffff; font-size: 28px; margin: 0; font-weight: 400;">New Property Inquiry</h1>
                            <p style="color: #eeeeee; margin-top: 10px; font-size: 16px; opacity: 0.9;">A potential client is interested in Riviera Stays properties</p>
                        </div>
                    </div>

                    <div class="content">
                        <div class="intro">
                            <h2 style="font-size: 24px; margin-bottom: 15px;">Customer Inquiry Details</h2>
                            <p style="color: #555; font-size: 16px;">Below you'll find the complete details of the inquiry submitted via the Riviera Stays website.</p>
                        </div>

                        <div class="info-grid">
                            <div class="info-card primary-info">
                                <h3>Contact Information</h3>
                                <p><strong>Name:</strong> ${name}</p>
                                <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #1a1a1a; text-decoration: underline;">${email}</a></p>
                                ${phone ? `<p><strong>Phone:</strong> <a href="tel:${phone}" style="color: #1a1a1a; text-decoration: underline;">${phone}</a></p>` : ''}
                            </div>

                            ${(checkIn || checkOut || guests) ? `
                            <div class="info-card travel-info">
                                <h3>Travel Details</h3>
                                ${guests ? `<p><strong>Number of Guests:</strong> ${guests}</p>` : ''}
                                
                                ${(checkIn || checkOut) ? `
                                <div class="date-range" style="margin-top: 15px;">
                                    ${checkIn ? `
                                    <div>
                                        <span class="date-label">Check-in Date</span>
                                        <div class="date-display">${formattedCheckIn}</div>
                                    </div>
                                    ` : ''}
                                    
                                    ${checkOut ? `
                                    <div>
                                        <span class="date-label">Check-out Date</span>
                                        <div class="date-display">${formattedCheckOut}</div>
                                    </div>
                                    ` : ''}
                                </div>
                                ` : ''}
                            </div>
                            ` : ''}

                            ${propertyInterest ? `
                            <div class="info-card property-info">
                                <h3>Property Interest</h3>
                                <p>${propertyInterest}</p>
                            </div>
                            ` : ''}

                            ${message ? `
                            <div class="info-card message-info">
                                <h3>Additional Requirements</h3>
                                <p class="message-text">${message}</p>
                            </div>
                            ` : ''}
                        </div>

                        <div style="text-align: center; margin-top: 30px;">
                            <p style="margin-bottom: 20px; color: #555;">Reply to this customer by clicking the button below:</p>
                            <a href="mailto:${email}?subject=Re: Your Riviera Stays Inquiry&body=Dear ${name},%0D%0A%0D%0AThank you for your interest in Riviera Stays properties.%0D%0A%0D%0A" class="action-button">Reply to Customer</a>
                        </div>
                    </div>

                    <div class="footer">
                        <div style="font-weight: 300; font-size: 15px;">© ${new Date().getFullYear()} Riviera Stays</div>
                        
                        <div class="footer-links">
                            <a href="https://riviera-stays.com">Website</a>
                            <a href="mailto:info@riviera-stays.com">Email</a>
                            <a href="tel:+377643917618">+377 643 917 618</a>
                        </div>
                        
                        <div class="footer-text">7 avenue des Papalins, 98000 Monaco</div>
                        <div class="footer-text">This email contains confidential information.</div>
                    </div>
                </div>
            </body>
        </html>
    `;
} 