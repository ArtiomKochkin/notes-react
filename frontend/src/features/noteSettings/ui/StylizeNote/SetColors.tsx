import { colors } from "../../lib";

interface SetColorsProps {
    setColor: (color: string) => void
}

export const SetColors = ({ setColor }: SetColorsProps) => {
 
    return (
        <ul className="flex-center gap-1 bg-inherit py-1">
            {colors.map(color => <li 
                className={`block w-5 h-5 rounded-full border border-blue`}
                onClick={() => setColor(color.name)}
                key={color.name}
                title={color.title}
                style={{
                    backgroundColor: color.name,
                    color: color.name
                }}
            ></li>)}
        </ul>
    )
}