import { CheckCircle, Mail, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-dark-base via-dark-surface to-dark-base"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-primary mb-4">Get in Touch</h2>
          <p className="text-text-tertiary text-lg">
            Have an opportunity, idea, or role in mind? Let’s connect.
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-dark-card/80 backdrop-blur-md border border-dark-border rounded-xl p-8 shadow-dark-lg">
          {/* Email */}
          <div className="flex items-center justify-center gap-2 mb-6 text-text-secondary">
            <Mail size={18} />
            <a
              href="mailto:singhdevpratap1312@gmail.com"
              className="hover:text-accent transition focus-visible:outline-accent"
            >
              singhdevpratap1312@gmail.com
            </a>
          </div>

          {/* Success Message */}
          {isSuccess ? (
            <div className="text-center py-10">
              <CheckCircle className="w-14 h-14 text-green-400 mx-auto mb-4" />
              <p className="text-text-primary text-lg font-medium">
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
                id="name"
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-dark-elevated/50 border border-dark-border rounded-lg
                text-text-primary placeholder-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition"
              />

              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-dark-elevated/50 border border-dark-border rounded-lg
                text-text-primary placeholder-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition"
              />

              <textarea
                name="message"
                id="message"
                rows={5}
                required
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-dark-elevated/50 border border-dark-border rounded-lg
                text-text-primary placeholder-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent resize-none transition"
              />

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg
                bg-accent hover:bg-accent-light text-white font-medium transition shadow-accent-glow hover:shadow-accent-glow-lg focus-visible:outline-accent"
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
