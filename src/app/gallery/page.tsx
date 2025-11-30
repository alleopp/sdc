import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import GalleryContent from "./GalleryContent";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white text-[rgb(16,12,106)] py-3 px-4 md:py-4 md:px-6 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
          <Link href="/" className="flex items-center gap-2 md:gap-4">
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
          </Link>
          <div className="flex gap-4">
            <Link
              href="/"
              className="text-[rgb(16,12,106)] hover:text-[rgb(30,25,150)] transition-colors font-semibold"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      <Suspense fallback={
        <div className="max-w-7xl mx-auto px-4 py-12 md:px-6">
          <div className="text-center">
            <p className="text-gray-500">Loading gallery...</p>
          </div>
        </div>
      }>
        <GalleryContent />
      </Suspense>
    </div>
  );
}
