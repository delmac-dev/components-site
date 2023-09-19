import Wrapper from '../components/Wrapper';

const Discord_Card_1 = () => {
    return (
        <Wrapper title={'discord card one'} bgcolor={'bg-slate-300'}  txtbgcolor={'bg-slate-200'}>
            <div className='w-[300px] h-[70px] bg-slate-100 rounded-xl overflow-hidden border-l-4 border-blue-400 py-3 px-4 flex flex-col gap-2 cursor-default'>
                <div className='flex flex-row gap-3 items-center justify-start'>
                    <div className='w-5 h-5 rounded-full bg-slate-400'></div>
                    <div className='flex-1 flex justify-start items-center font-semibold text-sm'>
                        fanie#5886 has been warned
                    </div>
                </div>
                <div className='text-sm text-slate-900 font-normal'>
                    <span className='font-semibold'>Reason:</span> Posted an invite
                </div>
            </div>
        </Wrapper>
    )
}

export default Discord_Card_1