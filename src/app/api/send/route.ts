import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * This API route receives POST data from your form (name, email, message)
 * and sends it as an email using your Microsoft 365 mailbox credentials.
 */
export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  // Basic validation
  if (!name || !email || !message) {
    return NextResponse.json({ success: false, error: "Missing fields" });
  }

  try {
    // Configure M365 SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false, // STARTTLS
      auth: {
        user: process.env.M365_USER,
        pass: process.env.M365_PASS,
      },
      tls: {
        ciphers: "SSLv3",
      },
    });

    // Define email
    const mailOptions = {
      from: process.env.M365_USER,
      to: process.env.M365_TO || process.env.M365_USER, // Default to sender if no recipient set
      subject: `Demo Request from ${name}`,
      text: `
        You have a new demo request.

        Name: ${name}
        Email: ${email}
        Message:
        ${message}
      `,
      html: `
        <h2>New Demo Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Email send error:", error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
