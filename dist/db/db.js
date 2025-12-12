import Database from "better-sqlite3";
let db = null;
export function initDB() {
    if (db)
        return db;
    db = new Database('./assistant.db');
    db.exec(`
        CREATE TABLE IF NOT EXISTS chat_history (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            content TEXT NOT NULL,
            role TEXT NOT NULL,
            timestamp INTEGER NOT NULL
        );
    `);
    return db;
}
//# sourceMappingURL=db.js.map