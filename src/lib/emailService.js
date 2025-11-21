// lib/emailService.js
import nodemailer from "nodemailer";

// Gmail configuration
const emailConfig = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
};

// Create transporter
const transporter = nodemailer.createTransport(emailConfig);

// Verify configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log("❌ Gmail configuration error:", error);
  } else {
    console.log("✅ Gmail server is ready to send emails");
  }
});

// Email templates
export const emailTemplates = {
  confirmation: (appointment) => ({
    subject: `Appointment Confirmed - ${appointment.appointmentId} | Seattle Pixels`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; }
          .container { background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; }
          .content { padding: 30px; }
          .appointment-details { background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea; }
          .footer { background: #f1f3f4; padding: 20px; text-align: center; color: #666; font-size: 14px; }
          .button { display: inline-block; padding: 12px 24px; background: #667eea; color: white; text-decoration: none; border-radius: 5px; margin: 10px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 Appointment Confirmed!</h1>
            <p>Seattle Pixels Web Design Agency</p>
          </div>
          <div class="content">
            <p>Hi <strong>${appointment.name}</strong>,</p>
            <p>Thank you for booking a consultation with Seattle Pixels! We're excited to discuss your project and help bring your vision to life.</p>
            
            <div class="appointment-details">
              <h3 style="margin-top: 0; color: #667eea;">Appointment Details</h3>
              <p><strong>Appointment ID:</strong> ${
                appointment.appointmentId
              }</p>
              <p><strong>Date & Time:</strong> ${new Date(
                appointment.date
              ).toLocaleString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                timeZoneName: "short",
              })}</p>
              <p><strong>Consultation Type:</strong> Free Website Strategy Session</p>
              <p><strong>Duration:</strong> 30 minutes</p>
            </div>

            <h4>What to Expect:</h4>
            <ul>
              <li>📋 Review your project requirements and goals</li>
              <li>💡 Discuss design preferences and technical needs</li>
              <li>⏱️ Timeline and project roadmap</li>
              <li>💰 Investment and package options</li>
              <li>❓ Q&A session - all your questions answered</li>
            </ul>

            <div style="background: #e8f4fd; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <h4 style="color: #1976d2; margin-top: 0;">📍 Meeting Details</h4>
              <p><strong>Location:</strong> Google Meet (Link will be sent 1 hour before appointment)</p>
              <p><strong>Preparation:</strong> No preparation needed - just bring your ideas!</p>
            </div>

            <p><strong>Need to reschedule?</strong><br>
            Please reply to this email at least 24 hours before your appointment, and we'll help you find a new time.</p>

            <p>We look forward to helping you build an amazing online presence!</p>
            
            <p>Best regards,<br>
            <strong>The Seattle Pixels Team</strong></p>
          </div>
          <div class="footer">
            <p><strong>Seattle Pixels Web Design Agency</strong><br>
            📍 Seattle, WA<br>
            📧 pixelsSeattle@gmail.com<br>
            🌐 www.seattlepixels.com</p>
            <p style="font-size: 12px; color: #999; margin-top: 15px;">
              This email was sent to ${
                appointment.email
              } regarding your scheduled consultation.
            </p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `APPOINTMENT CONFIRMED - ${appointment.appointmentId}

Hi ${appointment.name},

Thank you for booking a consultation with Seattle Pixels! We're excited to discuss your project and help bring your vision to life.

APPOINTMENT DETAILS:
- Appointment ID: ${appointment.appointmentId}
- Date & Time: ${new Date(appointment.date).toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    })}
- Consultation Type: Free Website Strategy Session
- Duration: 30 minutes

WHAT TO EXPECT:
• Review your project requirements and goals
• Discuss design preferences and technical needs
• Timeline and project roadmap
• Investment and package options
• Q&A session - all your questions answered

MEETING DETAILS:
- Location: virtual, Zoom or Mircosoft 
- Preparation: Please have your laptop and wifi ready 

NEED TO RESCHEDULE?
Please reply to this email at least 24 hours before your appointment.

We look forward to helping you build an amazing online presence!

Best regards,
The Seattle Pixels Team

---
Seattle Pixels Web Design Agency
Seattle, WA
contact@seattlepixels.com
www.seattlepixels.com`,
  }),

  cancellation: (appointment, reason) => ({
    subject: `Appointment Cancelled - ${appointment.appointmentId} | Seattle Pixels`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; }
          .container { background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%); color: white; padding: 30px; text-align: center; }
          .content { padding: 30px; }
          .appointment-details { background: #fff3f3; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ff6b6b; }
          .footer { background: #f1f3f4; padding: 20px; text-align: center; color: #666; font-size: 14px; }
          .reschedule { background: #e8f4fd; padding: 15px; border-radius: 5px; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>❌ Appointment Cancelled</h1>
            <p>Seattle Pixels Web Design Agency</p>
          </div>
          <div class="content">
            <p>Hi <strong>${appointment.name}</strong>,</p>
            <p>Your appointment with Seattle Pixels has been cancelled.</p>
            
            <div class="appointment-details">
              <h3 style="margin-top: 0; color: #ff6b6b;">Cancelled Appointment</h3>
              <p><strong>Appointment ID:</strong> ${
                appointment.appointmentId
              }</p>
              <p><strong>Original Date & Time:</strong> ${new Date(
                appointment.date
              ).toLocaleString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                timeZoneName: "short",
              })}</p>
              ${reason ? `<p><strong>Reason:</strong> ${reason}</p>` : ""}
            </div>

            <div class="reschedule">
              <h4 style="color: #1976d2; margin-top: 0;">🔁 Want to Reschedule?</h4>
              <p>We'd still love to help with your project! You can:</p>
              <ul>
                <li>Reply to this email to schedule a new appointment</li>
                <li>Visit our website to book a new time</li>
                <li>Call us directly to discuss your project</li>
              </ul>
            </div>

            <p>Thank you for considering Seattle Pixels. We hope to work with you in the future!</p>
            
            <p>Best regards,<br>
            <strong>The Seattle Pixels Team</strong></p>
          </div>
          <div class="footer">
            <p><strong>Seattle Pixels Web Design Agency</strong><br>
            📍 Seattle, WA<br>
            📧 pixelsSeattle@gmail.com<br>
            🌐 www.seattlepixels.com</p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `APPOINTMENT CANCELLED - ${appointment.appointmentId}

Hi ${appointment.name},

Your appointment with Seattle Pixels has been cancelled.

CANCELLED APPOINTMENT:
- Appointment ID: ${appointment.appointmentId}
- Original Date & Time: ${new Date(appointment.date).toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    })}
${reason ? `- Reason: ${reason}\n` : ""}

WANT TO RESCHEDULE?
We'd still love to help with your project! You can:
• Reply to this email to schedule a new appointment
• Visit our website to book a new time
• Call us directly to discuss your project

Thank you for considering Seattle Pixels. We hope to work with you in the future!

Best regards,
The Seattle Pixels Team

---
Seattle Pixels Web Design Agency
Seattle, WA
pixeslSeattle@gmail.com
www.seattlepixels.com`,
  }),
};

// Send email function
export const sendEmail = async (to, template, data) => {
  try {
    const emailContent = template(data);

    const mailOptions = {
      from: `"Seattle Pixels" <${process.env.GMAIL_USER}>`, // Same email as sender
      to: to,
      subject: emailContent.subject,
      html: emailContent.html,
      text: emailContent.text,
      replyTo: process.env.GMAIL_USER, // Same email for replies
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully:", info.messageId);
    console.log("📧 From:", process.env.GMAIL_USER);
    console.log("📧 To:", to);

    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return { success: false, error: error.message };
  }
};
