"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + images.length) % images.length);
  const next = () => setActive((i) => (i + 1) % images.length);

  return (
    <div className="space-y-3">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
        <Image
          src={images[active]}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority
        />

        {images.length > 1 && (
          <>
            {/* Left click zone */}
            <button
              onClick={prev}
              className="absolute left-0 top-0 flex h-full w-1/2 items-center justify-start pl-3 opacity-0 transition-opacity hover:opacity-100"
              aria-label="Previous photo"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/80 shadow backdrop-blur-sm">
                <ChevronLeft className="h-5 w-5 text-gray-800" />
              </span>
            </button>

            {/* Right click zone */}
            <button
              onClick={next}
              className="absolute right-0 top-0 flex h-full w-1/2 items-center justify-end pr-3 opacity-0 transition-opacity hover:opacity-100"
              aria-label="Next photo"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/80 shadow backdrop-blur-sm">
                <ChevronRight className="h-5 w-5 text-gray-800" />
              </span>
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    active === i ? "w-4 bg-white" : "w-1.5 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-2">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative h-20 w-20 overflow-hidden rounded-xl border-2 transition-all ${
                active === i ? "border-gray-900" : "border-transparent opacity-60"
              }`}
            >
              <Image src={src} alt={`${name} ${i + 1}`} fill className="object-cover" sizes="80px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
