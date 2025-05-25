export default function HomePage() {
  return (
    <section
      className="w-screen h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/thumbnail1.jpg')", // <-- Make sure this file is uploaded in /public
      }}
    >
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
    </section>
  );
}
