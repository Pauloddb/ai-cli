export interface AIResponse {
    response: string;
    model: string;
}
export interface IMessageHistory {
    content: string;
    role: 'User' | 'Jarvis';
    timestamp: number;
}
export declare function isBetween(text: string, str: string): boolean;
export declare function dateMessage(timestamp: number): string;
export declare const colors: {
    red: number[];
    green: number[];
    blue: number[];
    yellow: number[];
    gray: number[];
    white: number[];
    blueBright: number[];
};
//# sourceMappingURL=tools.d.ts.map