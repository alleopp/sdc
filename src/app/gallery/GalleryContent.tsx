"use client";

import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import SectionHeading from "@/components/SectionHeading";

export default function GalleryContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || "all");

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "all") {
      router.push("/gallery");
    } else {
      router.push(`/gallery?category=${category}`);
    }
  };

  // Get unique categories from gallery items
  const categories = ["all", ...Array.from(new Set(siteContent.gallery.map(item => item.category)))];

  // Filter gallery items based on selected category
  const filteredGallery = selectedCategory === "all"
    ? siteContent.gallery
    : siteContent.gallery.filter(item => item.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-14 md:px-6 md:py-20">
      {/* Page Title */}
      <SectionHeading
        label="Portfolio"
        title="Project Gallery"
        subtitle="Browse our completed projects and see the quality of our craftsmanship."
        className="mb-12"
      />

      {/* Category Filter */}
      <div className="mb-12">
        <div className="flex flex-wrap gap-2.5 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-5 py-2 rounded-full text-sm uppercase tracking-wider transition-colors capitalize ${
                selectedCategory === category
                  ? "bg-accent text-white border border-accent"
                  : "text-charcoal/70 border border-charcoal/20 hover:border-accent hover:text-accent"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGallery.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 group bg-cream"
          >
            <div className="relative h-80 w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
            {/* Persistent gradient + title; description reveals on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <span className="text-xs text-white/80 uppercase tracking-[0.15em]">
                {item.category}
              </span>
              <h3 className="text-white font-serif text-xl mt-1.5">{item.title}</h3>
              <p className="text-white/85 text-sm mt-1 max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 group-hover:mt-2 transition-all duration-300 ease-out">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {filteredGallery.length === 0 && (
        <div className="text-center py-12">
          <p className="text-charcoal/50 text-lg">No projects found in this category.</p>
        </div>
      )}
    </div>
  );
}
