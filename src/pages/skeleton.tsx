import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonPage() {
  return (
    <div className="min-h-screen w-full p-6 space-y-6 bg-white px-100">
      {/* Parte superior - banner grande */}
      <Skeleton className="h-24 w-full rounded-lg bg-gray-300" />

      {/* Parte del medio - lado izquierdo y derecho */}
      <div className="flex justify-between">
        {/* Lado izquierdo */}
        <div className="space-y-3">
          <Skeleton className="h-10 w-24 bg-gray-300" />
          <Skeleton className="h-10 w-24 bg-gray-300" />
          <Skeleton className="h-10 w-24 bg-gray-300" />
        </div>

        {/* Lado derecho */}
        <div className="space-y-3">
          <Skeleton className="h-10 w-24 bg-gray-300" />
          <Skeleton className="h-10 w-24 bg-gray-300" />
          <Skeleton className="h-10 w-24 bg-gray-300" />
        </div>
      </div>

      {/* Línea central grande */}
      <div className="pt-4">
        <Skeleton className="h-6 w-full bg-gray-300 rounded-md" />
      </div>
    </div>
  );
}



