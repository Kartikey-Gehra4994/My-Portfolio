import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data'

const Clients = () => {
    return (
        <div className='py-20' id='testimonials' >
            <h1 className='heading lg:text-6xl'>
                Kind words from {' '}
                <span className='text-purple-300'> my favorite online teachers</span>
            </h1>
            <div className='flex flex-col max-lg:mt-10 item-center'>
                <div
                    // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
                    className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
                >
                    <InfiniteMovingCards
                        items={testimonials}
                        direction='right'
                        speed='slow'
                    />
                </div>
                <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg: mt-10'>
                    {companies.map(({ id, img, name, nameImg }) => (
                        <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
                            <img src={img} alt={name} className='md:w-10 w-5' />
                            <img src={nameImg} alt={name} className='md:w-24 w-20' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Clients