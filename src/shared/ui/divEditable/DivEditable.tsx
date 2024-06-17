import { useRef, useEffect } from "react";

interface DivEditableProps {
    html: string,
    className?: string,
    onChange: (html: string) => void,
    onKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => Promise<void>
}

const DivEditable = ({ html, className, onChange, onKeyDown }: DivEditableProps) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current && ref.current.innerHTML !== html) {
            ref.current.innerHTML = html;
        }
    }, [html]);

    const handleBlur = () => {
        if (ref.current) {
            onChange(ref.current.innerHTML);
        }
    };

    return (
        <div
            className={className}
            contentEditable={true}
            ref={ref}
            onBlur={handleBlur}
            onKeyDown={onKeyDown}
            dangerouslySetInnerHTML={{ __html: html }}
        ></div>
    );
}

export default DivEditable;