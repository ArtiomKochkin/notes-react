export const handleEnterPress = (
    e: React.KeyboardEvent<HTMLInputElement>, 
    cb: () => void
) => {
    if (e.key === "Enter") {
        cb();
    }
};