const client = {
    fullName: "Aytan Rajabli",
    creditLimit: 10,
    balans: 10,
    precentOfMinPayment: 10,
    getBalance() {
        if(this.balans < 0){
            console.log(`Borcunuz ${Math.abs(this.balans)}`)
        } else {
            console.log(`Balansınız  ${this.balans}`)
        }
    },
    getMinPayment() {
        if(this.balans < 0){
            console.log(`Minimum ödənişiniz ${Math.abs(this.balans) * this.precentOfMinPayment / 100}`)
        } else {
            console.log(`Sizin borcunuz yoxdur`)
        }
    },
    withdraw(amount) {
        if(amount <= this.balans + this.creditLimit){
            this.balans -= amount
            console.log(`Balans: ${this.balans}`)
        }else{
            console.log('Kifayet qeder balansiniz yoxdur');
        }
    },
    refill(amount) {
        this.balans += amount
        console.log(this.balans)
    }
}

client.withdraw(30)
