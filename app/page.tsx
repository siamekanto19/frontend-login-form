'use client'
import LoginForm from '@/components/core/LoginForm'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

const queryClient = new QueryClient()

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <section className='container mx-auto pt-10 flex flex-col lg:flex-row lg:items-center gap-10 2xl:gap-20 px-5 lg:px-0'>
        <div className='w-full min-h-[30rem] lg:min-h-[50rem] rounded-2xl bg-white justify-center items-center drop-shadow-sm hidden lg:flex lg:w-[60%]'>
          <h2 className='text-2xl lg:text-4xl text-center'>Image or Video of our Services</h2>
        </div>
        <div className='lg:w-[30%]'>
          <LoginForm />
        </div>
      </section>
      <div className='container pt-20 px-5 lg:px-0 mx-auto'>
        <div className='w-full border-muted-foreground border-t py-4 flex flex-col lg:flex-row gap-5 items-center justify-between text-sm'>
          <p>All rights reserved © 2024 | Drukland.de</p>
          <ul className='flex flex-col lg:flex-row items-center gap-4'>
            <li>Terms of use</li>
            <li>Sitemap</li>
            <li>Company Information</li>
            <li>Cookie settings</li>
          </ul>
        </div>
      </div>
    </QueryClientProvider>
  )
}
