import Wrapper from '../components/Wrapper';

const Card_3 = () => {
    return (
        <Wrapper title={'card three'} bgcolor={'bg-gray-400'}  txtbgcolor={'bg-slate-200'}>
            <div className='relative flex flex-col gap-2 pt-12 px-4 w-56 h-44 bg-purple-200 rounded-3xl border-4 border-gray-50 pointer-events-none'>
                <div className='absolute flex items-center justify-center left-5 -top-6 w-12 h-12 rounded-xl bg-orange-400 shadow shadow-orange-200'></div>
                <h1 className='font-bold text-lg text-purple-900'>Increase Energy</h1>
                <p className='text-gray-700 font-medium leading-6'>Have enough energy can help carry out a routine</p>
            </div>
        </Wrapper>
    )
}

export default Card_3