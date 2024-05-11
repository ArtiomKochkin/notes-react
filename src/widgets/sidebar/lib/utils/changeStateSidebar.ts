export const changeStateSidebar = (width: number, setShowSidebar: (showSidebar: boolean) => void) => {
    if (width < 640) {
        setShowSidebar(false);
    } else {
        setShowSidebar(true);
    }
}