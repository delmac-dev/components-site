import React from 'react'
import Wrapper from '../components/Wrapper';;


const data = [
    "bg-background",
    "bg-foreground",
    "bg-card",
    "bg-card-foreground",
    "bg-popover",
    "bg-popover-foreground",
    "bg-primary",
    "bg-primary-foreground",
    "bg-secondary",
    "bg-secondary-foreground",
    "bg-muted",
    "bg-muted-foreground",
    "bg-accent",
    "bg-accent-foreground",
    "bg-destructive",
    "bg-destructive-foreground",
    "bg-border",
    "bg-input",
    "bg-ring",
]

const Colors = () => {
  return (
    <Wrapper title={"Theme Colors"}>
        <div className="w-full h-full flex flex-wrap items-center justify-center gap-4">
            {data.map((color, _i) => (
                <ColorContainer key={_i} color={color} />
            ))}
        </div>
    </Wrapper>
  )
}

export default Colors

const ColorContainer = ({color}) => (

    <div className="w-32 min-w-[128px]">
        <div className={`w-full aspect-video ${color} rounded-md border border-purple-400`} />
        <p className="text-md text-foreground mt-2 text-center whitespace-nowrap text-ellipsis overflow-hidden">{color}</p>
    </div>
)