'use client'

import { cn } from '@/lib/utils'
import { FC, useState } from 'react'
import { AppContainer } from '../global'

export const Counters: FC = () => {
   const [counters] = useState<{ value: number; description: string }[]>([
      {
         value: 237,
         description: 'penatibus et magnis',
      },
      {
         value: 561,
         description: 'leo eget bibendum',
      },
      {
         value: 123,
         description: 'pretium quis sem',
      },
      {
         value: 307,
         description: 'Donec sodales sagittis',
      },
   ])

   return (
      <section className=''>
         <div className={cn('')}>
            <AppContainer className={cn('grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 py-20')}>
               {counters.map((counter) => (
                  <CountItem key={counter.description} {...counter} />
               ))}
            </AppContainer>
         </div>
      </section>
   )
}

const CountItem = ({ value, description }: { value: number; description: string }) => {
   return (
      <div className='relative grid place-content-center'>
         <p className='font-[family-name:var(--font-cormorant-upright)] text-5xl lg:text-8xl font-extrabold text-primary/50 text-center'>{value}</p>
         <blockquote className='font-[family-name:var(--font-inconsolata)] text-xs uppercase text-card-foreground font-normal tracking-[.2rem] absolute top-0 right-0 bottom-0 left-0 grid place-content-center'>{description}</blockquote>
      </div>
   )
}
