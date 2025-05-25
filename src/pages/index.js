export default function HomePage() {
  return (
    <section
      className="w-screen h-screen bg-cover bg-center bg-no-repeat relative flex justify-center items-center"
      style={{
        backgroundImage: "url('/thumbnail1.jpg')", // Make sure this file is in /public
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      {/* Logo centered */}
      <div className="relative z-10">
        <img
          src="/logo.png" // Make sure this file is in /public
          alt="Checkmates Logo"
          className="w-64 h-auto mx-auto rounded-xl shadow-xl"
        />
      </div>
    </section>
  );
}
