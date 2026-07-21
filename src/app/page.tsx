import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <HeroCarousel slides={siteContent.heroSlides}>
        <h1 className="font-serif text-4xl md:text-6xl font-light mb-6 tracking-tight leading-[1.1] drop-shadow-sm">
          {siteContent.tagline}
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed text-cream/90">
          {siteContent.heroSubtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-block bg-accent text-white px-8 py-4 rounded-md font-medium text-base hover:bg-accent-dark transition-colors"
          >
            Get a Free Quote
          </a>
          <Link
            href="/gallery"
            className="inline-block border border-cream/60 text-cream px-8 py-4 rounded-md font-medium text-base hover:bg-cream/10 transition-colors"
          >
            View Our Work
          </Link>
        </div>
      </HeroCarousel>

      {/* About Us Section */}
      <section id="about" className="py-20 md:py-28 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-center mb-12 text-charcoal tracking-tight">About S.D. Construction &amp; Development</h2>
          <p className="text-lg text-charcoal/80 max-w-4xl mx-auto leading-relaxed mb-6">
            {siteContent.about}
          </p>
          <p className="text-lg text-charcoal/80 max-w-4xl mx-auto leading-relaxed">
            Starting my business, I had a vision to bring something new to the industry: superior customer service, innovative construction techniques, and simply a commitment to excellence in every project. Ultimately, my motivation to start a construction company came down to a desire to make a difference—whether that&apos;s creating homes that people live in for generations or executing commercial projects that enhance business success. It&apos;s all about turning dreams into reality, one brick at a time.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 px-6 bg-sand">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-center mb-4 text-charcoal tracking-tight">Our Services</h2>
          <p className="text-center text-charcoal/60 mb-12 max-w-2xl mx-auto">
            Bringing European elegance and craftsmanship to every project
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteContent.services.map((service) => (
              <div
                key={service.id}
                className="bg-cream p-8 rounded-lg transition-all duration-300 border border-black/5 hover:border-accent/40 hover:shadow-sm"
              >
                <div className="text-3xl mb-4 opacity-80">{service.icon}</div>
                <h3 className="font-serif text-xl font-medium mb-3 text-charcoal">{service.title}</h3>
                <p className="text-charcoal/70 leading-relaxed text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 md:py-28 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-center mb-4 text-charcoal tracking-tight">Our Work</h2>
          <p className="text-center text-charcoal/60 mb-10 max-w-2xl mx-auto">
            Explore our portfolio by category
          </p>

          {/* Category Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {Array.from(new Set(siteContent.gallery.map(item => item.category))).map((category) => {
              const categoryImage = siteContent.gallery.find(item => item.category === category);
              return (
                <Link
                  key={category}
                  href={`/gallery?category=${category}`}
                  className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group h-48"
                >
                  <Image
                    src={categoryImage?.image || ''}
                    alt={category}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center p-4">
                    <h3 className="text-white font-semibold text-lg capitalize">{category}</h3>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Link
              href="/gallery"
              className="inline-block bg-accent text-white px-8 py-3 rounded-md font-medium text-base hover:bg-accent-dark transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-ink text-cream/70 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl font-medium mb-4 text-cream">S.D. Construction &amp; Development</h3>
            <p className="text-cream/70">
              Building quality homes and lasting relationships in the Greater Boston area since 2009.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl font-medium mb-4 text-cream">Contact Us</h3>
            <p className="text-cream/70 mb-2">
              <strong className="font-medium text-cream/90">Phone:</strong> {siteContent.contact.phone}
            </p>
            <p className="text-cream/70 mb-2">
              <strong className="font-medium text-cream/90">Email:</strong> {siteContent.contact.email}
            </p>
            <p className="text-cream/70">
              <strong className="font-medium text-cream/90">Location:</strong> {siteContent.contact.address}
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl font-medium mb-4 text-cream">Services</h3>
            <ul className="text-cream/70 space-y-2">
              {siteContent.services.slice(0, 6).map((service) => (
                <li key={service.id}>{service.title}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-10 pt-8 border-t border-cream/15 text-center text-cream/60">
          <p>&copy; {new Date().getFullYear()} S.D. Construction &amp; Development. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
