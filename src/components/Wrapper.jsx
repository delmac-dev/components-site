import React from 'react'

const Wrapper = ({children, height, span, bgcolor}) => {
  return (
    <div className={`${height? height : 'h-60'} ${span? 'col-span-2' : ''} ${bgcolor? bgcolor : 'bg-slate-300'} flex justify-center items-center`}>
        {children}
    </div>
  )
}

export default Wrapper