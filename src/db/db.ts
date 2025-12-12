import Database from "better-sqlite3";


let db: Database.Database | null = null;

export function initDB(): Database.Database {
    if (db) return db;

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