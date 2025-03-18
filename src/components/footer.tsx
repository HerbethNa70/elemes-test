export default function Footer() {
  return (
    <footer className="bg-green-50 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-4 gap-8 items-start">
        {/* Logo & Address */}
        <div>
          <img src="/images/elemes2.png" alt="Elemes Logo" className="h-12" />
          <p className="text-sm text-gray-700 mt-2 leading-relaxed">
            Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan Setiabudi, Kota Jakarta Selatan, 
            Daerah Khusus Ibukota Jakarta 12950
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="mailto:elemesid@gmail.com" className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
              <img src="/images/mail.png" alt="Email" className="h-6 w-6" />
            </a>
            <a href="tel:088811112222" className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
              <img src="/images/telepon.png" alt="Telepon" className="h-6 w-6" />
            </a>
            <a href="https://instagram.com/elemesid" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
              <img src="/images/instagram.png" alt="Instagram" className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Categories</h3>
          <ul className="mt-3 space-y-2 text-gray-700">
            <li>Cupcake</li>
            <li>Pizza</li>
            <li>Kebab</li>
            <li>Salmon</li>
            <li>Doughnut</li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">About Us</h3>
          <ul className="mt-3 space-y-2 text-gray-700">
            <li>About Us</li>
            <li>FAQ</li>
            <li>Report Problem</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Newsletter</h3>
          <p className="text-sm text-gray-700 mt-2">
            Get now free 50% discount for all products on your first order
          </p>
          <div className="mt-3 flex">
            <input
              type="email"
              placeholder="Your email address"
              className="p-2 border rounded-l-md w-full outline-none focus:ring-2 focus:ring-green-400"
            />
            <button className="px-4 bg-[#8BAC3E] text-white rounded-r-md hover:bg-[#7A942E]">SEND</button>
            </div>
          <div className="mt-4 space-y-2 text-gray-700">
            <div className="flex items-center space-x-2">
              <img src="/images/mail.png" alt="Email" className="h-5 w-5" />
              <p>elemesid@gmail.com</p>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/images/telepon.png" alt="Telepon" className="h-5 w-5" />
              <p>0888 1111 2222</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-600 mt-10 text-sm">
        &copy; 2021 ELEMES ID. ALL RIGHTS RESERVED
      </div>
    </footer>
  );
}
