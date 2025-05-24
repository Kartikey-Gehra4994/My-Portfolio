import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { TbLocation } from 'react-icons/tb'

const RecentProjects = () => {
    return (
        <div className='py-20'id='projects' >
            <h1 className='heading lg:text-6xl'>
                A small selaction of {''}
                <span className='text-purple-300'>recent projects</span>
            </h1>
            <div className='flex flex-wrap item-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
                {projects.map(({ id, title, des, img, iconLists, link }) => (
                    <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[35.5rem] flex item-center justify-center sm:w-[570px] w-[80vw]'>
                        <PinContainer title={link} href={link} >
                            <div className='relative flex item-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[30vh] sm:h-[40vh] mb-10'>
                                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                    <img src="/bg.png" alt="bg-img" />
                                </div>
                                <img src={img} alt={title} className='z-10 absolute bottom-0 w-[80%] rounded-2xl' />
                            </div>
                            <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                                {title}
                            </h1>
                            <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                                {des}
                            </p>
                            <div className='flex item-center justify-between mt-7 mb-3'>
                                <div className='flex item-center'>
                                    {iconLists.map((icon,index) => (
                                        <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center item-center' style={{transform:`translateX(-${5 * index * 2}px)`}}>
                                            <img src={icon} alt={icon} className='p-2' />
                                        </div>
                                    ))}
                                </div>
                                <div className='flex justify-center item-center'>
                                    <p className="flex lg:text-xl md:text-xs text-sm text-purple-300">Click Live Site</p>
                                    <TbLocation className='ms-3' color='#cbacf9'/>
                                </div>
                            </div>
                        </PinContainer>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default RecentProjects