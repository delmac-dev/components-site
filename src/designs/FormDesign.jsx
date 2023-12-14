import { useState, useEffect } from "react"
import Wrapper from "../components/Wrapper";
import { BiLogIn } from "react-icons/bi";

const data = [
    {
        title: 'React',
        language: 'javascript',
        snippet: 'react example snippet'
    },
    {
        title: 'Tailwind CSS',
        language: 'javascript',
        snippet: 'javascript config code'
    },
    {
        title: 'global.css',
        language: 'css',
        snippet: 'css code'
    }
]

const FormDesign = () => {
    const [formList, setFormList] = useState(data);
    const [active, setActive] = useState(null);
    const [newData, setNewData] = useState({
        title: '',
        language: '',
        snippet: ''
    });

    useEffect(() => {
        console.log(active);
    }, [active]);


    return (
        <Wrapper title={"Form Design"} bgcolor={"bg-neutral-950"}>
            <div className="w-[600px] min-h-[300px] rounded-md border border-neutral-800 bg-neutral-900 px-1">
                <div className="w-full h-14 flex items-center justify-start px-4 border-b border-neutral-800">
                    <label className="text-gray-200 text-lg font-medium">Code</label>
                </div>
                <div className="w-full h-auto">
                    <div className="w-full h-auto flex border-b border-neutral-800 overflow-x-auto scrollbar-none">
                        <div className="group h-full min-w-[140px] p-1 w-[140px] flex gap-2 items-center justify-start relative">
                            <Input 
                                label={"title"}
                                value={newData.title} 
                                setValue={(text) => (setNewData({...newData, title: text}))}
                                handleActive={()=> setActive(null)}
                            />
                            
                            <Button />
                        </div>
                        {formList.map((item, index) => (
                            <div key={index} className="group h-full min-w-[140px] p-1 w-[140px] flex gap-2 items-center justify-start relative">
                                <Input  
                                    label={"title"}
                                    value={item.title} 
                                    setValue={(text) => {
                                        let updated = item;
                                        updated.title = text;
                                        setFormList((d) => d.map((_d, i)=> i === index ? _d = updated : _d ))
                                    }} 
                                    handleActive = {()=> setActive(index)}
                                />

                                <Button />
                            </div>
                        ))}
                    </div>
                    <div className="w-full p-2 flex flex-col gap-2">
                        {
                            active === null ? 
                                <>
                                    <Input
                                        noFocusBg
                                        label={"language"}
                                        value={newData.language}
                                        setValue={(text) => (setNewData({...newData, language: text}))}
                                    />
                                    <TextArea 
                                        value={newData.snippet} 
                                        setValue={(text) => (setNewData({...newData, snippet: text}))} 
                                    /> 
                                </> :
                                <>
                                    <Input 
                                        noFocusBg
                                        label={"language"}
                                        value={formList[active].language} 
                                        setValue={(text) => {
                                            let updated = formList[active];
                                            updated.language = text;
                                            setFormList((d) => d.map((_d, i)=> i === index ? _d = updated : _d ))
                                        }} 
                                    />
                                    <TextArea 
                                        value={formList[active].snippet} 
                                        setValue={(text) => {
                                            let updated = formList[active];
                                            updated.snippet = text;
                                            setFormList((d) => d.map((_d, i)=> i === active? _d = updated : _d ))
                                        }} 
                                    />
                                </>
                        }
                    </div>

                </div>
            </div>

        </Wrapper>
    )
}

export default FormDesign;

const Input = ({label,value, setValue, handleActive, noFocusBg}) => {

    return (
        <input 
            type="text" 
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
            onClick={handleActive} 
            placeholder={`Enter ${label}`}
            className={`w-full text-neutral-300 h-8 border-0 rounded-sm px-3 py-2 outline-none text-sm ${noFocusBg? "bg-neutral-800" : "bg-neutral-900 focus:bg-neutral-800"}`} 
        />
    )
}

const TextArea = ({value, setValue}) => {

    return (
        <textarea 
            cols="30" 
            rows="10" 
            value={value} 
            placeholder="Enter snippet"
            onChange={(e) => setValue(e.target.value)} 
            className="w-full h-full text-neutral-300 border-0 bg-neutral-800 rounded-md px-3 py-2 outline-none text-sm"
        />
    )
};

const Button = ({children}) => {
    return (
        <button className="aspect-square w-6 rounded-sm bg-neutral-700 hover:bg-neutral-700/70 absolute top-1/2 -translate-y-1/2 right-2 hidden group-hover:block">
            {children}
        </button>
    )
}