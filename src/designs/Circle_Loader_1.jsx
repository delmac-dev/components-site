import Wrapper from '../components/Wrapper';

const Circle_Loader_1 = () => {
    return (
        <Wrapper title={'circle loader one'} bgcolor={'bg-slate-300'}  txtcolor={'bg-slate-200'}>
            <div className='relative w-20 h-20 bg-gray-200 rounded-full'> {/* animate-spin */}
                <div className='absolute z-3 w-1/2 h-1/2 top-0 left-0 bg-orange-600 rounded-tl-full'></div>
                <div className='absolute z-4 w-3/4 h-3/4 top-1/2 left-1/2 bg-gray-100 -translate-x-1/2 -translate-y-1/2 rounded-full'></div>
            </div>
        </Wrapper>
    )
}

export default Circle_Loader_1