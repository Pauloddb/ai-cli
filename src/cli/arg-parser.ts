import { Arg } from "./args.js";


export const parseArgs = (args: string): Arg[] => {
    let current = '';
    const parsedArgs: Arg[] = [];
    let quoteChar = '';

    for (let i = 0; i < args.length; i++) {
        const char = args[i];


        if (char === '"' || char === "'") {
            current += char;

            if (char === quoteChar) quoteChar = '';
            else if (!quoteChar) quoteChar = char;
            
            continue;
        }

        
        if (char === ' ') {
            if (quoteChar) {
                current += char;
                continue;
            }

            if (current) {
                parsedArgs.push(new Arg(current));
                current = '';
            }
            
            continue;
        } else {
            current += char;
        }
    }

    if (current) parsedArgs.push(new Arg(current));

    return parsedArgs;
}