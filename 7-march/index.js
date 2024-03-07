class BankAccount {
    constructor(accountNo, accountHolder, balance) {
        this._accountNo = accountNo;
        this._accountHolder = accountHolder;
        this._balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
            console.log(`${amount} deposited successfully.`);
        } else {
            console.log('Invalid amount for deposit.');
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount;
            console.log(`${amount} withdrawn successfully.`);
        } else {
            console.log('Insufficient balance or invalid amount for withdrawal.');
        }
    }

    displayBalance() {
        console.log(`Account No.: ${this._accountNo}`);
        console.log(`Account Holder: ${this._accountHolder}`);
        console.log(`Balance: ${this._balance}`);
    }
}

class SavingAccount extends BankAccount {
    constructor(accountNo, accountHolder, balance) {
        super(accountNo, accountHolder, balance);
        this._interestRate = 0.05; 
        this._withdrawalLimit = 1000; 
        this._penaltyFee = 10; 
    }

    addInterest() {
        const interestAmount = this._balance * this._interestRate;
        this._balance += interestAmount;
        console.log(`Interest of ${interestAmount} added to the account.`);
    }

    withdraw(amount) {
        if (amount > this._withdrawalLimit) {
            console.log(`Withdrawal amount exceeds limit. A penalty fee of ${this._penaltyFee} will be charged.`);
            super.withdraw(amount + this._penaltyFee);
        } else {
            super.withdraw(amount);
        }
    }
}

const account1 = new SavingAccount('123456', 'John Doe', 1000);
account1.deposit(500);
account1.displayBalance(); 
account1.addInterest(); 
account1.displayBalance(); 
account1.withdraw(800); 
account1.displayBalance(); 
account1.withdraw(1200); 
account1.displayBalance();
