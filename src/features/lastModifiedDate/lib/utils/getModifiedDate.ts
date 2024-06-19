export const getModifiedDate = (timestamp: number): string => {
    const date = new Date(timestamp);
    const pad = (n: number) => (n < 10 ? `0${n}` : n);
  
    const day = pad(date.getDate());
    const month = pad(date.getMonth() + 1);
    const year = date.getFullYear();
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());
  
    return `${day}.${month}.${year} в ${hours}:${minutes}:${seconds}`;
};