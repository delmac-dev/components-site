import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import Wrapper from "../components/Wrapper"

const ToastDesign = () => {
    const { toast } = useToast()


  return (
    <Wrapper title={"Toast Shadcn UI"} bgcolor={"bg-neutral-50"}>
        <Button
            variant="outline"
            onClick={() => {
                toast({
                title: "Scheduled: Catch up ",
                description: "Friday, February 10, 2023 at 5:57 PM",
                action: (
                    <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
                ),
                })
            }}
        >
            Add to calendar
        </Button>
    </Wrapper>

  )
}

export default ToastDesign