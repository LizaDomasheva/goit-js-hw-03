// Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.


/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */

const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {

    // Текущий баланс счета
    balance: 0,

    // История транзакций
    transactions: [],


    /*
     * Метод создает и возвращает объект транзакции.
     * Принимает сумму и тип транзакции.
     */
    createTransaction(amount, type) {
        return {
            amount: amount,
            type: type,
            id: this.transactions.length
        };
    },

    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
    deposit(amount) {
        const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
        this.transactions.push(transaction);
        this.balance += amount;
    },


    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */

    withdraw(amount) {

        if (amount > this.balance) {
            alert("Cнятие такой суммы не возможно, недостаточно средств");
        } else {
            const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
            this.transactions.push(transaction);
            this.balance -= amount;
        }
    },


    /*
     * Метод возвращает текущий баланс
     */

    getBalance() {
        return this.balance;
    },

    /*
     * Метод ищет и возвращает объект транзации по id
     */


    getTransactionDetails(id) {
        let result;
        for (let i = 0; i < this.transactions.length; i++) {
            if (this.transactions[i].id === id) {
                result = this.transactions[i];
            }
        }
        return result;

    },


    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    

    getTransactionTotal(type) {
        let result = 0;
        for (let i = 0; i < this.transactions.length; i++) {
            if (this.transactions[i].type === type) {

                result += this.transactions[i].amount;
            }
        }
        
        return result;

    },
};

// account.deposit(300);
// account.deposit(800);
// account.deposit(500);
// account.withdraw(1000);

// console.log(account.balance);
// console.log(account.transactions);
// console.log(account.getTransactionDetails(0));
// console.log(account.getTransactionTotal('deposit'));



