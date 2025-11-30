import Image from "next/image";
import { mockSupabase } from "@/data/mockData";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header with Contact Info */}
      <header className="bg-white text-[rgb(16,12,106)] py-3 px-4 md:py-4 md:px-6 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
          <div className="flex items-center gap-2 md:gap-4">
            <Image
              src="/logo.png"
              alt="SD Construction Logo"
              width={200}
              height={200}
              quality={100}
              priority
              className="rounded w-[100px] h-[50px] md:w-[220px] md:h-[150px]"
            />
            <div>
              <h1 className="text-base md:text-2xl font-bold text-[rgb(16,12,106)]">S.D. Construction</h1>
              <p className="text-xs md:text-sm text-gray-600">General Construction and Development</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
            <a
              href={`mailto:${mockSupabase.contact.email}`}
              className="bg-[rgb(16,12,106)] text-white px-3 py-1.5 md:px-6 md:py-2 rounded-lg text-xs md:text-base font-semibold hover:bg-[rgb(30,25,150)] transition-colors text-center"
            >
              Email
            </a>
            <a
              href={`tel:${mockSupabase.contact.phone}`}
              className="bg-[rgb(16,12,106)] text-white px-3 py-1.5 md:px-6 md:py-2 rounded-lg text-xs md:text-base font-semibold hover:bg-[rgb(30,25,150)] transition-colors text-center whitespace-nowrap"
            >
              Call Us
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="brand-gradient text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 uppercase tracking-wide">{mockSupabase.tagline}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            {mockSupabase.mission}
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-[rgb(16,12,106)] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Get a Free Quote
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-[rgb(16,12,106)] uppercase tracking-wide">About S.D. Construction &amp; Development</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6">
            {mockSupabase.about}
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Starting my business, I had a vision to bring something new to the industry: superior customer service, innovative construction techniques, and simply a commitment to excellence in every project. Ultimately, my motivation to start a construction company came down to a desire to make a difference—whether that&apos;s creating homes that people live in for generations or executing commercial projects that enhance business success. It&apos;s all about turning dreams into reality, one brick at a time.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-4 text-[rgb(16,12,106)] uppercase tracking-wide">Our Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Bringing European elegance and craftsmanship to every project
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockSupabase.services.map((service) => (
              <div
                key={service.id}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-[rgb(16,12,106)]"
              >
                <div className="text-3xl mb-4 opacity-80">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-3 text-[rgb(16,12,106)]">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-4 text-[rgb(16,12,106)] uppercase tracking-wide">Our Work</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            A showcase of our recent projects and craftsmanship
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockSupabase.gallery.map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden rounded-lg shadow-lg group"
              >
                <Image
                  src={item.image_url}
                  alt={item.title}
                  width={800}
                  height={600}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                  <p className="text-gray-200 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[rgb(16,12,106)] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">S.D. Construction &amp; Development</h3>
            <p className="text-gray-300">
              Building quality homes and lasting relationships in the Greater Boston area since 2009.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300 mb-2">
              <strong>Phone:</strong> {mockSupabase.contact.phone}
            </p>
            <p className="text-gray-300 mb-2">
              <strong>Email:</strong> {mockSupabase.contact.email}
            </p>
            <p className="text-gray-300">
              <strong>Location:</strong> {mockSupabase.contact.address}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="text-gray-300 space-y-2">
              {mockSupabase.services.slice(0, 6).map((service) => (
                <li key={service.id}>{service.title}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/20 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} S.D. Construction &amp; Development. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
