class BankAccount {
    #balance
    #owner
    constructor(owner, balance = 0){
        this.#balance = balance
        this.#owner = owner
    }

    deposit(amount){
    if (amount > 0 && typeof amount === "number") {
        this.#balance += amount
        return this.#balance
    }
    else {
        console.error("problem with amount")
        return ("Amount must be a positive number");
    }
    };

    withdraw(amount) {
    if (amount > this.#balance) {
        throw new Error("Insufficient funds!");
    }
    else if (amount < 0) {
        throw new Error("Amount must be a positive number");
    }
    this.#balance -= amount;
}

    getBalance(){
    console.log(`Balance is ${this.#balance}`)
    return this.#balance
    }
}

export default BankAccount;
