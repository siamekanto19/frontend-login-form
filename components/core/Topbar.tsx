import { CircleHelp, Mail, MessageCircleMore, SquareUser } from 'lucide-react'
import React from 'react'

const Topbar = () => {
  return (
    <div className='h-12 w-full bg-[#dddd]'>
      <div className='h-full container flex items-center justify-end gap-5 font-normal text-xs px-5 lg:px-0'>
        <div className='flex items-center gap-2'>
          <p>FAQ</p>
          <CircleHelp absoluteStrokeWidth strokeWidth={1.25} size={18} />
        </div>
        <div className='flex items-center gap-2'>
          <p>Send Inquiry</p>
          <Mail absoluteStrokeWidth strokeWidth={1.25} size={18} />
        </div>
        <div className='flex items-center gap-2'>
          <p>Live Support</p>
          <MessageCircleMore absoluteStrokeWidth strokeWidth={1.25} size={18} />
        </div>
        <div className='flex items-center gap-2'>
          <p>Contact</p>
          <SquareUser absoluteStrokeWidth strokeWidth={1.25} size={18} />
        </div>
      </div>
    </div>
  )
}

export default Topbar
