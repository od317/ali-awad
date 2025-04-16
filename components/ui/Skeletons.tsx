export function BookCardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="aspect-[3/4] bg-gray-200 rounded-lg mb-3"></div>
      <div className="h-5 bg-gray-200 rounded mb-2 w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded mb-3 w-1/2"></div>
      <div className="flex justify-between">
        <div className="h-4 bg-gray-200 rounded w-8"></div>
        <div className="h-4 bg-gray-200 rounded w-12"></div>
      </div>
    </div>
  );
}

export function BookDetailsSkeleton() {
  return (
    <div className="animate-pulse grid md:grid-cols-2 gap-8">
      <div className="aspect-[3/4] bg-gray-200 rounded-lg"></div>
      <div className="space-y-4">
        <div className="h-8 bg-gray-200 rounded w-3/4"></div>
        <div className="h-6 bg-gray-200 rounded w-1/2"></div>
        <div className="h-4 bg-gray-200 rounded w-16"></div>
        <div className="h-4 bg-gray-200 rounded w-24"></div>
        <div className="h-12 bg-gray-200 rounded w-full mt-8"></div>
        <div className="space-y-2 mt-8">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>
    </div>
  );
}


export function AuthorCardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="aspect-square bg-gray-200 rounded-lg mb-3"></div>
      <div className="h-5 bg-gray-200 rounded mb-2 w-3/4"></div>
      <div className="flex justify-between">
        <div className="flex items-center">
          <div className="h-4 w-4 bg-gray-200 rounded-full mr-1"></div>
          <div className="h-4 bg-gray-200 rounded w-8"></div>
        </div>
        <div className="h-4 bg-gray-200 rounded w-12"></div>
      </div>
    </div>
  );
}
