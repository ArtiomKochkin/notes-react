import { ReactNode, useState } from "react";
import { LOCAL_STORAGE_SEARCH_KEY } from "@/shared/const";
import { SearchContext } from "@/shared/lib/context";

interface SearchProviderProps {
    children: ReactNode
}

const defaultTerm = (localStorage.getItem(LOCAL_STORAGE_SEARCH_KEY) as string) || "";

export const SearchProvider = ({ children }: SearchProviderProps) => {
    const [searchTerm, setSearchTerm] = useState(defaultTerm);
 
    return (
        <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
            {children}
        </SearchContext.Provider>
    )
}