import { useEffect, useRef, useState } from "react";

export const useOutside = <T extends HTMLElement> (initialValue: boolean) => {
    const [isShow, setIsShow] = useState(initialValue);
    const ref = useRef<T>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setTimeout(() => setIsShow(false), 1);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);

        return () => document.removeEventListener("click", handleClickOutside, true);
    }, []);

    return { ref, isShow, setIsShow};
}