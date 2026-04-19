"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export type Property = {
  id: number;
  title: string;
  location: string;
  price: string;
  bhk: string;
  type: "buy" | "rent";
  image: string;
};

export default function PropertyCard({ property }: { property: Property }) {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <Link
      href={{
        pathname: `/properties/${property.id}`,
        query: {
          data: encodeURIComponent(JSON.stringify(property)),
        },
      }}
    >
      <article className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition overflow-hidden cursor-pointer hover:scale-[1.02]">
        <div className="relative h-44 w-full bg-gray-200">
          {!imgLoaded && (
            <div className="absolute inset-0 animate-pulse bg-gray-300" />
          )}

          <Image
            src={property.image}
            alt={property.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            onLoad={() => setImgLoaded(true)}
            className={`object-cover transition-opacity duration-300 ${
              imgLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        <div className="p-4 space-y-2">
          <h2 className="text-base font-semibold text-gray-900 line-clamp-2">
            {property.title}
          </h2>

          <p className="text-xs text-gray-500">By Developer</p>
<p
  className={`text-xs font-semibold px-2 py-1 rounded-md w-fit ${
    property.type === "buy"
      ? "bg-blue-100 text-blue-700"
      : "bg-green-100 text-green-700"
  }`}
>
  {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
</p>

          <p className="text-sm text-gray-700">{property.location}</p>

          <p className="text-xs font-medium text-gray-800">
            {property.bhk} BHK Residential Apartments
          </p>

          <div className="border-t my-2" />

          <div className="flex items-center justify-between">
            <p className="text-base font-semibold text-gray-900">
              {property.price} 
            </p>

            <span className="bg-green-600 text-white text-sm px-4 py-1.5 rounded-md">
              View →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
