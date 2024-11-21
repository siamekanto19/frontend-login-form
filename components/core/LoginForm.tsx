'use client'
import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Checkbox } from '../ui/checkbox'
import { Button } from '../ui/button'
import { useMutation } from '@tanstack/react-query'
import { login } from '@/requests'
import { useAutoAnimate } from '@formkit/auto-animate/react'

const formSchema = z.object({
  email: z.string().email('Must be a valid Email'),
  password: z.string(),
})

const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [animateRef] = useAutoAnimate()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const { mutateAsync: handleLogin, isPending } = useMutation({
    mutationFn: login,
    onError(error) {
      setErrorMessage(error.message)
    },
  })

  return (
    <Card className='w-full bg-white border-0 p-8 rounded-2xl'>
      <CardHeader className='p-0'>
        <CardTitle className='text-center text-xl lg:text-2xl 2xl:text-3xl font-semibold'>Drunkland.de</CardTitle>
        <CardDescription className='pt-2 text-lg text-center text-black font-medium'>Sign In to your account</CardDescription>
        <p className='pt-2 text-base font-normal text-center text-black'>
          Don&apos;t you have an account? <span className='font-medium'>Register</span>
        </p>
      </CardHeader>
      <CardContent ref={animateRef} className='p-0'>
        {errorMessage ? (
          <div className='pt-5 flex justify-center gap-1 items-center text-sm'>
            <Image src='/alert.svg' width={18} height={18} alt='Alert' />
            <p>Unknown email address. Try again!</p>
          </div>
        ) : null}
        <Form {...form}>
          <form onSubmit={form.handleSubmit((data) => handleLogin(data))} className='w-full flex flex-col gap-6 pt-5'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='space-y-0'>
                  <FormLabel className='text-base'>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      className='bg-transparent rounded-none border-b-[1.5px] border-t-0 border-r-0 border-l-0 focus-visible:border-b-black focus-visible:ring-0 focus-visible:ring-offset-0 px-0'
                      required
                      type='email'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem className='space-y-0'>
                  <FormLabel className='text-base'>Password</FormLabel>
                  <FormControl>
                    <Input
                      className='bg-transparent rounded-none border-b-[1.5px] border-t-0 border-r-0 border-l-0 focus-visible:border-b-black focus-visible:ring-0 focus-visible:ring-offset-0 px-0'
                      required
                      type='password'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex items-center gap-2'>
              <Checkbox />
              <p>
                I agree to all <strong className='font-semibold'>Terms and Conditions</strong>
              </p>
            </div>
            <Button loading={isPending} size='lg' className='w-full font-semibold text-lg'>
              Log In
            </Button>
          </form>
          <div className='flex items-center gap-4 pt-4'>
            <div className='w-full border-b border-muted-foreground'></div>
            <p className='w-full'>or sign in with</p>
            <div className='w-full border-b border-muted-foreground'></div>
          </div>
          <div className='pt-4 w-full flex items-center justify-center gap-4'>
            <Image src='/linkedin.svg' width={25} height={25} alt='Linkedin' />
            <Image src='/google.svg' width={25} height={25} alt='Google' />
            <Image src='/facebook.svg' width={25} height={25} alt='Facebook' />
          </div>
        </Form>
      </CardContent>
    </Card>
  )
}

export default LoginForm
