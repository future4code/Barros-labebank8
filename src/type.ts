export type Customer = {
    id: number;
    name: string;
    cpf: string;
    birthDay: string;
    balance: Balance
}

export type Balance = {
    amount: number;
    date: string;
    description: string;
}