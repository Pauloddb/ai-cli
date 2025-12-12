import { marked } from './tools.js';
export const askCommand = async (args) => {
    // if (!args.find(a => a.isString)) {
    //     throw new Error("ask: Por favor, forneça uma pergunta válida entre aspas.");
    // }
    if (args.find(a => a.isFlag && a.text === '--web-search')) {
        console.log(marked('**A funcionalidade de busca na web ainda não está implementada.**'));
    }
    const prompt = `
Você é um assistente de IA especializado em ajudar desenvolvedores com suas dúvidas de programação.
Forneça respostas claras e concisas para as perguntas feitas.
Responda sempre em português do Brasil.
Quando apropriado, inclua exemplos de código para ilustrar suas respostas.
Quando não souber a resposta, apenas responda 'Desculpe, não sei a resposta para isso.'.

Prompt do usuário: ${args.map(a => a.text).join(' ')}
`;
    //console.log('Pensando...');
    const response = await fetch("http://localhost:11434/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            model: "qwen2.5-coder:1.5b",
            prompt: prompt,
            temperature: 0.7,
            max_tokens: 300,
            stream: false
        })
    });
    const data = await response.json();
    if (!data.response.trim())
        throw new Error("Resposta vazia recebida da API de IA.");
    console.log('\n');
    console.log(marked('AI Response: ' + data.response));
    console.log('\n');
};
//# sourceMappingURL=ai.js.map