export type Customer = {
    id: number;
    name: string;
    cpf: string;
    birthDay: string;
    balance: number;
    transactions: [Transaction]
}

export type Transaction = {
    date: number;
    value: number;
    type: string;
    recipientName: string;
    recipientCpf: string;
    senderName: string;
    senderCpf: string;
}

