export default function BlogPostLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Skeleton */}
        <div className="mb-12">
          <div className="h-4 w-1/3 bg-gray-200 rounded mb-6"></div>
          <div className="h-10 bg-gray-200 rounded w-full mb-8"></div>
          <div className="aspect-video rounded-lg bg-gray-200 mb-8"></div>
        </div>

        {/* Content Skeleton */}
        <div className="space-y-4 mb-12">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
          ))}
        </div>

        {/* Tags Skeleton */}
        <div className="mb-12">
          <div className="h-4 w-1/4 bg-gray-200 rounded mb-3"></div>
          <div className="flex gap-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-6 w-16 bg-gray-200 rounded-full"></div>
            ))}
          </div>
        </div>

        {/* Author Skeleton */}
        <div className="flex gap-4 items-center mb-12">
          <div className="h-16 w-16 rounded-full bg-gray-200"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
            <div className="h-3 bg-gray-200 rounded w-full"></div>
            <div className="h-3 bg-gray-200 rounded w-4/5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
