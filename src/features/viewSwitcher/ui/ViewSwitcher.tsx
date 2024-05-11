import { useState } from "react";
import {  MdGridView, MdOutlineViewAgenda } from "react-icons/md";

const ViewSwitcher = () => {
    const [isGridView, setIsGridView] = useState(false);

    return (
        <button onClick={() => setIsGridView(!isGridView)}>
            {isGridView ? <MdGridView/> : <MdOutlineViewAgenda/>}
        </button>
    )
}

export default ViewSwitcher;