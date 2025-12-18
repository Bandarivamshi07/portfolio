import "../styles/contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

 emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  form.current,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)


      .then(
        () => {
          alert("Message sent successfully 🚀");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          alert("Failed to send message ❌");
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Contact Me</h2>

      <p className="contact-sub">
        Let’s connect! Feel free to reach out for opportunities or collaborations 🚀
      </p>

      {/* CONTACT CARDS */}
      <div className="contact-cards">
        <a href="mailto:bandarivamshi07@gmail.com" className="contact-card">
          📧
          <span>Email</span>
          <p>bandarivamshi07@gmail.com</p>
        </a>

        <a
          href="https://github.com/Bandarivamshi07"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          💻
          <span>GitHub</span>
          <p>@Bandarivamshi07</p>
        </a>

        <a
          href="https://www.linkedin.com/in/bandari-vamshi/"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          🔗
          <span>LinkedIn</span>
          <p>Bandari Vamshi</p>
        </a>

        <a
          href="https://www.instagram.com/bandarivamshi_07/"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          📸
          <span>Instagram</span>
          <p>bandarivamshi_07</p>
        </a>
      </div>

      {/* MESSAGE BOX */}
      <div className="contact-form">
        <h3>Send me a message</h3>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
