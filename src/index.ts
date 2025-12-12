#!/usr/bin/env node


import { Arg } from './cli/args.js';
import { getCommand } from './cli/commands.js';
import { log } from './utils/logger.js';
import readline from 'readline';
import { parseArgs } from './cli/arg-parser.js';
import chalk from 'chalk';
import { colors } from './utils/tools.js';



let args: Arg[] = [];


if (process.argv.slice(1).length > 1) {
    log('Este CLI não suporta comandos inline. Digite apenas "assist" e a o input de comando aparecerá no terminal.', colors.red);
    process.exit(1);
}


const repeat = 90
for (let i = 0; i < repeat; i++) log('=', colors.blueBright, false);

log('\nJarvis Assistente de IA. Pressione Ctrl+C ou use o comando "exit" para sair.', colors.blueBright);

for (let i = 0; i < repeat; i++) log('=', colors.blueBright, false);
log('\n');




const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const mainLoop = () => {
    rl.question(chalk.yellow('Digite o comando: '), async (input) => {
        args = parseArgs(input);

        if (args.length === 0) return rl.close();


        const cmd = getCommand(args[0].value);

        if (!cmd) {
            log(`Comando '${args[0].value}' não encontrado.`, colors.red);
            return rl.close();
        }

        if (cmd) await cmd.run(args.slice(1));

        mainLoop();
    });
}

mainLoop();




