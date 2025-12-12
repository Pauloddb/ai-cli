import chalk from 'chalk';

export const log = (text: string, color: number[] | null = [204,204,204], newLine: boolean = true): void => {
    let chalkCommand: (text: string) => string;

    if (color === null) color = [204,204,204];
    chalkCommand = chalk.rgb(color[0], color[1], color[2]);

    process.stdout.write(chalkCommand(text) + (newLine ? '\n' : ''));
};