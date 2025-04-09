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
            const to = process.env.SMTP_USER;

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
                subject: "Property Inquiry from Riviera Stays Website",
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
    return `
        <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Riviera Stays - Property Inquiry</title>
                <style>
                    body, table, td, div, p, a {
                        -webkit-text-size-adjust: 100%;
                        -ms-text-size-adjust: 100%;
                        margin: 0;
                        padding: 0;
                        font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
                        line-height: 1.47059;
                        letter-spacing: -0.022em;
                        text-align: center;
                    }

                    .email-wrapper {
                        width: 100%;
                        max-width: 680px;
                        margin: 0 auto;
                        background-color: #ffffff;
                    }

                    .header {
                        background-color: #131313;
                        padding: 48px 0;
                        text-align: center;
                        position: relative;
                        border-bottom: 2px solid #1a1a1a;
                    }

                    .content {
                        padding: 48px 32px;
                        background-color: #ffffff;
                    }

                    .section {
                        margin-bottom: 48px;
                        padding: 40px;
                        background: #ffffff;
                        border-radius: 12px;
                        box-shadow: 0 2px 40px rgba(0, 0, 0, 0.05);
                    }

                    .section:hover {
                        box-shadow: 0 4px 50px rgba(0, 0, 0, 0.08);
                        transition: all 0.4s ease;
                    }

                    .footer {
                        text-align: center;
                        padding: 32px;
                        background: #131313;
                        color: #ffffff;
                    }

                    h2 {
                        color: #000000;
                        font-size: 24px;
                        font-weight: 400;
                        letter-spacing: -0.003em;
                        margin-bottom: 32px;
                        display: inline-block;
                        position: relative;
                    }

                    h2::after {
                        content: '';
                        position: absolute;
                        bottom: -8px;
                        left: 50%;
                        transform: translateX(-50%);
                        width: 40px;
                        height: 2px;
                        background: #474747;
                        opacity: 0.7;
                    }

                    .subtitle {
                        color: #ffffff;
                        font-size: 20px;
                        font-weight: 400;
                        opacity: 0.9;
                    }

                    .info-label {
                        color: #000000;
                        font-size: 12px;
                        font-weight: 500;
                        letter-spacing: 0.03em;
                        text-transform: uppercase;
                        margin-bottom: 8px;
                        opacity: 0.5;
                    }

                    .info-value {
                        color: #000000;
                        font-size: 17px;
                        margin-bottom: 32px;
                        word-break: break-word;
                        font-weight: 400;
                        padding: 20px;
                        background: #fafafa;
                        border-radius: 8px;
                        max-width: 400px;
                        margin-left: auto;
                        margin-right: auto;
                        border: 1px solid rgba(0, 0, 0, 0.03);
                    }

                    .info-value:last-child {
                        margin-bottom: 0;
                    }

                    @media screen and (max-width: 680px) {
                        .content {
                            padding: 32px 16px;
                        }
                        
                        .section {
                            padding: 24px;
                            margin-bottom: 32px;
                        }

                        h2 {
                            font-size: 22px;
                        }
                        
                        .info-value {
                            max-width: 100%;
                        }
                    }
                </style>
            </head>
            <body>
                <div class="email-wrapper">
                    <div class="header">
                        <div class="subtitle" style="font-size: 32px; font-weight: 300; letter-spacing: -0.02em; color: #ffffff;">New Property Inquiry</div>
                        <div style="font-size: 18px; margin-top: 12px; opacity: 0.8; font-weight: 300; color: #ffffff;">Someone is interested in Riviera Stays properties</div>
                    </div>

                    <div class="content">
                        <div class="section">
                            <h2>Contact Information</h2>
                            
                            <div class="info-label">Name</div>
                            <div class="info-value">${name}</div>

                            <div class="info-label">Email</div>
                            <div class="info-value">${email}</div>
                            
                            ${phone ? `
                            <div class="info-label">Phone</div>
                            <div class="info-value">${phone}</div>
                            ` : ''}
                            
                            ${propertyInterest ? `
                            <div class="info-label">Property Interest</div>
                            <div class="info-value">${propertyInterest}</div>
                            ` : ''}
                            
                            ${guests ? `
                            <div class="info-label">Number of Guests</div>
                            <div class="info-value">${guests}</div>
                            ` : ''}
                            
                            ${checkIn ? `
                            <div class="info-label">Check-in Date</div>
                            <div class="info-value">${checkIn}</div>
                            ` : ''}
                            
                            ${checkOut ? `
                            <div class="info-label">Check-out Date</div>
                            <div class="info-value">${checkOut}</div>
                            ` : ''}
                            
                            ${message ? `
                            <div class="info-label">Additional Details</div>
                            <div class="info-value">${message}</div>
                            ` : ''}
                        </div>                        
                    </div>

                    <div class="footer">
                        <div style="font-weight: 300;">© ${new Date().getFullYear()} Riviera Stays. All rights reserved.</div>
                        <div style="margin-top: 8px; font-size: 12px; opacity: 0.6;">This email contains confidential information.</div>
                    </div>
                </div>
            </body>
        </html>
    `;
} 