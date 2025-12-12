import chalk from 'chalk';
export const log = (text, color = [204, 204, 204], newLine = true) => {
    let chalkCommand;
    if (color === null)
        color = [204, 204, 204];
    chalkCommand = chalk.rgb(color[0], color[1], color[2]);
    process.stdout.write(chalkCommand(text) + (newLine ? '\n' : ''));
};
//# sourceMappingURL=logger.js.map