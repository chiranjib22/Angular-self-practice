class BankAccount{
  private Balanace:number = 0;

  constructor(private owner:string){} // declare and initialize

  deposit(amount:number){
    if(amount>0){
      this.Balanace += amount;
    }
  }

  withdraw(amount:number){
    if(amount>0 && amount<=this.Balanace){
      this.Balanace -= amount;
    }
  }

  getBalance():number{
    return this.Balanace;
  }

  getOwner():string{
    return this.owner;
  }
}

const account1 = new BankAccount('Chiranjib');
account1.deposit(1000);
account1.withdraw(500);
console.log(account1.getBalance());
console.log(account1.getOwner());
