import Wrapper from '../components/Wrapper';
import { FaInstagram } from "react-icons/fa";

const InstagramCard_1 = () => {
    return (
        <Wrapper title={'instagram card one'} bgcolor={'bg-slate-300'}  txtbgcolor={'bg-slate-200'}>
            <div className='w-[270px] h-[160px] bg-slate-50 rounded-xl relative flex flex-col gap-3 px-5'>
                <div className='w-11 h-11 bg-slate-50 flex items-center justify-center absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full'><FaInstagram size={24} className='text-red-400' /></div>
                <h1 className='w-full py-1 mt-6 text-center font-medium text-lg leading-6 text-gray-600'>Describe last semester with two words</h1>
                <div className='w-full h-12 rounded-lg flex items-center justify-center bg-gray-300 text-slate-700 font-normal'>
                    Type something...
                </div>
            </div>
        </Wrapper>
    )
}

export default InstagramCard_1