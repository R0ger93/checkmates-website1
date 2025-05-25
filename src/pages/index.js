export default function HomePage() {
  return (
    <section
      className="w-screen h-screen flex justify-center items-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/thumbnail1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0" />

      {/* Logo centered */}
      <div className="relative z-10 flex flex-col items-center">
        <img
          src="/logo.png"
          alt="Checkmates Logo"
          className="w-[300px] h-auto rounded-xl shadow-2xl"
        />
      </div>
    </section>
  );
}
