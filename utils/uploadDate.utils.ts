export function viewLastUpdated(date: Date): string {
    return `Last updated ${date.toLocaleString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    })}`;
}

export function formatedDateToYYYYMMDD(date: Date) {
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });
}