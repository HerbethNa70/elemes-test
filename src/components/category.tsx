const categories = [
  { name: "Cupcake", color: "bg-[#FDECEC]", image: "/images/cupcake1.png", items: 22 },
  { name: "Pizza", color: "bg-[#EAF4FC]", image: "/images/pizza1.png", items: 25 },
  { name: "Kebab", color: "bg-[#FDE6E6]", image: "/images/kebab1.png", items: 12 },
  { name: "Salmon", color: "bg-[#FFF4E6]", image: "/images/ikansalmon.png", items: 22 },
  { name: "Doughnut", color: "bg-[#EAF8E4]", image: "/images/doughnut.png", items: 11 },
];

export default function Category() {
  return (
    <section className="py-16 px-4">
    <h2 className="text-2xl font-bold text-black mb-1 text-left">
        Browse Our Category
    </h2>
    <p className="text-[#8BAC3E] font-semibold">Receipt</p>
      <div className="flex space-x-4 overflow-x-auto">
        {categories.map((item, index) => (
          <div key={index} className={`p-4 rounded-lg ${item.color} min-w-[120px] flex flex-col items-center`}>
            <img src={item.image} alt={item.name} className="w-16 h-16 object-contain mb-2" />
            <p className="text-gray-700 font-semibold text-center">{item.name}</p>
            <p className="text-gray-500 text-sm">{item.items} items</p>
          </div>
        ))}
      </div>
      {}
      <div className="flex justify-center mt-6">
       <div className="flex space-x-8">
        <button className="px-4 py-2 bg-[#8BAC3E] text-white rounded-lg">Prev</button>
        <button className="px-4 py-2 bg-[#8BAC3E] text-white rounded-lg">Next</button>
    </div>
  </div>
    </section>
  );
}
