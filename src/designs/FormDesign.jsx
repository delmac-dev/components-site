import { useState, useEffect } from "react"
import Wrapper from "../components/Wrapper";
import { BiLogIn } from "react-icons/bi";

const data = [
    {
        title: 'React',
        language: 'javascript',
        snippet: 'javascript react code'
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
        <Wrapper title={"Form Design"} bgcolor={"bg-black"}>
            <div className="w-[600px] min-h-[300px] rounded-md border border-gray-900">
                <div className="w-full h-14 flex items-center justify-start px-4 border-b border-gray-900">
                    <label className="text-gray-400 text-lg font-medium">Code</label>
                </div>
                <div className="w-full h-auto">
                    <div className="w-full h-auto p-2 flex items-center justify-start gap-4 border-b border-gray-900 overflow-x-auto">
                        <Input 
                            value={newData.title} 
                            setValue={(text) => (setNewData({...newData, title: text}))}
                            handleActive={()=> setActive(null)}
                        />
                        {formList.map((item, index) => (
                            <Input 
                                key={index} 
                                value={item.title} 
                                setValue={(text) => {
                                    let updated = item;
                                    updated.title = text;
                                    setFormList((d) => d.map((_d, i)=> i === index ? _d = updated : _d ))
                                }} 
                                handleActive = {()=> setActive(index)}
                            />
                        ))}
                    </div>
                    <div className="w-full p-2">
                        {active === null ? <TextArea value={newData.snippet} setValue={(text) => (setNewData({...newData, snippet: text}))} /> : 
                                <TextArea 
                                    value={formList[active].snippet} 
                                    setValue={(text) => {
                                        let updated = formList[active];
                                        updated.snippet = text;
                                        setFormList((d) => d.map((_d, i)=> i === active? _d = updated : _d ))
                                    }} 
                                />}
                    </div>

                </div>
            </div>

        </Wrapper>
    )
}

export default FormDesign;

const Input = ({value, setValue, handleActive}) => {

    return (
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="w-full min-w-[180px] text-gray-200 h-10 border-0 bg-gray-700 rounded-md px-3 py-2 outline-none" onClick={handleActive} />
    )
}

const TextArea = ({value, setValue}) => {

    return (
        <textarea cols="30" rows="10" value={value} onChange={(e) => setValue(e.target.value)} className="w-full h-full text-gray-400 border-0 bg-gray-800 rounded-md px-3 py-2 outline-none"></textarea>
    )
}