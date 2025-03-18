export default function Hero() {
  return (
      <section className="mt-24 flex items-center justify-between">
          {/* Kiri */}
          <div className="max-w-lg">
    <h2 className="text-5xl font-bold text-[#8BAC3E] leading-tight">
        Good Food Us <br /> Good Mood
    </h2>
              <p className="text-lg text-gray-600 mt-4">
                  I would think that conserving our natural resources should be a conservative position:
                  Not to waste food, and not to throw away a lot of the food that we buy.
              </p>
              <div className="mt-6 flex space-x-4">
                  <button className="bg-[#8BAC3E] hover:bg-[#7A942E] text-white px-4 py-1.5 rounded-full text-sm font-semibold">Daftar Sekarang</button>
                  <button className="px-6 py-3 border border-gray-400 text-gray-700 rounded-lg">About Us</button>
              </div>
          </div>

          {/* Kanan */}
          <div className="relative">
              <img
                  src="/images/MaskGroup.png"
                  alt="Green Salad Tomato"
                  className="w-[400px] h-[400px] object-cover rounded-full"
              />
              <div className="absolute bottom-[-20px] left-[-30px] bg-white p-3 rounded-lg flex items-center space-x-3">
                  <img
                      src="/images/MaskGroup.png"
                      alt="Green Salad"
                      className="w-12 h-12 rounded-full"
                  />
                  <div>
                      <p className="text-gray-700 font-semibold">Green Salad Tomato</p>
                      <p className="text-sm text-gray-500">Tomato</p>
                      <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
                  </div>
              </div>
          </div>
      </section>
  );
}
