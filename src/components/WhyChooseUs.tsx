"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
  {
    title: "Guitar Fundamentals",
    description:
      "Learn the basics of playing guitar with our comprehensive beginner's course. Understand chords, strumming patterns, and simple songs that will help you build confidence and start performing quickly.",
  },
  {
    title: "Piano for Beginners",
    description:
      "Start your musical journey with simple piano lessons designed for beginners. Master finger placement, basic scales, and popular melodies while developing strong foundational skills.",
  },
  {
    title: "Advanced Guitar Techniques",
    description:
      "Master advanced guitar skills including solos, scales, and improvisation. This course is perfect for players looking to improve speed, accuracy, and stage-ready performance techniques.",
  },
  {
    title: "Music Theory Essentials",
    description:
      "Understand the building blocks of music with chords, notes, and rhythm theory. Learn how music is structured so you can compose, read, and play with deeper understanding.",
  },
  {
    title: "Drum Basics",
    description:
      "Learn the fundamentals of drumming, beats, timing, and coordination. Develop rhythm control through practice exercises and play along with real-world drum patterns.",
  },
  {
    title: "Violin for Starters",
    description:
      "A beginner-friendly course to start playing violin with proper techniques. Learn bow control, posture, and simple tunes while building strong musical discipline.",
  },
  {
    title: "Singing and Vocal Training",
    description:
      "Improve your voice with breathing exercises, pitch control, and vocal practice. Train your vocal range, strengthen your tone, and gain confidence for live singing.",
  },
  {
    title: "Digital Music Production",
    description:
      "Learn how to produce music digitally using modern software and tools. Explore beat making, sound design, mixing, and creating professional-quality tracks from scratch.",
  },
  {
    title: "DJ Mixing Masterclass",
    description:
      "Become a DJ by learning mixing, transitions, and creating live sets. Discover how to blend tracks smoothly, control energy levels, and perform like a professional DJ.",
  },
];


const WhyChooseUs = () => {
    return (
        <div>
            <StickyScroll content={musicSchoolContent}/>
        </div>
    )
}

export default WhyChooseUs