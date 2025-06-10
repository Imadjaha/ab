import { useState } from "react";
import { motion } from "framer-motion";
import EmailMessageForm from "../components/EmailMessageForm";
import Snackbar from "../components/Snackbar";
import type { Severity } from "../components/Snackbar";
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen theme-bg py-16 px-4 sm:px-6"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
            Get in Touch
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, questions, or just to say hello!
          </p>
        </motion.div>

       
        {/* Contact Form */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white/10 backdrop-blur-sm dark:bg-gray-800/50 rounded-xl p-6 
                     shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <EmailMessageForm onSubmit={handleSubmit} />
        </motion.div>
      </div>

      <Snackbar
        show={snackbar.show}
        message={snackbar.message}
        severity={snackbar.severity}
        duration={5000}
        onClose={() => setSnackbar((prev) => ({ ...prev, show: false }))}
      />
    </motion.div>
  );
}