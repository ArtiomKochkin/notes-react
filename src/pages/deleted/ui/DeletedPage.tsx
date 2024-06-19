import { MainLayout } from "@/app/layouts";
import { useGetNotesQuery } from "@/entities/notes";
import { DeleteAllNotes } from "@/features/deleteAllNotes";
import { NotesViewContext } from "@/shared/lib/context";
import { Title } from "@/shared/ui";
import { NoteList } from "@/widgets/noteList";
import { useContext } from "react";

export const DeletedPage = () => {
    const { isLoading, isError, data } = useGetNotesQuery(null);
    const filteredNotes = data?.filter(item => item.isDeleted) || [];
    const { notesView } = useContext(NotesViewContext);
    
    return (
        <MainLayout>
            {filteredNotes!.length > 0 ? (
                    <>
                        <Title>Корзина</Title> 
                        <DeleteAllNotes notes={filteredNotes}/>
                        <NoteList 
                            isSpecialList 
                            view={notesView!} 
                            isLoading={isLoading} 
                            isError={isError} 
                            data={filteredNotes!}
                        />
                    </>
                ) : <Title>В корзине нет заметок</Title>
            }
        </MainLayout>
    )
}