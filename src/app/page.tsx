import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import SectionHeading from "@/components/SectionHeading";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <HeroCarousel slides={siteContent.heroSlides}>
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="h-px w-8 bg-cream/50" />
          <span className="text-xs uppercase tracking-[0.25em] text-cream/90 font-medium">
            Greater Boston · Since 2009
          </span>
          <span className="h-px w-8 bg-cream/50" />
        </div>
        <h1 className="font-serif text-4xl md:text-6xl font-light mb-6 tracking-tight leading-[1.1] text-balance drop-shadow-sm">
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
            Request a Consultation
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-1 lg:order-none">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/photos/home-exterior-stone.jpg"
                alt="A custom stone-and-brick home built by S.D. Construction"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Founded badge */}
            <div className="absolute -bottom-5 -right-4 md:right-8 bg-ink text-cream px-6 py-4 rounded-lg shadow-xl">
              <p className="font-serif text-3xl font-light leading-none">15+</p>
              <p className="text-xs uppercase tracking-wider text-cream/70 mt-1">Years building</p>
            </div>
          </div>

          {/* Copy */}
          <div>
            <SectionHeading
              align="left"
              label="Our Story"
              title="About S.D. Construction & Development"
              className="mb-8"
            />
            <p className="text-charcoal/80 leading-relaxed mb-5">
              {siteContent.about}
            </p>
            <p className="text-charcoal/80 leading-relaxed mb-8">
              I had a vision to bring something new to the industry: superior customer service, innovative construction techniques, and a commitment to excellence in every project. It&apos;s all about turning dreams into reality, one brick at a time.
            </p>

            {/* Signature */}
            <div className="flex items-center gap-4 mb-10">
              <span className="h-px w-10 bg-accent/50" />
              <div>
                <p className="font-serif text-lg text-charcoal">{siteContent.founder.name}</p>
                <p className="text-sm text-charcoal/60">{siteContent.founder.role}</p>
              </div>
            </div>

            {/* Credentials strip */}
            <div className="grid grid-cols-3 gap-4 border-t border-black/10 pt-8">
              {siteContent.highlights.map((item) => (
                <div key={item.value}>
                  <p className="font-serif text-xl md:text-2xl font-light text-accent">{item.value}</p>
                  <p className="text-xs text-charcoal/60 mt-1 leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 px-6 bg-sand">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="What We Do"
            title="Our Services"
            subtitle="Bringing European elegance and craftsmanship to every project."
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10 border border-black/10 rounded-lg overflow-hidden">
            {siteContent.services.map((service, i) => (
              <div
                key={service.id}
                className="group bg-cream p-8 md:p-10 transition-colors duration-300 hover:bg-white"
              >
                <div className="flex items-baseline gap-4 mb-5">
                  <span className="font-serif text-3xl font-light text-accent/40 group-hover:text-accent transition-colors duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-black/10 group-hover:bg-accent/30 transition-colors duration-300" />
                </div>
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
          <SectionHeading
            label="Portfolio"
            title="Our Work"
            subtitle="Explore our craftsmanship by category."
            className="mb-14"
          />

          {/* Category Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {Array.from(new Set(siteContent.gallery.map(item => item.category))).map((category) => {
              const categoryImage = siteContent.gallery.find(item => item.category === category);
              const count = siteContent.gallery.filter(item => item.category === category).length;
              return (
                <Link
                  key={category}
                  href={`/gallery?category=${category}`}
                  className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 group h-52"
                >
                  <Image
                    src={categoryImage?.image || ''}
                    alt={category}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <h3 className="text-white font-serif text-lg capitalize leading-tight">{category}</h3>
                    <p className="text-white/70 text-xs mt-0.5">{count} {count === 1 ? "project" : "projects"}</p>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Link
              href="/gallery"
              className="inline-block bg-accent text-white px-8 py-3.5 rounded-md font-medium text-base hover:bg-accent-dark transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA band */}
      <section id="contact" className="bg-ink px-6 py-20 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-8 bg-cream/40" />
            <span className="text-xs uppercase tracking-[0.22em] text-cream/70 font-medium">Get in touch</span>
            <span className="h-px w-8 bg-cream/40" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-cream text-balance mb-6">
            Let&apos;s build something worth living in.
          </h2>
          <p className="text-cream/70 leading-relaxed mb-10 max-w-xl mx-auto">
            Tell us about your project and we&apos;ll be in touch to schedule a no-obligation consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${siteContent.contact.phone.replace(/[^+\d]/g, "")}`}
              className="inline-block bg-accent text-white px-8 py-4 rounded-md font-medium hover:bg-accent-dark transition-colors"
            >
              Call {siteContent.contact.phone}
            </a>
            <a
              href={`mailto:${siteContent.contact.email}`}
              className="inline-block border border-cream/40 text-cream px-8 py-4 rounded-md font-medium hover:bg-cream/10 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink border-t border-cream/10 text-cream/70 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-serif text-xl font-medium mb-4 text-cream">S.D. Construction &amp; Development</h3>
            <p className="leading-relaxed max-w-xs">
              Building quality homes and lasting relationships in the Greater Boston area since 2009.
            </p>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-[0.18em] text-cream/50 mb-5">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${siteContent.contact.phone.replace(/[^+\d]/g, "")}`} className="hover:text-cream transition-colors">
                  {siteContent.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteContent.contact.email}`} className="hover:text-cream transition-colors">
                  {siteContent.contact.email}
                </a>
              </li>
              <li>{siteContent.contact.address}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-[0.18em] text-cream/50 mb-5">Services</h3>
            <ul className="space-y-2.5">
              {siteContent.services.map((service) => (
                <li key={service.id}>
                  <Link href="/#services" className="hover:text-cream transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-cream/15 text-center text-sm text-cream/50">
          <p>&copy; {new Date().getFullYear()} S.D. Construction &amp; Development. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
