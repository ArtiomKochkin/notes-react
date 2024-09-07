interface LabelProps {
    name: string
}

export const Label = ({ name }: LabelProps) => {
 
    return (
        <li className="custom-border inline py-1 px-2 text-sm">
            {name}
        </li>
    )
}