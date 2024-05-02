import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
  const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
  const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

  const getTransporter = () =>
    nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: username,
        pass: password,
      },
    });

  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  const transporter = getTransporter();

  try {
    const mail = transporter.sendMail({
      from: username,
      to: myEmail,
      subject: `Portfolio: New message from ${email}`,
      html: `
        <p>Name: ${name} </p>
        <p>Email: ${email} </p>
        <p>Message: ${message} </p>
        `,
    });
    return NextResponse.json({ message: "The message has been sent." });
  } catch (error: unknown) {
    return NextResponse.json(
      { message: "The message couldn't be sent" },
      { status: 400 }
    );
  }
}