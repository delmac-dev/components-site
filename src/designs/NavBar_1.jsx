import Wrapper from '../components/Wrapper';

const NavBar_1 = () => {
    return (
        <Wrapper title={'navigation bar one'} bgcolor={'bg-slate-300'}  txtbgcolor={'bg-slate-200'}>
            <nav className='flex bg-gray-50 border-b-8 border-gray-200'>
                <div className='group relative flex justify-center items-center w-32 h-16 font-medium text-xl cursor-pointer text-slate-700 hover:bg-red-200 transition-colors duration-100'>
                    Home
                    <div className='group-hover:opacity-100 opacity-0 absolute l-0 -bottom-2 w-full h-2 bg-red-800 transition-colors duration-100'></div>
                </div>
                <div className='group relative flex justify-center items-center w-32 h-16 font-medium text-xl cursor-pointer text-slate-700 hover:bg-red-200 transition-colors duration-150'>
                    About Us
                    <div className='group-hover:opacity-100 opacity-0 absolute l-0 -bottom-2 w-full h-2 bg-red-800 transition-opacity duration-150'></div>
                </div>
            </nav>
        </Wrapper>
    )
}

export default NavBar_1