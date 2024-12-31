import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = "service_r59r7bc"; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = "template_wuapxpr"; // Replace with your EmailJS template ID
const EMAILJS_PUBLIC_KEY = "rG77r4x5HkLuYozmO"; // Replace with your EmailJS public key

export const sendEmail = async (data: any) => {
  try {
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        to_email: "moizali2577@gmail.com",
        from_name: data.name || "Website Visitor",
        from_email: data.email,
        message: data.message,
        subject: data.subject || "New Contact Form Submission"
      },
      EMAILJS_PUBLIC_KEY
    );
    return response;
  } catch (error) {
    console.error("Email sending failed:", error);
    throw error;
  }
};