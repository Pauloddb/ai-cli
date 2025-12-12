export interface IMessageHistory {
    content: string;
    role: 'User' | 'Assistant';
    timestamp: number;
}
export declare class ChatHistory {
    messages: IMessageHistory[];
    addMessage(message: IMessageHistory): void;
}
//# sourceMappingURL=chat-history.d.ts.map