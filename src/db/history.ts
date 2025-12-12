import { initDB } from "./db.js";
import { IMessageHistory } from "../utils/tools.js";




export const getHistory = (): IMessageHistory[] => {
    const db = initDB();
    return db.prepare(`SELECT * FROM chat_history ORDER BY timestamp ASC`).all() as IMessageHistory[];
}

export const addHistory = (content: string, role: 'User' | 'Jarvis'): void => {
    const db = initDB();
    const prepare = db.prepare(`INSERT INTO chat_history (content, role, timestamp) VALUES (?, ?, ?)`);

    prepare.run(content, role, Date.now());
}


export const clearHistory = (): void => {
    const db = initDB();
    db.prepare(`DELETE FROM chat_history`).run();
}

