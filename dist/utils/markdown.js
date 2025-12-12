import chalk from 'chalk';
import { isBetween } from './tools.js';
export function marked(text) {
    return text.split("\n").map(line => {
        if (line.startsWith("#### "))
            return chalk.blueBright(line.slice(5));
        if (line.startsWith("### "))
            return chalk.blue(line.slice(4));
        if (line.startsWith("## "))
            return chalk.green(line.slice(3));
        if (line.startsWith("# "))
            return chalk.yellow(line.slice(2));
        if (line.startsWith("- "))
            return chalk.white(line);
        if (isBetween(line, '**'))
            return chalk.bold(line.slice(2, -2));
        return line;
    }).join("\n");
}
//# sourceMappingURL=markdown.js.map