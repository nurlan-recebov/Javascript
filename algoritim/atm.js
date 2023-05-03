function getMoneyFormAtm(amount) {

    const result = [];
    const moneys = [100, 50, 20, 10, 5];


    for (let i = 0; i < moneys.length; i++) {
        let note = moneys[i];


        while (amount >= note) {
            amount -= note;
            result.push(note);
        }
    }

    return result;
}
console.log(getMoneyFormAtm(75));