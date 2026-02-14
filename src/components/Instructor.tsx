'use client'
import React from 'react'
import { WavyBackground } from './ui/wavy-background'
import { AnimatedTooltip } from './ui/animated-tooltip';

const instructors = [
  {
    id: 1,
    name: "John Doe",
    designation: "Senior Guitar Instructor",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Emily Smith",
    designation: "Piano & Keyboard Expert",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Mike Johnson",
    designation: "Advanced Guitar Specialist",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "Sarah Lee",
    designation: "Music Theory Mentor",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    name: "David Brown",
    designation: "Professional Drum Coach",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
  }
];



const Instructor = () => {
    return (
        <div className='relative h-160 overflow-hidden flex items-center justify-center'>
            <WavyBackground className='w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full'>
                <h2 className='text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8'>Meet Our Instructors</h2>
                <p className='text-base md:text-lg text-white text-center mb-4'>
                    Discover the talented professionals who will guide your musical journey
                </p>
                <div className='flex flex-row items-center justify-center mt-0 w-full'>
                    <AnimatedTooltip items={instructors}/>
                </div>
            </WavyBackground>
        </div>
    )
}

export default Instructor