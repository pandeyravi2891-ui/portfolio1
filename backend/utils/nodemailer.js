const nodemailer = require("nodemailer");

const sendMail = async ({ name, email, subject, description }) => {
  try {
    const mailUser = process.env.MAIL_USER;
    const mailPass = process.env.MAIL_PASS ;
    const receiverEmail = process.env.RECEIVER_EMAIL || mailUser;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: mailUser,
        pass: mailPass,
      },
    });

    const info = await transporter.sendMail({
      from: `"${name}" <${mailUser}>`,
      replyTo: email,
      to: receiverEmail,
      subject: subject || `New Portfolio Contact Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || "N/A"}</p>
          <hr />
          <h3>Message:</h3>
          <p style="white-space: pre-wrap; background: #f4f4f4; padding: 15px; rounded: 8px;">${description}</p>
        </div>
      `,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${description}`,
    });

    console.log("Mail sent successfully. Message ID:", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending mail:", error);
    throw error;
  }
};

module.exports = sendMail;
