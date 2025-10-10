import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    // Configure SMTP for Microsoft 365
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false, // use STARTTLS
      auth: {
        user: process.env.M365_USER, // your mailbox
        pass: process.env.M365_PASS, // your app password or normal password if MFA disabled
      },
      tls: {
        ciphers: "SSLv3",
      },
    });

    // Email contents
    await transporter.sendMail({
      from: process.env.M365_USER,
      to: "you@yourcompany.com", // recipient address
      subject: `Demo Request from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ success: false, error: "Failed to send email" });
  }
}
