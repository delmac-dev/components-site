import Wrapper from '../components/Wrapper';
import { BiUser } from "react-icons/bi";
import MockupImg from "../asserts/mockup_img.png";

const Card_2 = () => {
    return (
        <Wrapper title={'card two'} bgcolor={'bg-gray-600'}  txtcolor={'bg-slate-200'}>
           <div className='flex flex-col bg-transparent gap-3'>
                <div className='flex justify-center items-center h-52 w-[350px] rounded-md bg-gray-500 overflow-hidden'>
                    <img src={MockupImg} alt="img" className='h-52 w-[350px] object-cover' />
                </div>
                <div className='flex w-full items-start justify-between'>
                    <div className='flex justify-start gap-2'>
                        <div className='w-10 h-10 rounded-full bg-gray-500 overflow-hidden'></div>
                        <div>
                            <h1 className='font-medium text-base text-gray-100'>Dribble Mockup UI Design...</h1>
                            <p className='text-gray-200 text-sm'>Halo</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-1 text-gray-400 font-medium'><BiUser /> 3.6k</div>

                </div>
           </div>
        </Wrapper>
    )
}

export default Card_2