import Wrapper from '../components/Wrapper';

const Card_1 = () => {
    return (
        <Wrapper title={'card one'} bgcolor={'bg-slate-300'}  txtcolor={'bg-slate-200'}>
            <div className='bg-gray-600 w-64 h-40 overflow-hidden rounded-md border-l-8 border-blue-500'>
                <div className='w-full h-full p-5 flex justify-between flex-col items-start'>
                    <div>
                        <p className='text-lg font-medium text-gray-400'>1103</p>
                        <h1 className='text-xl font-semibold text-gray-200'>Warning message</h1>
                    </div>
                    <div className='w-full flex flex-row justify-between items-center'>
                        <div className='overflow-hidden w-32 h-[10px] bg-gray-800 rounded-full'>
                            <div className='h-full w-1/2 bg-blue-500'></div>
                        </div>
                        <div className='flex gap-1'>
                            <div className='w-8 h-8 bg-gray-500 rounded-full'></div>
                            <div className='w-8 h-8 bg-gray-500 rounded-full'></div>
                        </div>
                    </div>

                </div>

            </div>
        </Wrapper>
    )
}

export default Card_1