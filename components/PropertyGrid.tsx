import { Property } from "@/type/property";
import PropertyCard from "./PropertyCard";

export default function PropertyGrid({ properties }: { properties: Property[] }) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Top Selling Residential Projects in Mumbai
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
}