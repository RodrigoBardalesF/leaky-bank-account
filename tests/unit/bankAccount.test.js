import BankAccount from "../../service/BankAccount.js";

describe("BankAccount.js", () => {
    let account;

    beforeEach(() => {
        account = new BankAccount("Alex", 100);
    });

    describe("withdraw", () => {
        test("withdraws a standard amount from the balance", () => {
            account.withdraw(30);

            expect(account.getBalance()).toBe(70);
        });

        test("prevents a withdrawal greater than the balance", () => {
            expect(() => account.withdraw(150)).toThrow("Insufficient funds!");
            expect(account.getBalance()).toBe(100);
        });

        test("rejects a negative withdrawal of -50", () => {
            expect(() => account.withdraw(-50)).toThrow(
                "Amount must be a positive number"
            );
            expect(account.getBalance()).toBe(100);
        });
    });
});