import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Mail } from "lucide-react";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/singhdevpratap1312@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          setIsSuccess(false);
          setIsOpen(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Floating Contact Icon */}
      <motion.div
        className="fixed bottom-2 right-13 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg cursor-pointer flex items-center justify-center transition-all"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        {" "}
        Mail
        <Mail className="p-1" size={28} />
      </motion.div>

      {/* Animated Contact Form Modal */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md z-50"
        >
          <motion.div
            className="bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-xl relative max-w-lg w-full mx-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <button
              className="absolute top-3 right-3 text-white bg-gray-700 hover:bg-gray-600 p-2 rounded-full"
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Get in Touch
            </h2>

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl text-white font-semibold mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-300">
                  Your message has been sent successfully.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  placeholder="Your Message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
