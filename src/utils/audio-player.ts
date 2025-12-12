import { exec } from 'child_process';


export const playAudio = async (directory: string, url: string): Promise<void> => {
    exec(`start ${directory}\\${url}`);
}