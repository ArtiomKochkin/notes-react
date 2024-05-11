import { TiPin } from "react-icons/ti";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import { useOutside } from "@/shared/lib/hooks/useOutside";

const OpenedNote = () => {
    const { ref, isShow, setIsShow } = useOutside(false);
 
    return (
        <div className="hidden fixed top-0 left-0 z-50 w-screen h-screen bg-dark bg-opacity-70 overflow-auto">
            <div className="relative flex flex-col bg-light custom-border w-[94vw] sm:w-4/5 lg:w-3/5 min-h-[80vh] mx-auto my-[1vh] p-4">
                <div className="flex-center justify-between">
                    <h2 className="font-semibold text-2xl">TitleTitleTitle Title Title Title</h2>
                    <div className="flex-center gap-1 cursor-pointer">
                        <TiPin/>
                        <div ref={ref} onClick={() => setIsShow(!isShow)}>
                            <BsThreeDotsVertical/>
                        </div>
                        <MdOutlineClose/>
                    </div>
                </div>
                {isShow && <div className="absolute z-20 right-1 top-1 bg-light custom-border p-2 shadow-custom">
                    <ul className="flex flex-col gap-1">
                        <li className="py-1 px-2 text-sm hover:bg-dark hover:text-light rounded-md cursor-pointer">
                            Удалить заметку
                        </li>
                        <li className="py-1 px-2 text-sm hover:bg-dark hover:text-light rounded-md cursor-pointer">
                            Архивировать
                        </li>
                        <li className="py-1 px-2 text-sm hover:bg-dark hover:text-light rounded-md cursor-pointer">
                            Создать копию
                        </li>
                        <li className="py-1 px-2 text-sm hover:bg-dark hover:text-light rounded-md cursor-pointer">
                            Редактировать ярлыки
                        </li>
                        <li className="py-1 px-2 text-sm hover:bg-dark hover:text-light rounded-md cursor-pointer">
                            Изменить фон
                        </li>
                    </ul>
                </div>}
                <div className="my-2">
                    Lorem ipsum dolor sit Lorem ipsum dolor sit consectetur Lorem ipsum dolor sit Lorem ipsum dolor sit consectetur modi id Lorem ipsum dolor sit Lorem ipsum dolor sit consectetur at qui quasi Lorem ipsum dolor sit Lorem ipsum dolor sit consectetur Lorem ipsum dolor sit Lorem ipsum dolor sit consectetur. Ea, eum Lorem ipsum dolor sit Lorem ipsum dolor sit consectetur, Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit consectetur                     Lorem ipsum dolor sit Lorem ipsum dolor sit consectetur Lorem ipsum dolor sit Lorem ipsum dolor sit consectetur modi id Lorem ipsum dolor sit Lorem ipsum dolor sit consectetur at qui quasi Lorem ipsum dolor sit Lorem ipsum dolor sit consectetur Lorem ipsum dolor sit Lorem ipsum dolor sit consectetur. Ea, eum Lorem ipsum dolor sit Lorem ipsum dolor sit consectetur, Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit consectetur
                    Lorem ipsum dolor sit Lorem ipsum dolor sit consectetur Lorem ipsum dolor sit Lorem ipsum dolor sit consectetur modi id Lorem ipsum dolor sit Lorem ipsum dolor sit consectetur at qui quasi Lorem ipsum dolor sit Lorem ipsum dolor sit consectetur Lorem ipsum dolor sit Lorem ipsum dolor sit consectetur. Ea, eum Lorem ipsum dolor sit Lorem ipsum dolor sit consectetur, Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit consectetur
                    Lorem ipsum dolor sit Lorem ipsum dolor sit consectetur Lorem ipsum dolor sit Lorem ipsum dolor sit consectetur modi id Lorem ipsum dolor sit Lorem ipsum dolor sit consectetur at qui quasi Lorem ipsum dolor sit Lorem ipsum dolor sit consectetur Lorem ipsum dolor sit Lorem ipsum dolor sit consectetur. Ea, eum Lorem ipsum dolor sit Lorem ipsum dolor sit consectetur, Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit consectetur
                    Lorem ipsum dolor sit Lorem ipsum dolor sit consectetur Lorem ipsum dolor sit Lorem ipsum dolor sit consectetur modi id Lorem ipsum dolor sit Lorem ipsum dolor sit consectetur at qui quasi Lorem ipsum dolor sit Lorem ipsum dolor sit consectetur Lorem ipsum dolor sit Lorem ipsum dolor sit consectetur. Ea, eum Lorem ipsum dolor sit Lorem ipsum dolor sit consectetur, Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit consectetur
                </div>
                <div className="mx-0 mb-0 mt-auto">
                    <ul className="flex-center gap-1 flex-wrap">
                        <li className="custom-border inline py-1 px-2 text-sm  bg-gray">
                            Ярлык
                        </li>
                        <li className="custom-border inline py-1 px-2 text-sm  bg-gray">
                            Собеседования
                        </li>
                        <li className="custom-border inline py-1 px-2 text-sm  bg-gray">
                            Ярлык
                        </li>
                        <li className="custom-border inline py-1 px-2 text-sm  bg-gray">
                            Собеседования
                        </li>                         
                        <li className="custom-border inline py-1 px-2 text-sm  bg-gray">
                            Ярлык
                        </li>
                        <li className="custom-border inline py-1 px-2 text-sm  bg-gray">
                            Собеседования
                        </li> 
                    </ul>
                    <div className="text-sm mt-2">
                        Изменено: <span>5 Сентября 2023 г. в 11:48</span> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpenedNote;