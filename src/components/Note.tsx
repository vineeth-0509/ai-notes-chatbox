'use client'
import { Note as NoteModel} from "@prisma/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useState } from "react";
import AddEditNoteDialog from "./ui/AddEditNoteDialog";

interface NoteProps{
   note: NoteModel
}

export default function Note({note}: NoteProps){
    const [showEditDialog, setShowEditDialog] = useState(false);
    const wasUpdated = note.updatedAt > note.createdAt;

    const createUpdatedAtTimestamp = (
        wasUpdated? note.updatedAt : note.createdAt
    ).toDateString();

    return (
        <>
        <Card className='cursor-pointer  transition-shadow hover:shadow-lg'
         onClick={()=> setShowEditDialog(true)}>
            <CardHeader>
                <CardTitle>
                    {note.title}
                </CardTitle>
                <CardDescription>
                    {createUpdatedAtTimestamp}
                    {wasUpdated && " (updated) "}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className='whitespace-pre-line' >
                    {note.content}
                </p>
            </CardContent>
        </Card>
        <AddEditNoteDialog
        open={showEditDialog}
        setOpen={setShowEditDialog}
        noteToEdit={note}
        />
        </>
    )
}