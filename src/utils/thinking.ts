import { log } from "./logger.js";
import { colors } from "./tools.js";



export function thinkMessage(text: string) {
    const frames = ['.', '..', '...'];
    let i = 0;
    const biggerFrame: number = frames.reduce((a, b) => a.length > b.length ? a : b).length;
    const lengthSum = text.length + biggerFrame;


    const id = setInterval(() => {
        let currentFrame = frames[i % frames.length];

        log(`\r${text}${currentFrame}` + ' '.repeat(biggerFrame), colors.gray, false);
        i++;
    }, 150);
    return () => {
        clearInterval(id);
        log('\r', null, false);
        log(' '.repeat(lengthSum), null, false);
        log('\r', null, false);
    };
}
