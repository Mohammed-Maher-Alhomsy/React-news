import { Skeleton } from "@/components/ui/skeleton";

export function Spinner() {
  return (
    <div className="flex justify-center flex-wrap gap-6">
      <div className="flex flex-col items-center mt-5 space-y-3 ">
        <Skeleton className="h-[125px] w-[250px] bg-indigo-500 rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px] bg-indigo-500" />
          <Skeleton className="h-4 w-[200px] bg-indigo-500" />
        </div>
      </div>

      <div className="flex flex-col items-center mt-5 space-y-3 ">
        <Skeleton className="h-[125px] w-[250px] bg-indigo-500 rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px] bg-indigo-500" />
          <Skeleton className="h-4 w-[200px] bg-indigo-500" />
        </div>
      </div>

      <div className="flex flex-col items-center mt-5 space-y-3 ">
        <Skeleton className="h-[125px] w-[250px] bg-indigo-500 rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px] bg-indigo-500" />
          <Skeleton className="h-4 w-[200px] bg-indigo-500" />
        </div>
      </div>
    </div>
  );
}
