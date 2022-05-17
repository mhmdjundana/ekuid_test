const moneySheet = (price, sheet) => {
    // 0 <= price <= 100.000
    // 0 < sheet <= 10

    const bill = [100000, 50000, 20000, 10000, 5000, 2000, 1000];

    if (sheet === 1) {
        for (let i = bill.length - 1; i >= 0; i--) {
            if (price <= bill[i]) {
                console.log([bill[i]]);
                return;
            }
        }
    }

    let start = 0;
    for (let i = 0; i < bill.length; i++) {
        if (price >= bill[i]) {
            start = i;
            break;
        }
    }

    let output = [];

    while (start < bill.length && price > 0) {
        if (price - bill[start] < 0) {
            start++;
        }
        if (price - bill[start] >= 0) {
            price -= bill[start];
            output.push(bill[start]);
        }
        if (price === 0 && output.length < sheet) {
            let index;
            for (let i = output.length - 1; i >= 0; i--) {
                if (output[i] === bill[start - 1]) {
                    index = i;
                }
            }
            for (let i = index; i < output.length; i++) {
                price += output[i];
            }
            output = output.slice(0, index);
        }
    }
    console.log(output);
};

moneySheet(17000, 1);
moneySheet(17000, 3);
moneySheet(23000, 4);
