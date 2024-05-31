import { SearchContext } from "@/shared/lib/context";
import { ReactNode, useState } from "react";

interface SearchProviderProps {
    children: ReactNode
}

const SearchProvider = ({ children }: SearchProviderProps) => {
    const [searchTerm, setSearchTerm] = useState("");
 
    return (
        <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchProvider;