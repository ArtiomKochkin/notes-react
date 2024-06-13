export const underlineText = (text: string) => {
    const linkRegEx = /(http|https|ftp):\/\//;
    return text.split(" ").map((word, i) => {
        if (linkRegEx.test(word)) {
            return (
                <a 
                    key={i} 
                    href={word}
                    target="_blank"
                    className="border-b border-blue"
                >
                    {word}{" "}
                </a>
            )
        } else {
            return word + " ";
        }
    });
} 