import React from 'react'

const Wrapper = ({children,bgcolor, title, txtcolor}) => {
  return (
    <div className={`${bgcolor ?? 'bg-background'} relative flex flex-col justify-between items-center min-h-[300px]`}>
      <div className='flex-1 w-full h-full flex items-center justify-center p-6'>
        {children}
      </div>
      <div className={`w-full h-11  ${txtcolor ?? 'text-foreground'} bg-accent flex items-center justify-center`}>
        {title ?? ''}
      </div>
    </div>
  )
}

export default Wrapper