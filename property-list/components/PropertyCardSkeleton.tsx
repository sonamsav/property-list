export function PropertyCardSkeleton() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden animate-pulse">
      <div className="h-44 bg-gray-300" />
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-300 rounded w-3/4" />
        <div className="h-3 bg-gray-200 rounded w-1/2" />
        <div className="h-3 bg-gray-200 rounded w-2/3" />
        <div className="h-3 bg-gray-200 rounded w-1/3" />
        <div className="border-t my-2" />
        <div className="flex justify-between items-center">
          <div className="h-4 bg-gray-300 rounded w-1/4" />
          <div className="h-8 bg-gray-300 rounded w-1/3" />
        </div>
      </div>
    </div>
  );
}