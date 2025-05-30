export default function HomePage() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        backgroundImage: "url('/checkmateblack.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#000",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "1rem"
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <a
          href="/menu"
          style={{
            display: "inline-block",
            padding: "0.75rem 1.5rem",
            backgroundColor: "#FFD700",
            color: "#000",
            textDecoration: "none",
            fontWeight: "bold",
            borderRadius: "999px",
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            boxShadow: "0 4px 6px rgba(0,0,0,0.3)"
          }}
        >
          View Menu
        </a>
        <a
          href="/contact"
          style={{
            display: "inline-block",
            padding: "0.75rem 1.5rem",
            backgroundColor: "#FFD700",
            color: "#000",
            textDecoration: "none",
            fontWeight: "bold",
            borderRadius: "999px",
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            boxShadow: "0 4px 6px rgba(0,0,0,0.3)"
          }}
        >
          Contact Us
        </a>
        <a
          href="/about"
          style={{
            display: "inline-block",
            padding: "0.75rem 1.5rem",
            backgroundColor: "#FFD700",
            color: "#000",
            textDecoration: "none",
            fontWeight: "bold",
            borderRadius: "999px",
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            boxShadow: "0 4px 6px rgba(0,0,0,0.3)"
          }}
        >
          About Us
        </a>
      </div>
    </div>
  );
}
