import { useState, useEffect } from 'react';
import Wrapper from '../components/Wrapper';
import { AiFillDelete } from 'react-icons/ai';
import { Input } from "@/components/ui/input"

const data = [
    //type: TEXT
    {
        type: "text",
        school_name: "augusco",
        label: "motto",
        value: "some which is cool",
        contributor: 'user id | anonymous'
    },
    //type: IMAGE
    {
        type: "image",
        school_name: "augusco",
        label: "barge",
        value: ["image url"],
        contributor: 'user id | anonymous'
    },
    //type: TEXTAREA
    {
        type: "textarea",
        school_name: "augusco",
        label: "about",
        value: "about the school",
        contributor: 'user id | anonymous'
    },
    //type: CHECKBOX LIST
    {
        type: "check-list",
        school_name: "augusco",
        label: "facities",
        value: "list of facility name",
        contributor: 'user id | anonymous'
    },
    //type: RADIO LIST
    {
        type: "radio-list",
        school_name: "augusco",
        label: "gender",
        value: "male | female | mixed",
        contributor: 'user id | anonymous'
    },
    //type: COURSES OBJECT LIST
    {
        type: "object-list",
        school_name: "augusco",
        label: "corses",
        value: "science:cpbim",
        contributor: 'user id | anonymous'
    },
]

const Contribution = () => {
    const [info, setInfo] = useState({
        school_name: "",
        contributor: "anonymous"
    });


    return (
        <Wrapper title={"Contribution"}>
            <Card />
        </Wrapper>
    )
}

export default Contribution;

const Card = () => {
    return (
        <div className="relative w-[640px] min-h-[240px] rounded-lg bg-card border border-border overflow-hidden">
            <div className="w-full h-11 bg-secondary/30 border-b border-border flex items-center justify-between px-4">
                <h2 className="py-1 px-2.5 border rounded-full text-secondary-foreground/80 text-sm">Anonymous</h2>
                <button className="rounded-md p-1.5 hover:bg-destructive/20 text-destructive">
                    <AiFillDelete size={18} />
                </button>
            </div>
            <div className="w-full min-h-full p-5">
                <div className="w-full mb-4">
                    <label htmlFor="school" className='block mb-3 text-card-foreground/80'>School Name</label>
                    <Input id="school" type="text" className="w-3/4" />
                </div>
                <div className="w-full mb-4">
                    <label htmlFor="motto" className='block mb-3 text-card-foreground/80'>Motto</label>
                    <Input id="motto" type="text" className="w-3/4" />
                </div>
            </div>
        </div>
    )
}