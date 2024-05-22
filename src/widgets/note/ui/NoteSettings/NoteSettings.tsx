import { NOTES_SETTINGS, Theme } from "@/shared/const";
import { useTheme } from "@/shared/lib/hooks";

interface NoteSettingsProps {
    isShow: boolean
}

const NoteSettings = ({ isShow }: NoteSettingsProps) => {
    const { theme } = useTheme();
 
    return (
        <>
            {isShow && <div className={`absolute z-20 right-1 top-1 custom-border shadow-custom p-2 ${theme == Theme.LIGHT ? "bg-light " : "bg-dark"}`}>
                <ul className="flex flex-col gap-1">
                    {NOTES_SETTINGS.map(item => <li key={item} className={`py-1 px-2 text-sm rounded-md cursor-pointer ${theme == Theme.LIGHT ? "text-dark hover:text-light hover:bg-blue" : "text-light hover:text-blue hover:bg-inherit"}`}>
                        {item}
                    </li>)}
                </ul>
            </div>}
        </>
    )
}

export default NoteSettings;