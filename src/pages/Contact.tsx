import { useState } from "react";
import EmailMessageForm from "../components/EmailMessageForm";
import Snackbar from "../components/Snackbar";
import type { Severity } from "../components/Snackbar"; // Fix the type import

import type { MessageFormData } from "../components/EmailMessageForm";
import emailjs from "@emailjs/browser";

type SnackbarState = {
  show: boolean;
  message: string;
  severity: Severity;
};

export default function Contact() {
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    show: false,
    message: "",
    severity: "info",
  });

  const handleSubmit = async (data: MessageFormData) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID_EMAILJS,
        import.meta.env.VITE_TEMPLATE_ID_EMAILJS,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        import.meta.env.VITE_PUBLIC_KEY_EMAILJS
      );
      setSnackbar({
        show: true,
        message: "Email sent successfully",
        severity: "success",
      });
    } catch (err) {
      console.error("Email sending failed:", err);
      setSnackbar({
        show: true,
        message: "Email sending failed",
        severity: "error",
      });
    }
  };

  return (
    <div className="theme-bg">
      <EmailMessageForm onSubmit={handleSubmit} />
      <Snackbar
        show={snackbar.show}
        message={snackbar.message}
        severity={snackbar.severity}
        duration={5000}
       onClose={() => setSnackbar((prev) => ({ ...prev, show: false }))}
      />
    </div>
  );
}
