import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod"; // For form validation

const messageSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type MessageFormData = z.infer<typeof messageSchema>; // z.infer used to infer the type

interface EmailMessageFromProps {
  onSubmit: (data: MessageFormData) => Promise<void>;
  className?: string;
}

export default function EmailMessageForm({
  onSubmit,
  className = "",
}: EmailMessageFromProps) {
  const [formData, setFormData] = useState<MessageFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<MessageFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof MessageFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const resetFromData = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form data
      const validData = messageSchema.parse(formData);
      await onSubmit(validData);
      // Reset form after successful submission
      resetFromData();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<MessageFormData> = {};
        error.errors.forEach((err) => {
          if (err.path) {
            fieldErrors[err.path[0] as keyof MessageFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`max-w-lg mx-auto p-6 space-y-4 ${className}`}
      onSubmit={handleSubmit}
    >
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-2 rounded-lg border ${
            errors.name
              ? "border-red-500 focus:ring-red-500"
              : " border-gray-300 dark:border-gray-600 focus:ring-indigo-500"
          } focus:outline-none focus:ring-2 dark:bg-gray-700 dark:text-gray-200`}
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
      </div>
      
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-2 rounded-lg border ${
            errors.email
              ? "border-red-500 focus:ring-red-500"
              : " border-gray-300 dark:border-gray-600 focus:ring-indigo-500"
          } focus:outline-none focus:ring-2 dark:bg-gray-700 dark:text-gray-200`}
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>
      
      
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`w-full px-4 py-2 rounded-lg border ${
            errors.subject
              ? "border-red-500 focus:ring-red-500"
              : " border-gray-300 dark:border-gray-600 focus:ring-indigo-500"
          } focus:outline-none focus:ring-2 dark:bg-gray-700 dark:text-gray-200`}
        />
        {errors.subject && <p className="text-red-500">{errors.subject}</p>}
      </div>
      
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={`w-full px-4 py-2 rounded-lg border ${
            errors.message 
              ? 'border-red-500 focus:ring-red-500' 
              : 'border-gray-300 dark:border-gray-600 focus:ring-indigo-500'
          } focus:outline-none focus:ring-2 dark:bg-gray-700`}
        />
        {errors.message && (
          <p className="text-sm text-red-500">{errors.message}</p>
        )}
      </div>
      
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{scale:1.02}}
        whileTap={{scale:0.98}}
        className={`w-full py-2 px-4 rounded-lg text-white font-medium ${
          isSubmitting ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600'}
          transition-colors duration-200`}
        >
          
        {isSubmitting ? "Sending..." : "Send Message"}
      </motion.button>
    </motion.form>
  );
}


