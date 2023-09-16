import React from 'react'

const Wrapper = ({children,span, bgcolor, title, txtbgcolor}) => {
  return (
    <div className={`${span && 'sm:col-span-2'} ${bgcolor? bgcolor : 'bg-slate-300'} flex flex-col justify-between items-center min-h-[300px]`}>
      <div className='flex-1 w-full h-full flex items-center justify-center py-6 px-6'>
        {children}
      </div>
      <div className={`w-full h-11  ${txtbgcolor? txtbgcolor : 'bg-slate-100'} flex items-center justify-center`}>
        {title}
      </div>
    </div>
  )
}

export default Wrapper