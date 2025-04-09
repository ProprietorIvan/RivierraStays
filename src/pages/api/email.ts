// // app/api/send-email/route.ts
// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';
// import { writeFile } from 'fs/promises';
// import path from 'path';

// // Create mail transporter
// const transporter = nodemailer.createTransport({
// //   host: process.env.SMTP_HOST,
// //   port: parseInt(process.env.SMTP_PORT || '587'),
// //   secure: process.env.SMTP_SECURE === 'true',
// service:'gmail',
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASSWORD,
//   },
// });

// export default function handler(request: Request) {
//     if(request.method === 'POST'){
//   try {
//     // Get form data from request
//     console.log(request.body)
//     //const formData = request.formData();
//     const to = process.env.SMTP_USER
//     const subject=null //= formData.get('subject') as string;
//     const message=null //= formData.get('message') as string;
//     const images=null //= formData.getAll('images') as File[];

//     // Validate required fields
//     if (!to || !subject || !message) {
//       return NextResponse.json(
//         { error: 'Missing required fields' },
//         { status: 400 }
//       );
//     }

//     // Process images
//     const attachments = [];
//     const uploadDir = path.join(process.cwd(), 'public', 'uploads');

//     for (const image of images) {
//       if (image.size > 0) {
//         // Generate unique filename
//         const filename = image.name;
//         const filepath = path.join(uploadDir, filename);

//         // Save file
//         const bytes = await image.arrayBuffer();
//         const buffer = Buffer.from(bytes);
//         await writeFile(filepath, buffer);

//         // Add to email attachments
//         attachments.push({
//           filename: image.name,
//           path: filepath,
//           cid: filename // Content ID for referencing in HTML
//         });
//       }
//     }

//     // Prepare email
//     const mailOptions = {
//       from: process.env.SMTP_FROM,
//       to,
//       subject,
//       text: message, // Plain text version
//       html: `
//         <div>
//           ${message}
//           ${attachments.map(att => 
//             `<img src="cid:${att.cid}" alt="${att.filename}" style="max-width: 100%;">`
//           ).join('')}
//         </div>
//       `,
//       attachments
//     };

//     // Send email
//     await transporter.sendMail(mailOptions);

//     // Clean up uploaded files
//     // for (const attachment of attachments) {
//     //   try {
//     //     await unlink(attachment.path);
//     //   } catch (error) {
//     //     console.error('Error deleting file:', error);
//     //   }
//     // }

//     return NextResponse.json({ 
//       message: 'Email sent successfully' 
//     });

//   } catch (error) {
//     console.error('Error sending email:', error);
//     return NextResponse.json(
//       { error: 'Failed to send email' },
//       { status: 500 }
//     );
//   }}
// }

// // Limit the size of the request
// export const config = {
//   api: {
//     bodyParser: true, // Disable the default body parser
//     sizeLimit: '10mb'
//   }
// }