"use client";

import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import PropertyCard from "@/components/PropertyCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Property = {
  id: number;
  title: string;
  location: string;
  price: string;
  bhk: string;
  type: "buy" | "rent";
  image: string;
};

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedBhk, setSelectedBhk] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get("/api/properties");
        setProperties(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load properties");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setCurrentPage(1);
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const query = debouncedSearch.toLowerCase();

      const matchesSearch =
        property.location.toLowerCase().includes(query) ||
        property.title.toLowerCase().includes(query);

      const matchesBhk =
        selectedBhk === "all" || property.bhk.startsWith(selectedBhk);

      const matchesType =
        selectedType === "all" || property.type === selectedType;

      return matchesSearch && matchesBhk && matchesType;
    });
  }, [properties, debouncedSearch, selectedBhk, selectedType]);

  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);

  const paginatedProperties = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProperties.slice(start, start + itemsPerPage);
  }, [filteredProperties, currentPage]);

  const resetFilters = () => {
    setSearch("");
    setDebouncedSearch("");
    setSelectedBhk("all");
    setSelectedType("all");
    setCurrentPage(1);
  };

  const goPrev = () => {
    setCurrentPage((p) => Math.max(p - 1, 1));
  };

  const goNext = () => {
    setCurrentPage((p) => Math.min(p + 1, totalPages));
  };

  return (
    <main className="min-h-screen bg-gray-50">
            <header className="sticky top-0 z-50 border-b bg-white shadow-sm">

        <div className="mx-auto max-w-7xl px-6 py-8">
          <h2 className="text-xl font-bold text-gray-900">Property Listings</h2>

          <div className="mt-4 flex flex-wrap items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
            <div className="relative flex-1 min-w-[260px]">
              <input
                type="text"
                placeholder="Search by location or city"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-11 rounded-lg border border-gray-300 bg-white px-4 pl-10 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                🔍
              </span>
            </div>

            <select
              value={selectedBhk}
              onChange={(e) => setSelectedBhk(e.target.value)}
              className="h-11 rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option value="all">All</option>
              <option value="1">1 BHK</option>
              <option value="2">2 BHK</option>
              <option value="3">3 BHK</option>
              <option value="4">4 BHK</option>
            </select>

            <div className="flex h-11 overflow-hidden rounded-lg border border-gray-300">
              {["all", "buy", "rent"].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type as "all" | "buy" | "rent")}
                  className={`px-4 text-sm capitalize transition ${selectedType === type
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <button
              onClick={resetFilters}
              className="h-11 rounded-lg border border-gray-300 bg-white px-4 text-sm text-gray-700 transition hover:bg-gray-100"
            >
              Reset
            </button>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <h3 className="text-xl md:text-xl font-bold text-center mb-5 text-gray-900">
          Top Selling Residential Projects in Mumbai
        </h3>

        {loading ? (
          <div className="text-center py-20 text-gray-500">Loading properties...</div>
        ) : error ? (
          <div className="text-center py-20 text-red-500">{error}</div>
        ) : (
          <>
            <p className="mb-4 text-sm text-gray-600">
              {filteredProperties.length} properties found
            </p>

            {filteredProperties.length === 0 ? (
              <div className="text-center py-20 text-gray-500">
                No properties found
              </div>
            ) : (
              <>
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {paginatedProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
 <div className="flex items-center justify-center gap-4 mt-10">
                  <button
                    onClick={goPrev}
                    disabled={currentPage === 1}
                    className="p-2 rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-300"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <span className="text-sm text-gray-700">
                    Page {currentPage} of {totalPages || 1}
                  </span>

                  <button
                    onClick={goNext}
                    disabled={currentPage === totalPages || totalPages === 0}
                    className="p-2 rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-300"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </section>
    </main>
  );
}
