import hero from "../assets/hero.png";
import bg from "../assets/bg.png";

function Hero() {
  return (
    <div className="relative bg-red-800 h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
      <div className="relative flex flex-col md:flex-row items-center justify-center h-full text-center md:text-left p-10 text-white space-y-6">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            TASTE THE AUTHENTIC<br />SAUDI CUISINE
          </h1>
          <p className="text-lg">Among the best Saudi chefs in the world, serving you something beyond flavor.</p>
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300">
            Explore Now
          </button>
        </div>

        {/* Image Section */}
        <div className="relative mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src={hero}
            alt="Saudi Cuisine"
            className="w-full max-w-md rounded-lg shadow-lg"
          />

          {/* Floating Labels */}
          {/* <div className="absolute top-2 left-8 bg-purple-600 text-white px-2 py-1 rounded-md text-sm font-medium">
            Emdadul Haque
          </div> */}
          {/* <div className="absolute bottom-4 right-8 bg-purple-600 text-white px-2 py-1 rounded-md text-sm font-medium">
            Faisal Hossen
          </div> */}
          <div className="absolute bottom-12 right-0 bg-yellow-500 text-black px-4 py-2 rounded-full font-bold">
            TODAY'S OFFER
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
