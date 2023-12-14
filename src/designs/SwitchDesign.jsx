import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import Wrapper from "../components/Wrapper"

const SwitchDesign = () => {
  return (
    <Wrapper title={"Switch Shadcn UI"}>
        <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
    </Wrapper>
  )
}

export default SwitchDesign