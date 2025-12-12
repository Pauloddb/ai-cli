import { Arg } from "./args.js";
export declare class Command {
    name: string;
    description: string;
    func: (args: Arg[]) => void;
    constructor(name: string, description: string, func: (args: Arg[]) => void);
    run(args: Arg[]): Promise<void>;
}
export declare const getCommands: () => Command[];
export declare const getCommand: (name: string) => Command | null;
//# sourceMappingURL=commands.d.ts.map