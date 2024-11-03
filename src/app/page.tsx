import { Metadata } from "next"
import Image from 'next/image';
import logo from "@/assets/logo.png"
import Typewritertitle from "../../TypeWritterTittle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export const  metadata: Metadata = {
    title:"FlowBrain"
}

export default function Home() {

  const { userId } = auth();

  if(userId) redirect('/notes');

  return (
    <main className='flex flex-col h-screen items-center justify-center gap-5' >
      <div className='flex items-center gap-4' >
        <Image src={logo} alt='FlowBrain logo' width={100} height={100}/>
        <span className='font-extrabold tracking-tight text-4xl lg:text-5xl'>
          FlowBrain
        </span>
      </div>
      <div  className='max-w-prose font-bold text-2xl tracking-tighter text-center'>
        <Typewritertitle/>
        
      </div>
      <Button size="lg" asChild >
        <Link href='/notes' >
           Open
        </Link>
        
      </Button>
    </main>
  )
}
