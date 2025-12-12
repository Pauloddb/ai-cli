import { askCommand } from "./ai.js";
import chalk from 'chalk';
export class Command {
    name;
    description;
    func;
    constructor(name, description, func) {
        this.name = name;
        this.description = description;
        this.func = func;
        this.name = name;
        this.description = description;
    }
}
const commands = [
    new Command('help', 'Exibe a lista de comandos disponíveis.', (args) => {
        console.log(getCommands().map(cmd => `${cmd.name}: ${cmd.description}`).join('\n'));
    }),
    new Command('ask', 'Faz uma pergunta ao assistente com os argumentos passados.', (args) => {
        askCommand(args);
    })
];
export const getCommands = () => commands;
export const getCommand = (name) => {
    const command = commands.find(c => c.name === name);
    return command ? command : null;
};
export class Arg {
    text;
    isString;
    isFlag;
    constructor(text) {
        this.text = text;
        this.text = text;
        this.isString = isBetween(text, '"');
        this.isFlag = text.startsWith('--');
        // if (!this.isString && !getCommands().map(c => c.name).includes(text)) {
        //     throw new Error(`Argumento inválido: ${text}`);
        // }
    }
}
export function marked(text) {
    return text.split("\n").map(line => {
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
export function isBetween(text, str) {
    return text.startsWith(str) && text.endsWith(str);
}
//# sourceMappingURL=tools.js.map