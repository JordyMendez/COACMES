import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonPage() {
  return (
    <div className="min-h-screen w-full p-15 space-y-6 px-100">
      {/* Parte superior - banner grande */}
      <Skeleton className="h-24 w-full rounded-lg" />
      <Skeleton className="h-24 w-full rounded-lg" />

      {/* Parte del medio - lado izquierdo y derecho */}
      <div className="flex justify-between">
        {/* Lado izquierdo */}
        <div className="min-h-screen w-full p-15 space-y-6 px-20">
          <Skeleton className="h-10 w-24 " />
          <Skeleton className="h-10 w-24 " />
          <Skeleton className="h-10 w-24 " />
        </div>

        {/* Lado derecho */}
        <div className="min-h-screen w-full p-15 space-y-6 px-20">
          <Skeleton className="h-10 w-24" />
          <Skeleton className="h-10 w-24" />
          <Skeleton className="h-10 w-24" />
        </div>
      </div>

      {/* Línea central grande */}
      <div className="min-h-screen w-full p-15 space-y-6 px-20">
        <Skeleton className="h-6 w-full rounded-md px-4" />
        <Skeleton className="h-6 w-full rounded-md px-4" />
        <Skeleton className="h-6 w-full rounded-md px-4" />
      </div>
    </div>
  );
}



