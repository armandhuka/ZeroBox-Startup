// src/pages/thank.tsx
import React from "react";

const Thanku: React.FC = () => {
  const whatsappNumber = "9484786841";
  const whatsappMessage = encodeURIComponent("ZeroBox Startup");

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🎉 Thank You for Your Purchase!</h1>
      <p style={styles.text}>
        We’ve received your order for <strong>ZeroBox Startup</strong>. You’re one step closer to learning a powerful business model that needs no office or inventory!
      </p>

      <p style={styles.text}>
        💡 <strong>How to access your product:</strong>
        <ul style={styles.list}>
          <li>You will receive the eBook on your email shortly.</li>
          <li>If you don’t receive the email in 10–15 minutes, check your spam folder.</li>
          <li>Still need help? Just message us on WhatsApp 👇</li>
        </ul>
      </p>

      <p style={styles.text}>
        📲 Send us "<strong>ZeroBox Startup</strong>" on WhatsApp and we’ll share the product directly with you.
      </p>

      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.button}
      >
        📩 Message on WhatsApp
      </a>
    </div>
  );
};

export default Thanku;

// Simple styles
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "2rem",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    color: "#333",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  text: {
    fontSize: "1rem",
    marginBottom: "1rem",
  },
  list: {
    textAlign: "left",
    paddingLeft: "1.5rem",
    marginBottom: "1rem",
  },
  button: {
    display: "inline-block",
    padding: "12px 24px",
    backgroundColor: "#25D366",
    color: "#fff",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
    marginTop: "1rem",
  },
};
