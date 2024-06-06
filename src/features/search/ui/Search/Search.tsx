import { InputType, LOCAL_STORAGE_SEARCH_KEY } from "@/shared/const";
import { SearchContext } from "@/shared/lib/context";
import { useWindowSize, useOutside } from "@/shared/lib/hooks";
import { Input } from "@/shared/ui";
import React, { useContext } from "react";
import { MdSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";


const Search = () => {
    const { width } = useWindowSize();
    const { searchTerm, setSearchTerm} = useContext(SearchContext);
    const { ref, isShow, setIsShow } = useOutside(false);
    const nav = useNavigate();

    const handleClick = () => {
        if (width < 640) {
            setIsShow(prev => !prev);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        localStorage.setItem(LOCAL_STORAGE_SEARCH_KEY, e.target.value);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            nav("/search");
            setIsShow(false);
        }
    };
 
    return (
        <div 
            className={`flex-center grow  transition-all ${isShow 
                ? "absolute z-30 left-1/2 top-2 -translate-x-1/2" 
                : "relative ml-2 sm:ml-7"
            } `}
            onClick={handleClick}
            title="Поиск"
            ref={ref}
        >
            <MdSearch className="absolute left-2"/>
            <Input 
                placeholder="Поиск..." 
                inputType={InputType.SEARCH}
                isShow={isShow}
                value={searchTerm}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
            />
        </div>
    )
}

export default Search;