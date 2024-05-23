export const closeNote = (
    isOpen: boolean,
    setIsOpen: (isOpen: () => boolean | boolean) => void
) => {
    setIsOpen(() => !isOpen);
    window.location.reload();
}