export default function HomePage() {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/checkmateblack.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#000'
      }}
    >
      <h1 className="text-4xl font-bold bg-black bg-opacity-70 p-4 rounded">
        If you see this, the background loaded correctly 🔥
      </h1>
    </div>
  );
}
