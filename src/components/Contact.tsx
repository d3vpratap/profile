import { CheckCircle, Mail, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-gray-400 text-lg">
            Have an opportunity, idea, or role in mind? Let’s connect.
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-xl p-8">
          {/* Email */}
          <div className="flex items-center justify-center gap-2 mb-6 text-gray-300">
            <Mail size={18} />
            <a
              href="mailto:singhdevpratap1312@gmail.com"
              className="hover:text-white transition"
            >
              singhdevpratap1312@gmail.com
            </a>
          </div>

          {/* Success Message */}
          {isSuccess ? (
            <div className="text-center py-10">
              <CheckCircle className="w-14 h-14 text-green-400 mx-auto mb-4" />
              <p className="text-white text-lg font-medium">
                Message sent successfully!
              </p>
            </div>
          ) : (
            <form
              action="https://formsubmit.co/singhdevpratap1312@gmail.com"
              method="POST"
              onSubmit={() => setIsSuccess(true)}
              className="space-y-4"
            >
              {/* FormSubmit config */}
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Contact Message"
              />
              <input type="hidden" name="_template" value="table" />

              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg
                text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg
                text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500"
              />

              <textarea
                name="message"
                rows={5}
                required
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg
                text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 resize-none"
              />

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg
                bg-indigo-500 hover:bg-indigo-400 text-white font-medium transition"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
