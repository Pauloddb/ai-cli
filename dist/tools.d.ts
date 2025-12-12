export interface AIResponse {
    response: string;
    model: string;
}
export declare class Command {
    name: string;
    description: string;
    func: (args: Arg[]) => void;
    constructor(name: string, description: string, func: (args: Arg[]) => void);
}
export declare const getCommands: () => Command[];
export declare const getCommand: (name: string) => Command | null;
export declare class Arg {
    text: string;
    isString: boolean;
    isFlag: boolean;
    constructor(text: string);
}
export declare function marked(text: string): string;
export declare function isBetween(text: string, str: string): boolean;
//# sourceMappingURL=tools.d.ts.map