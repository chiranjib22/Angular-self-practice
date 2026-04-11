"use strict";
class BankAccount {
    owner;
    Balanace = 0;
    constructor(owner) {
        this.owner = owner;
    } // declare and initialize
    deposit(amount) {
        if (amount > 0) {
            this.Balanace += amount;
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.Balanace) {
            this.Balanace -= amount;
        }
    }
    getBalance() {
        return this.Balanace;
    }
    getOwner() {
        return this.owner;
    }
}
const account1 = new BankAccount('Chiranjib');
account1.deposit(1000);
account1.withdraw(500);
console.log(account1.getBalance());
console.log(account1.getOwner());
