import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import cloudinary from "@/lib/cloudinary";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const mobile = formData.get("mobile") as string;
    const company = formData.get("company") as string;
    const file = formData.get("file") as File;

    let fileUrl = "";

    // validation
    if (!name || !email) {
      return NextResponse.json(
        { message: "Name and Email are required" },
        { status: 400 }
      );
    }

    // Upload to Cloudinary
    if (file && file.size > 0) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const uploadRes: any = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            { folder: "irebar_uploads" },
            (error, result) => {
              if (error) reject(error);
              else resolve(result);
            }
          )
          .end(buffer);
      });

      fileUrl = uploadRes.secure_url;
    }

    // 💾 Save in DB
    const newContact = await prisma.contact.create({
      data: {
        name,
        email,
        mobile,
        company,
        fileUrl, // saved here
      },
    });

    //  Send Email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"iRebar Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Lead Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${mobile}</p>
        <p><strong>Company:</strong> ${company}</p>
        <hr />
        <p>Saved in database with ID: ${newContact.id}</p>
      `,
    });

    //Resend Email to user
    await transporter.sendMail({
      from: `"iRebar Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thanks for contacting iRebar.ai",
      html: `
        <h3>Hi ${name},</h3>
        <p>Thanks for reaching out! Our team will contact you shortly.</p>
        <br/>
        <p>– iRebar Team</p>
      `,
    });

    return NextResponse.json({
      message: "Form submitted successfully",
    });

  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
