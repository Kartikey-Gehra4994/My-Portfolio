import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from "@/utils/cn";
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { TbLocation } from "react-icons/tb";
import Link from 'next/link';
import ShinyText from './ui/ShinyText';
import RotatingText from './ui/RotatingText'



const Hero = () => {
  return (<>
    <div className='pb-20 pt-36'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vh]' fill='blue' />
      </div>

      {/* <div className="h-screen absolute dark:bg-grid-white/[0.03] top-0 left-0 flex w-full items-center justify-center bg-white dark:bg-black"> */}
      <div className="h-screen absolute bg-[#02051a] top-0 left-0 flex w-full items-center justify-center ">

        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
            "opacity-[0.05]",
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      </div>

      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <div className=' flex items-center font-bold gap-1'>
            <h2 className='text-2xl'>Creative</h2>

            <RotatingText
              texts={['coding', 'thinking', 'mindset', 'vision', 'pulse']}
              mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black text-2xl overflow-hidden py-0.5 sm:py-1 md:py-1 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>

          <TextGenerateEffect
            className='text-center tetx-[40px] md:text-5xl lg:text-6xl'
            words='Transforming Concepts into Seamless User Expriences '
          />
          <div className='text-center md: tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
            <ShinyText text="Hi I&apos;m Kartik, a Next.js Developer based in india" disabled={false} speed={3} className='custom-class' />
          </div>
          <Link href="https://github.com/Kartikey-Gehra4994">
            <MagicButton title='Show my work' position='right' icon={<TbLocation />} />
          </Link>
        </div>
      </div>
    </div>

  </>)
}
export default Hero



