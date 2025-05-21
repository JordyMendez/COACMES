import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonPage() {
  return (
    <div className="p-5">
      <div className="px-30 p-7 grid grid-cols-3 gap-4">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full col-span-2 col-start-2" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
         <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>   <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
      <div className="flex justify-between">
        <div className="grid grid-cols-6 gap-4">
          <Skeleton className="h-30 w-80 col-span-2 col-start-2"/>
          <Skeleton className="h-30 w-80 col-span-2 col-start-2"/>
          <Skeleton className="h-30 w-80 col-span-2 col-start-2"/>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="grid grid-cols-6 gap-4">
          <Skeleton className="h-30 w-80 col-span-2 col-start-2"/>
          <Skeleton className="h-30 w-80 col-span-2 col-start-2"/>
          <Skeleton className="h-30 w-80 col-span-2 col-start-2"/>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="grid grid-cols-6 gap-4">
          <Skeleton className="h-30 w-80 col-span-2 col-start-2"/>
          <Skeleton className="h-30 w-80 col-span-2 col-start-2"/>
          <Skeleton className="h-30 w-80 col-span-2 col-start-2"/>
        </div>
      </div>
      </div> 
      <div className="grid grid-cols-6 p-5 gap-x-50 ">
        <div className="col-span-2">
        <Skeleton className="h-60 w-80 "/>
        </div>
        <div className="col-span-4 space-y-2" >
        <Skeleton className="h-7 w-185 col-span-2 col-start-2"/>
        <Skeleton className="h-7 w-185 col-span-2 col-start-2"/>
        <Skeleton className="h-7 w-185 col-span-2 col-start-2"/>
        <Skeleton className="h-7 w-185 col-span-2 col-start-2"/>
        <Skeleton className="h-7 w-185 col-span-2 col-start-2"/>
        <Skeleton className="h-7 w-185 col-span-2 col-start-2"/>
        <Skeleton className="h-7 w-185 col-span-2 col-start-2"/>
        </div>
      </div>
    </div>
  );
}



