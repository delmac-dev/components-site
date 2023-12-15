import React, { useState } from 'react'
import Wrapper from '../components/Wrapper';
import { AiOutlineFolder, AiOutlineFile } from 'react-icons/ai'
import { FaChevronRight } from 'react-icons/fa'

const data = [
    {
        title: "item main 1",
        children: [{title: "sub item 1", children: []}, {title: "sub item 2", children: []}, {title: "sub item 3", children: []}]
    },
    {
        title: "item main 2",
        children: [{title: "sub item 1", children: []}, {title: "sub item 2", children: []}]
    },
    {
        title: "item main 3",
        children: []
    },
]

const Directory = () => {
  return (
    <Wrapper title={"Directory"}>
        <div className="h-auto w-[320px] border border-border rounded-md">
            <Container data={data} />
        </div>
    </Wrapper>
  )
}

export default Directory;

const Container = ({data}) => {
    return (
        <div className='w-full h-auto flex flex-col'>
            {data && data.map((item, index) => (
                <Link link={item} key={index} />
            ))}
        </div>
    )
}

const Link = ({link}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className={`w-full pl-5 overflow-hidden ${!open ? 'h-12' : ''}`}>
            <div className="relative w-full h-12 text-lg text-primary/50 flex items-center justify-start gap-2">
                {link.children.length? <AiOutlineFolder size={20} /> : <AiOutlineFile size={20} />}
                <h2 className='text-foreground'>{link.title}</h2>
                {link.children.length ? <FaChevronRight onClick={()=> setOpen((prev) => !prev)} className={`absolute right-4 text-foreground/50 ${!open? 'rotate-0' : 'rotate-90'} transition-all duration-300 ease-out`} size={14} /> : ''}
            </div>
            {link.children.length ? <Container data={link.children} /> : ''}
        </div>
    )
}