import { InputType, LOCAL_STORAGE_SEARCH_KEY } from "@/shared/const";
import { SearchContext } from "@/shared/lib/context";
import { useWindowSize, useOutside } from "@/shared/lib/hooks";
import { handleEnterPress } from "@/shared/lib/utils";
import { Input } from "@/shared/ui";
import React, { useContext } from "react";
import { MdSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const Search = () => {
    const { width } = useWindowSize();
    const { searchTerm, setSearchTerm} = useContext(SearchContext);
    const { ref, isShow, setIsShow } = useOutside<HTMLDivElement>(false);
    const nav = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        localStorage.setItem(LOCAL_STORAGE_SEARCH_KEY, e.target.value);
    };

    const handleEnterActions = () => {
        nav("/search");
        setIsShow(false);
    };

    const handleClick = () => {
        if (width < 640) setIsShow(prev => !prev)
    };

    return (
        <div 
            className={`
                flex-center grow  transition-all ${isShow 
                ? "absolute z-30 left-1/2 top-2 -translate-x-1/2" 
                : "relative ml-2 sm:ml-7"}
            `}
            onClick={handleClick}
            title="Поиск"
            ref={ref}
        >
            <MdSearch className="absolute left-2"/>
            <Input 
                placeholder="Поиск по названию..." 
                inputType={InputType.SEARCH}
                isShow={isShow}
                value={searchTerm}
                onChange={handleChange}
                onKeyDown={e => handleEnterPress(e, handleEnterActions)}
            />
        </div>
    )
}