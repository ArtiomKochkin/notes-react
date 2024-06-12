export const formatText = (text: string) => {
    return text.trim().split("\n").map((line, i) => (
        <p key={i}>
            {line}
            <br/>
        </p>
    ));
}