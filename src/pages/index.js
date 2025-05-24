
export default function HomePage() {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center text-white font-sans relative"
        style={{
         backgroundImage: "url('/thumbnail1.jpg')"
         backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          }}
          >
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 py-20">
        <img
          src="/logo.png"
          alt="Checkmates Logo"
          className="w-64 h-auto mb-6 mx-auto rounded-xl shadow-xl"
        />
 
        <p className="text-xl mt-4 text-gray-200">Bold BBQ. Killer Cheesecake. All Check.</p>
        <a
          href="#menu"
          className="mt-6 inline-block bg-yellow-400 text-black font-bold py-2 px-6 rounded-full hover:bg-yellow-300"
        >
          View Menu
        </a>
      </div>

      <section className="px-6 md:px-20 py-12 bg-black bg-opacity-70 text-center" id="about">
        <h2 className="text-4xl font-bold mb-4 text-yellow-400">The Opening Move</h2>
        <p className="text-gray-200 max-w-2xl mx-auto">
          From slingin’ meal preps to building a street food empire—Checkmates was born from flavor, hustle,
          and a whole lotta chessboard vision. We serve unexpected combos and handcrafted flavors from the grill
          to the cheesecake tray.
        </p>
      </section>

      <section className="px-6 md:px-20 py-12 bg-black bg-opacity-80 text-center" id="menu">
        <h2 className="text-4xl font-bold mb-6 text-yellow-400">The Lineup</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-2 text-yellow-300">The Queen’s Dilla</h3>
            <p className="text-gray-300">Cheesy. Saucy. Royal. Fit for a queen with a flavor throne.</p>
          </div>
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-2 text-yellow-300">Buffaloyalty</h3>
            <p className="text-gray-300">Our buffalo chicken sandwich that reigns with heat and crunch.</p>
          </div>
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-2 text-yellow-300">Twixmate Cheesecake</h3>
            <p className="text-gray-300">Crushed Twix in a cheesecake crown. This one’s the final move.</p>
          </div>
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-2 text-yellow-300">Grill Knight</h3>
            <p className="text-gray-300">Bratwurst with edge—flamed to perfection and served bold.</p>
          </div>
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-2 text-yellow-300">Velvet Rook</h3>
            <p className="text-gray-300">Red velvet cheesecake with a deep checkmate finish.</p>
          </div>
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-2 text-yellow-300">CheckBurger</h3>
            <p className="text-gray-300">Stacked, grilled, and served like royalty. Don’t blink on this one.</p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-20 py-12 bg-black bg-opacity-80 text-center">
        <h2 className="text-4xl font-bold mb-4 text-yellow-400">Checkmate Saturdays</h2>
        <p className="text-gray-200 max-w-xl mx-auto">
          Our weekly pop-up series. Good food. Real people. No repeats. Check us out this weekend and
          experience the flavor ambush in person.
        </p>
      </section>

      <footer className="bg-black py-10 text-center border-t border-gray-800">
        <p className="text-gray-500">Follow us @CheckmatesLLC | Made in Owensboro</p>
      </footer>
    </div>
  );}
