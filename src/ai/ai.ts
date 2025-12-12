import { AIResponse, isBetween, colors } from '../utils/tools.js';
import { marked } from '../utils/markdown.js';
import { Arg } from '../cli/args.js';
import { prompt } from './prompt.js';
import { log } from '../utils/logger.js';
import { addHistory } from '../db/history.js';
import { thinkMessage } from '../utils/thinking.js';



export const askCommand = async (args: Arg[]) => {
    if (args.length === 0) {
        log('Nenhum argumento foi fornecido.', colors.red);
        return;
    }

    const promptArg = args.find(arg => arg.isString);
    if (!promptArg) {
        log("Por favor, fornecer uma pergunta entre aspas.", colors.red);
        return;
    }

    const flag = args.find(arg => arg.isFlag);
    if (flag && flag.value === 'web-search') {
        log('Essa funcionalidade ainda não foi implementada.', colors.gray);
    }


    addHistory(promptArg.value, 'User');

    const completedPrompt = prompt();

    const stop = thinkMessage('Pensando')

    const response = await fetch("http://localhost:11434/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            model: "qwen3:1.7b",
            prompt: completedPrompt,
            temperature: 0.3,
            max_tokens: 500,
            stream: false
        })
    });



    const data: AIResponse = await response.json();

    stop();

    if (!data.response.trim()) {
        log("Nenhuma resposta foi gerada.", colors.red);
        return;
    }

    addHistory(data.response, 'Jarvis');

    console.log('\n');
    log('Resposta da IA:', colors.blueBright);
    log(marked(data.response));
    console.log('\n');
}