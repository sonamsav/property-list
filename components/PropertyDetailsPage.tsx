"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";

export default function PropertyDetailPage() {
  const searchParams = useSearchParams();
  const data = searchParams.get("data");

  if (!data) {
    return (
      <div className="p-10 text-center text-gray-500">
        No property data found
      </div>
    );
  }

  const property = JSON.parse(decodeURIComponent(data));

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        
        {/* Image */}
        <div className="relative w-full h-[350px]">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Details */}
        <div className="p-6 space-y-4">
          
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            {property.title}
          </h1>

          <p className="text-gray-600">{property.location}</p>

          <p className="text-lg font-semibold text-green-700">
            {property.price}
          </p>

          <p className="text-gray-800">
            {property.bhk} BHK • {property.type.toUpperCase()}
          </p>

          <div className="border-t pt-4">
            <h2 className="text-lg font-semibold mb-2">About Property</h2>
            <p className="text-gray-600">
              This is a modern residential project with great amenities,
              connectivity, and lifestyle features. Perfect for families
              and investment.
            </p>
          </div>

          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
            Contact Builder
          </button>

        </div>
      </div>

    </main>
  );
}