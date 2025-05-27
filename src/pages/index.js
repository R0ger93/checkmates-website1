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
      <h1 style={{ color: "#FFD700", fontSize: "clamp(2rem, 5vw, 4rem)", marginBottom: "1rem" }}>
        Welcome to Checkmates LLC
      </h1>
      <div>
        <a
          href="/menu"
          style={{
            display: "inline-block",
            margin: "0.5rem",
            padding: "0.75rem 1.5rem",
            backgroundColor: "#FFD700",
            color: "#000",
            textDecoration: "none",
            fontWeight: "bold",
            borderRadius: "999px",
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)"
          }}
        >
          View Menu
        </a>
        <a
          href="/contact"
          style={{
            display: "inline-block",
            margin: "0.5rem",
            padding: "0.75rem 1.5rem",
            backgroundColor: "#FFD700",
            color: "#000",
            textDecoration: "none",
            fontWeight: "bold",
            borderRadius: "999px",
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)"
          }}
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
