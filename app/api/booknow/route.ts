import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      petName,
      petBreed,
      gender,
      age,
      bloodGroup,
      petParentName,
      address,
      pincode,
      mobileNo,
      emailId,
      comment,
      bookingDate,
      bookingSlot,
    } = body

    // Configure Nodemailer transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "chvamshi03@gmail.com",
        pass:"xnst umyx racl ufwz",
      },
    })

    // Email content
    const mailOptions = {
      from: '"GroomCity" <chvamshi03@gmail.com>',
      to: "groomcity02@gmail.com",
      subject: "New Booking Received",
      text: `A new booking has been received:
      - Pet Name: ${petName}
      - Breed: ${petBreed}
      - Gender: ${gender}
      - Age: ${age}
      - Blood Group: ${bloodGroup}
      - Parent Name: ${petParentName}
      - Address: ${address}
      - Pincode: ${pincode}
      - Mobile: ${mobileNo}
      - Email: ${emailId}
      - Comment: ${comment}
      - Booking Date: ${bookingDate}
      - Slot: ${bookingSlot}`,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: "Booking submitted successfully and email sent!" }, { status: 200 })
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json({ message: "Failed to submit booking or send email." }, { status: 500 })
  }
}

