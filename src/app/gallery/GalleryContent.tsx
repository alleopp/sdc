"use client";

import Image from "next/image";
import { mockSupabase } from "@/data/mockData";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

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
  const categories = ["all", ...Array.from(new Set(mockSupabase.gallery.map(item => item.category)))];

  // Filter gallery items based on selected category
  const filteredGallery = selectedCategory === "all"
    ? mockSupabase.gallery
    : mockSupabase.gallery.filter(item => item.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:px-6">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-light text-[rgb(16,12,106)] uppercase tracking-wide mb-4">
          Project Gallery
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Browse our portfolio of completed projects and see the quality of our craftsmanship
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all capitalize ${
                selectedCategory === category
                  ? "bg-[rgb(16,12,106)] text-white"
                  : "bg-white text-[rgb(16,12,106)] border border-gray-300 hover:border-[rgb(16,12,106)]"
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
            className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group bg-white"
          >
            <div className="relative h-80 w-full">
              <Image
                src={item.image_url}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-xs text-white/80 uppercase tracking-wide mb-2">
                {item.category}
              </span>
              <h3 className="text-white font-semibold text-xl mb-2">{item.title}</h3>
              <p className="text-white/90 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {filteredGallery.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No projects found in this category.</p>
        </div>
      )}
    </div>
  );
}
