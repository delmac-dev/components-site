import { useState, useEffect } from 'react';
import Wrapper from '../components/Wrapper';

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
            <div className="w-full h-11 bg-secondary/50 border-b border-border"></div>
        </div>
    )
}