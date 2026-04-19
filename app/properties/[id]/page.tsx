"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";

export default function PropertyDetailPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const data = searchParams.get("data");

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        No property data found
      </div>
    );
  }

  const property = JSON.parse(decodeURIComponent(data));

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-white px-4 py-6">

      {/* BACK BUTTON OUTSIDE CARD */}
      <div className="max-w-4xl mx-auto mb-4">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-700 hover:text-black transition cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 18l-6-6 6-6"
            />
          </svg>
          <span className="font-medium">Go Back</span>
        </button>
      </div>

      {/* CARD */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-in">

        <div className="relative h-[280px] md:h-[380px] w-full group overflow-hidden">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          <div className="absolute top-4 left-4 flex gap-2">
            <span className="bg-white/90 text-black text-xs px-3 py-1 rounded-full font-medium shadow">
              {property.type.toUpperCase()}
            </span>
            <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow">
              VERIFIED
            </span>
          </div>
        </div>

        <div className="p-5 md:p-6 space-y-4 animate-slide-up">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">
              {property.title}
            </h1>
            <p className="text-sm text-gray-500">{property.location}</p>
          </div>

          <div className="bg-gray-50 border rounded-xl p-3 flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500">Price</p>
              <p className="text-lg font-bold text-green-700">
                {property.price}
              </p>
            </div>

            <div className="text-right">
              <p className="text-xs text-gray-500">Configuration</p>
              <p className="text-sm font-semibold text-gray-800">
                {property.bhk} BHK
              </p>
            </div>
          </div>

          <div className="flex gap-2 flex-wrap">
            <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">
              Premium Project
            </span>
            <span className="bg-purple-50 text-purple-700 text-xs px-3 py-1 rounded-full">
              Modern Amenities
            </span>
            <span className="bg-orange-50 text-orange-700 text-xs px-3 py-1 rounded-full">
              Prime Location
            </span>
          </div>

          <div className="border-t pt-4">
            <h2 className="font-semibold text-gray-900 mb-2">
              About this property
            </h2>

            <p className="text-sm text-gray-600 leading-relaxed">
              A premium residential development offering luxurious living
              spaces, excellent connectivity, and thoughtfully designed
              interiors. Perfect for families seeking comfort and modern
              lifestyle in a prime location.
            </p>
          </div>

          <div className="flex gap-3 pt-2">
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl transition-all duration-300 hover:shadow-lg">
              Contact Builder
            </button>

            <button className="flex-1 border border-gray-400 text-gray-800 hover:bg-gray-100 py-2.5 rounded-xl transition hover:shadow-sm active:scale-95">
              Save
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out;
        }

        .animate-slide-up {
          animation: slideUp 0.5s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { transform: translateY(15px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </main>
  );
}