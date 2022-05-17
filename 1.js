const calcMeanMedian = (arr) => {
    const arrOfArr = [[]];
    let index = 0;

    arr.forEach((el, i, arr) => {
        if (el < arr[i - 1]) {
            index += 1;
            arrOfArr[index] = [];
        }
        arrOfArr[index].push(el);
    });

    const output = [];

    arrOfArr.forEach((el) => {
        const obj = {};
        obj.mean = el.reduce((total, num) => total + num) / el.length;
        obj.median =
            el.length % 2 === 0
                ? (el[el.length / 2] + el[el.length / 2 - 1]) / 2
                : el[Math.floor(el.length / 2)];
        output.push(obj);
    });

    return output;
};

console.log(calcMeanMedian([3, 4, 6, 17, 25, 21, 23]));
