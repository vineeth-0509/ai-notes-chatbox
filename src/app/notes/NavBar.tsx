"use client";

import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import AddEditNoteDialog from "@/components/ui/AddEditNoteDialog";
import ThemeToggleButton from "@/components/ThemeToggleButton1";
import { dark }   from "@clerk/themes";
import { useTheme } from "next-themes";
import AIChatButton from "@/components/AIChatButton";


export default function NavBar(){
    const { theme } = useTheme();
    const [showEditAddNoteDialog, setShowEditAddNoteDialog] = useState(false);
    return (
    <>
    <div className='p-4 shadow' >
        <div className='max-w-7xl m-auto flex flex-wrap gap-3 items-center justify-between' >
            <Link href='/notes' className='flex items-center gap-1'>
                <Image src={logo}  alt="FlowBrain logo" width={40} height={40} />
                <span className='font-bold' >FlowBrain</span>
            </Link>
            <div className='flex items-center gap-2'>
                <UserButton afterSignOutUrl="/"
               appearance={{
                baseTheme: (theme === 'dark' ? dark : undefined),
                elements: { avatarBox: {width:'2.5rem', height:'2.5rem'}},
               }}
                />
                <ThemeToggleButton />
                <Button onClick={() => setShowEditAddNoteDialog(true)}>
                    <Plus size={20} className='mr-2'/>
                    Add Note
                </Button>
                <AIChatButton />
            </div>
        </div>
    </div>
    <AddEditNoteDialog open={showEditAddNoteDialog} setOpen={setShowEditAddNoteDialog}/>
    </>
    )
}