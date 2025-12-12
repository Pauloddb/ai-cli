import { initDB } from "./db.js";
export const getHistory = () => {
    const db = initDB();
    return db.prepare(`SELECT * FROM chat_history ORDER BY timestamp ASC`).all();
};
export const addHistory = (content, role) => {
    const db = initDB();
    const prepare = db.prepare(`INSERT INTO chat_history (content, role, timestamp) VALUES (?, ?, ?)`);
    prepare.run(content, role, Date.now());
};
export const clearHistory = () => {
    const db = initDB();
    db.prepare(`DELETE FROM chat_history`).run();
};
//# sourceMappingURL=history.js.map