export function isBetween(text, str) {
    return text.startsWith(str) && text.endsWith(str);
}
export function dateMessage(timestamp) {
    const date = new Date(timestamp);
    const d = String(date.getDate()).padStart(2, '0');
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const y = date.getFullYear();
    const hh = String(date.getHours()).padStart(2, '0');
    const mm = String(date.getMinutes()).padStart(2, '0');
    const ss = String(date.getSeconds()).padStart(2, '0');
    return `${d}/${m}/${y} ${hh}:${mm}:${ss}`;
}
export const colors = {
    red: [255, 0, 0],
    green: [0, 255, 0],
    blue: [0, 0, 255],
    yellow: [255, 255, 0],
    gray: [100, 100, 100],
    white: [255, 255, 255],
    blueBright: [3, 169, 244],
};
//# sourceMappingURL=tools.js.map