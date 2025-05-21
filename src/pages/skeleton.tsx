import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonPage() {
  return (
    <div className="min-h-screen w-full p-15 space-y-6 px-90">
      <Skeleton className="h-24 w-full rounded-lg" />
      <Skeleton className="h-24 w-full rounded-lg" />
      <div className="flex justify-between">
        <div className="min-h-screen w-full p-15 space-y-6 px-20">
          <Skeleton className="h-10 w-24 " />
          <Skeleton className="h-10 w-24 " />
          <Skeleton className="h-10 w-24 " />
        </div>
        <div className="min-h-screen w-full p-15 space-y-6 px-20">
          <Skeleton className="h-10 w-24" />
          <Skeleton className="h-10 w-24" />
          <Skeleton className="h-10 w-24" />
        </div>
      </div>
      <div className="min-h-screen w-full p-15 space-y-6 px-20">
        <Skeleton className="h-6 w-full rounded-md px-4" />
        <Skeleton className="h-6 w-full rounded-md px-4" />
        <Skeleton className="h-6 w-full rounded-md px-4" />
      </div>
    </div>
  );
}



