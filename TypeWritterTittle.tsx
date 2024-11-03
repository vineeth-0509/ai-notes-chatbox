'use client'
import { Divide } from "lucide-react";
import Typewriter from "typewriter-effect"

export default function Typewritertitle(){
    return (
        <Typewriter
            options={{
                loop: true,
             }}
             onInit={(typewriter) => {
                typewriter.typeString(
                     `<span style="color: orange;">An intelligent note-taking app with AI integration, </span>
                     <span style="color: green;">built with OpenAI, Pinecone, Next.js, Shadcn UI, Clerk, and more.</span>`
                   
                )
                
                .pauseFor(2000)
                .deleteAll()
                .start();
             }}
        
        />
      
    )
}
//"An intelligent note-taking app with AI integration, built with OpenAI, Pinecone, Next.js, Shadcn UI, Clerk, and more."

