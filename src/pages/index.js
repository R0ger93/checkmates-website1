export default function HomePage() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundImage: "url('/checkmateblack.png')",
        backgroundSize: "100% 100%", // STRETCH it fully, edge to edge
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "#000",
      }}
    >
      {/* Optional placeholder to help load */}
      <div style={{ height: "100%", width: "100%" }}></div>
    </div>
  );
}
