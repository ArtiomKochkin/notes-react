export const getModifiedDate = (timestamp: number): string => {
    const date = new Date(timestamp);
    const dateObj = (typeof date === "string") ? new Date(date) : date;
    const day = (dateObj.getDate() > 9) ? dateObj.getDate() : `0${dateObj.getDate()}`;
    const month = (dateObj.getMonth() > 8) ? dateObj.getMonth() + 1 : `0${dateObj.getMonth() + 1}`;
    const hours = (dateObj.getHours() > 9) ? dateObj.getHours() : `0${dateObj.getHours()}`;
    const minutes = (dateObj.getMinutes() > 9) ? dateObj.getMinutes() : `0${dateObj.getMinutes()}`;
    const seconds = (dateObj.getSeconds() > 9) ? dateObj.getSeconds() : `0${dateObj.getSeconds()}`;

    return `${day}.${month}.${dateObj.getFullYear()} в ${hours}:${minutes}:${seconds}`;
};