import React, { useEffect, useState } from "react"

interface useHoverI {
    element: React.RefObject<HTMLElement>,
    onEnter?: (e: MouseEvent) => void,
    onLeave?: (e: MouseEvent) => void
}

export function useHover({element, onEnter, onLeave}: useHoverI) {
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const node = element.current;
        if (!node) return;

        const handleEnter = (event: MouseEvent) => {
            setIsHovered(true);
            if (onEnter) onEnter(event);
        };

        const handleLeave = (event: MouseEvent) => {
            setIsHovered(false);
            if (onLeave) onLeave(event);
        };

        node.addEventListener('pointerenter', handleEnter);
        node.addEventListener('pointerleave', handleLeave);

        return () => {
            node.removeEventListener('pointerenter', handleEnter);
            node.removeEventListener('pointerleave', handleLeave);
        }
    }, [element, onEnter, onLeave]);

    return isHovered;
}