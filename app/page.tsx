import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow p-4 flex justify-between">
        <div className="flex items-center">
          <Image
            src="https://via.placeholder.com/100x40?text=Ark+House"
            alt="Ark House Logo"
            width={100}
            height={40}
            className="mr-2"
          />
          <h1 className="text-xl font-bold">Ark House</h1>
        </div>
        <ul className="flex gap-4">
          <li><a href="#" className="hover:text-blue-500">Home</a></li>
          <li><a href="#" className="hover:text-blue-500">Listings</a></li>
          <li><a href="#" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-500 text-white text-center p-16">
        <h2 className="text-4xl font-bold">Find Your Dream Home</h2>
        <p className="mt-4">Buy, Rent, or Sell Properties Easily</p>
      </section>

      {/* Search Section */}
      <section className="p-6 bg-white shadow mt-4 mx-4 rounded">
        <div className="grid md:grid-cols-4 gap-4">
          <input type="text" placeholder="Location" className="p-2 border rounded" />
          <input type="number" placeholder="Min Price" className="p-2 border rounded" />
          <input type="number" placeholder="Max Price" className="p-2 border rounded" />
          <button className="bg-blue-500 text-white p-2 rounded">View Listings</button>
        </div>
      </section>

      {/* Listings */}
      <section className="p-6">
        <h3 className="text-2xl font-bold mb-4">Featured Properties</h3>
        <div className="grid md:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="bg-white rounded shadow">
            <Image src="./mansion.jpg" alt="house" width={400} height={300} className="rounded-t" />
            <div className="p-4">
              <h4 className="font-bold">3 Bedroom Apartment</h4>
              <p>Nairobi</p>
              <p className="text-blue-500 font-bold">KSh 5,000,000</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded shadow">
            <Image src="./villa.jpg" alt="villa" width={400} height={300} className="rounded-t" />
            <div className="p-4">
              <h4 className="font-bold">Modern Villa</h4>
              <p>Ruaka</p>
              <p className="text-blue-500 font-bold">KSh 12,000,000</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded shadow">
            <Image src="./land.jpg" alt="land" width={400} height={300} className="rounded-t" />
            <div className="p-4">
              <h4 className="font-bold">Land for Sale</h4>
              <p>Kiambu</p>
              <p className="text-blue-500 font-bold">KSh 2,500,000</p>
            </div>
          </div>

        </div>

        <button className="mt-4 inline-block bg-blue-500 text-white p-2 rounded">
          View All Listings
        </button>
      </section>

      {/* Map Section */}
      <section className="p-6">
        <h3 className="text-2xl font-bold mb-4">Map of Mombasa</h3>
       <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127357.68521556359!2d39.58386093984298!3d-4.035184590614041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184012e78ec02c7d%3A0xcb618bbc35d0db5a!2sMombasa!5e0!3m2!1sen!2ske!4v1775733350889!5m2!1sen!2ske"
  width="100%"
  height="450"
  className="border-0 rounded"
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
      </section>

      {/* Contact Section */}
      <section className="bg-white p-6 m-4 rounded shadow">
        <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
        <form className="grid gap-4">
          <input type="text" placeholder="Your Name" className="p-2 border rounded" />
          <input type="email" placeholder="Your Email" className="p-2 border rounded" />
          <textarea placeholder="Message" className="p-2 border rounded"></textarea>
          <button className="bg-blue-500 text-white p-2 rounded">Send</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4 mt-6">
        <p>© 2026 Ark House. All rights reserved.</p>
      </footer>
    </div>
  );
}
