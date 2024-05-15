import { TiPin } from "react-icons/ti";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useRef } from "react";
import { NotesView, Theme } from "@/shared/const";
import { useHover, useTheme } from "@/shared/lib/hooks";

interface NoteProps {
    view: NotesView
}

const ClosedNote = ({ view }: NoteProps) => {
    const noteRef = useRef<HTMLDivElement>(null);
    const isHoveredNote = useHover({element: noteRef});
    const { theme } = useTheme();

    return (
        <div 
            className={`flex flex-col custom-border cursor-pointer p-2 sm:p-4 relative transition-all lg:hover:shadow-custom ${view == NotesView.GRID ? "h-[42vh] md:h-[40vh] lg:h-[35vh]" : "h-[34vh] sm:h-[38vh] lg:h-fit lg:max-h-[38vh]"} ${theme == Theme.LIGHT ? "bg-light text-dark" : "bg-dark text-light"}`} 
            ref={noteRef}
        >
            <div className="flex-center justify-between">
                <span className="font-semibold text-lg leading-5 sm:leading-7">TitleTitle Title</span>
                {isHoveredNote && <div className="hidden sm:flex-center gap-1">
                    <TiPin />
                    <BsThreeDotsVertical />
                </div>}
            </div>
            <div className={`hidden absolute z-20 right-1 top-1 custom-border p-2 ${theme == Theme.LIGHT ? "bg-light " : "bg-dark"}`}>
                <ul className="flex flex-col gap-1">
                    <li className={`py-1 px-2 text-sm rounded-md cursor-pointer ${theme == Theme.LIGHT ? "text-dark hover:text-light hover:bg-blue" : "text-light hover:text-blue hover:bg-inherit"}`}>
                        Удалить заметку
                    </li>
                    <li className={`py-1 px-2 text-sm rounded-md cursor-pointer ${theme == Theme.LIGHT ? "text-dark hover:text-light hover:bg-blue" : "text-light hover:text-blue hover:bg-inherit"}`}>
                        Архивировать
                    </li>
                    <li className={`py-1 px-2 text-sm rounded-md cursor-pointer ${theme == Theme.LIGHT ? "text-dark hover:text-light hover:bg-blue" : "text-light hover:text-blue hover:bg-inherit"}`}>
                        Создать копию
                    </li>
                    <li className={`py-1 px-2 text-sm rounded-md cursor-pointer ${theme == Theme.LIGHT ? "text-dark hover:text-light hover:bg-blue" : "text-light hover:text-blue hover:bg-inherit"}`}>
                        Редактировать ярлыки
                    </li>
                    <li className={`py-1 px-2 text-sm rounded-md cursor-pointer ${theme == Theme.LIGHT ? "text-dark hover:text-light hover:bg-blue" : "text-light hover:text-blue hover:bg-inherit"}`}>
                        Изменить фон
                    </li>
                </ul>
            </div>
            <div className={`my-2 leading-5 ${view == NotesView.GRID ? "line-clamp-6 sm:line-clamp-5 lg:line-clamp-4" : "line-clamp-4"}`}>
                sit consectetur, Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit consectetur                 sit consectetur, Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit consectetur           
                4545777      sit consectetur, Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit consectetur
            </div>
            <ul className="mx-0 mb-0 mt-auto flex-center gap-1 overflow-hidden">
                <li className="custom-border inline py-1 px-2 text-sm ">
                    Ярлык
                </li>
                <li className="custom-border inline py-1 px-2 text-sm ">
                    Собеседования
                </li>
                <li className="custom-border inline py-1 px-2 text-sm ">
                    Ярлык
                </li>
                <li className="custom-border inline py-1 px-2 text-sm ">
                    Ярлык
                </li>
            </ul>
        </div>
    )
}

export default ClosedNote;