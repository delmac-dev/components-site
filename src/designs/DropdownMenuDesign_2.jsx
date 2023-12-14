import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Wrapper from "../components/Wrapper"
import { useState } from "react"

const DropdownMenuDesign_2 = () => {
    const [position, setPosition] = useState("bottom")

    return (
        <Wrapper title={"Dropdown Radio Shadcn UI"} bgcolor={"bg-neutral-50"}>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">Open</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                        <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </Wrapper>
    )
}

export default DropdownMenuDesign_2