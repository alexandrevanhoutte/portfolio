import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return NextResponse.json(null, { headers: corsHeaders });
}

export async function POST(request: Request) {
  const username = process.env.NODEMAIL_EMAIL_USERNAME;
  const password = process.env.NODEMAIL_EMAIL_PASSWORD;
  const myEmail = process.env.NODEMAIL_PERSONAL_EMAIL;

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
    return NextResponse.json(
      { message: "The message has been sent." },
      { headers: corsHeaders }
    );
  } catch (error: unknown) {
    return NextResponse.json(
      { message: "The message couldn't be sent" },
      { headers: corsHeaders, status: 400 }
    );
  }
}
