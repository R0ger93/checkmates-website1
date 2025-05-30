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
        overflow: "auto",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "2rem 1rem",
        paddingTop: "20vh"
      }}
    >
      <h1
        style={{
          color: "#FFD700",
          fontSize: "clamp(2rem, 5vw, 4rem)",
          marginBottom: "1.5rem",
          textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
          maxWidth: "90%",
          lineHeight: "1.2"
        }}
      >
        Welcome to Checkmates LLC
      </h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "100%", maxWidth: "400px" }}>
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
            boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
            width: "100%"
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
            boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
            width: "100%"
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
            boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
            width: "100%"
          }}
        >
          About Us
        </a>
      </div>
    </div>
  );
}
