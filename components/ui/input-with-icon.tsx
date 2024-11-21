// Dependencies: pnpm install lucide-react

import { Input } from '@/components/ui/input'
import { ReactNode } from 'react'

type Props = {
  icon: ReactNode
  placeholder: string
}

export default function InputWithIcon({ icon, placeholder }: Props) {
  return (
    <div className='relative w-full'>
      <Input className='peer ps-9 bg-transparent' placeholder={placeholder} />
      <div className='pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50'>{icon}</div>
    </div>
  )
}
