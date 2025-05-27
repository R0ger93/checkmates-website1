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
        backgroundSize: "cover", // This fills while keeping aspect ratio
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#000",
        overflow: "hidden",
      }}
    >
      {/* Can add more content here if needed */}
    </div>
  );
}
