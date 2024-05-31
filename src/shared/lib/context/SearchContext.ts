import { createContext } from "react"

export interface ISearchContext {
    searchTerm: string,
    setSearchTerm: (searchTerm: string) => void
}

export const SearchContext = createContext<ISearchContext>({searchTerm: "", setSearchTerm: () => {}});