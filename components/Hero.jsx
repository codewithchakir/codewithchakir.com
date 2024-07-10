import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, Send } from 'lucide-react';

import { RiBriefcase4Fill, RiTeamFill, RiTodoFill, RiArrowDownSLine } from 'react-icons/ri'

import DevImg from "./DevImg";
import Badge from './Badge';
import Socials from './Socials';

const Hero = () => {
    return <section className='py-12 xl:py-24 h-[84vh] xl:pt-28'>
        <div className="container mx-auto">
            <div className="flex justify-between gap-x-8">
            <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
                <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>Web Developer</div>
                <h1 className="h1 mb-4">Hello, my name is CHAKIR Elarabi</h1>
                <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>
                Proficient in both front-end and back-end development, I thrive on challenges and continuous learning. Ready to contribute my
                skills to impactful projects.
                </p>
                <div className='flex flex-col gap-y-3 gap-x-3 md:flex-row mx-auto xl:mx-0 mb-12'>
                    <Link href='/contact'>
                        <Button className='gap-x-2'>Contact me<Send size={18} /></Button>
                    </Link>
                    <Button variant='secondary' className='gap-x-2'>Download CV<Download size={18} /></Button>
                </div>
                <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0' iconStyles='text-foreground text-[22px] hover:text-primary transition-all'/>
            </div>






            <div className='hidden xl:flex relative'>
                <div className='w-[500px] h-[500px] absolute -top-9 -right-1'>
                    <DevImg containerStyles='w-[510px] h-[510px] relative' imgSrc='/hero/chakir.png'/>
                </div>
            </div>
            </div>
            <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
                <RiArrowDownSLine className='text-3xl text-primary' />
            </div>
        </div>
    </section>;
};


export default Hero;