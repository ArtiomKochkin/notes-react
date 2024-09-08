export const handleImage = <
    T extends { id: string | number },
    U extends Partial<T>
> (
    e: Event,
    entity: T,
    element: HTMLInputElement,
    nameField: keyof T,
    updateMutation: (patch: U) => Promise<T>
    
) => {
    const target = e.target as HTMLInputElement;
    const files = target.files;

    if (files && files.length > 0) {
        const file = files[0];
        const reader = new FileReader();

        reader.onloadend = async () => {
            try {
                const base64file = reader.result as string;
                await updateMutation({
                    id: entity.id,
                    [nameField]: base64file
                } as U);
            } catch (err) {
                console.log(`Failed to update entity: `, err);
            }
        };
        reader.readAsDataURL(file);
    }
    document.body.removeChild(element);
};