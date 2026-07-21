import { Suspense } from "react";
import GalleryContent from "./GalleryContent";
import Header from "@/components/Header";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />

      <Suspense fallback={
        <div className="max-w-7xl mx-auto px-4 py-12 md:px-6">
          <div className="text-center">
            <p className="text-charcoal/50">Loading gallery...</p>
          </div>
        </div>
      }>
        <GalleryContent />
      </Suspense>
    </div>
  );
}
