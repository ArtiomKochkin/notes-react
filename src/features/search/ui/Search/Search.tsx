import { InputType } from "@/shared/const";
import { useWindowSize, useOutside } from "@/shared/lib/hooks";
import { Input } from "@/shared/ui";
import { MdSearch } from "react-icons/md";


const Search = () => {
    const { width } = useWindowSize();
    const extendedStyles = "absolute z-30 left-1/2 top-2 -translate-x-1/2";
    const { ref, isShow, setIsShow } = useOutside(false);

    const handleClick = () => {
        if (width < 640) {
            setIsShow(prev => !prev);
        }
    }
 
    return (
        <div 
            className={`flex-center grow  transition-all ${isShow ? extendedStyles : "relative ml-2 sm:ml-7"}`}
            onClick={handleClick}
            ref={ref}
        >
            <MdSearch className="absolute left-2"/>
            <Input 
                placeholder="Поиск..." 
                inputType={InputType.SEARCH}
                isShow={isShow}
            />
        </div>
    )
}

export default Search;