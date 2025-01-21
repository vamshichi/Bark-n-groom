import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();
    const {
        name, email, phone, petName, petBreed, message
    } = body;

    // Configure Nodemailer transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "chvamshi03@gmail.com", // Your email address
        pass: 'xnst umyx racl ufwz', // Your email password or app password
      },
    });

    // Email content
    const mailOptions = {
      from: "chvamshi03@gmail.com",
      to: "groomcity02@gmail.com",
      subject: "New Booking Received",
      text: ` New Contact Form Submission:

          - Name: ${name}
          - Email: ${email}
          - Phone: ${phone}
          - Pet Name: ${petName}
          - Pet Breed: ${petBreed}
          - Message: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Booking submitted successfully and email sent!" }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Failed to submit booking or send email." }, { status: 500 });
  }
}
