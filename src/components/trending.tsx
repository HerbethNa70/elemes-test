export default function Trending() {
  const trending = [
    { name: "Pizza Paperoni", type: "Pizza", image: "/images/pizzapaperoni.png", bg: "bg-[#EAF4FC]" },
    { name: "Pizza Meat", type: "Pizza", image: "/images/pizzameat.png", bg: "bg-[#EAF4FC]" },
    { name: "Doner Kebab", type: "Kebab", image: "/images/donnerkebab.png", bg: "bg-[#FDE6E6]" },
    { name: "Salmon Roll", type: "Salmon", image: "/images/salmonroll.png", bg: "bg-[#FFF4E6]" },
    { name: "Cupcake Choco", type: "Cupcake", image: "/images/cupcakechocho.png", bg: "bg-[#FDECEC]" },
    { name: "Doughnut Milk", type: "Doughnut", image: "/images/doughnutmilk.png", bg: "bg-[#EAF8E4]" },
    { name: "Doughnut Unicorn", type: "Doughnut", image: "/images/doughnutuni.png", bg: "bg-[#EAF8E4]" },
    { name: "Kathi Kebab", type: "Kebab", image: "/images/kathikebab.png", bg: "bg-[#FDE6E6]" },
  ];

  return (
    <section className="py-16 px-4">
    <h2 className="text-2xl font-bold text-black mb-1 text-left">
        Browse Our Trending
    </h2>
    <p className="text-[#8BAC3E] font-semibold">Receipt</p>
      {}
      <div className="grid grid-cols-4 gap-6 mt-6">
        {trending.map((item, index) => (
          <div key={index} className={`p-4 rounded-lg ${item.bg} shadow-md`}>
            <img src={item.image} alt={item.name} className="w-full h-24 object-cover rounded-md mb-2" />
            <p className="text-gray-900 font-semibold">{item.name}</p>
            <p className="text-sm text-gray-500">{item.type}</p>
            {/* Rating Bintang */}
            <div className="text-yellow-400 mt-2">★★★★★</div>
          </div>
        ))}
      </div>

      {/* Tombol All Receipt */}
      <div className="mt-6 text-center">
        <button className="px-6 py-2 bg-[#8BAC3E] text-white rounded-full shadow-md hover:bg-[#7A942E] transition">
          ALL Receipt
        </button>
      </div>
    </section>
  );
}
