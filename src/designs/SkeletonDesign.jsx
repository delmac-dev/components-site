import { Skeleton } from "@/components/ui/skeleton"
import Wrapper from "../components/Wrapper"

const SkeletonDesign = () => {
  return (
    <Wrapper title={"Skeleton Shadcn UI"} >
        <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
        </div>
        </div>
    </Wrapper>
  )
}

export default SkeletonDesign