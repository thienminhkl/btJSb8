var numArr = [];

function getELE(id) {
    return document.getElementById(id);
}

//Add number to Arr
function addNumToArr() {
    var num = Number(getELE('txtNum').value);
    numArr.push(num);
    getELE("showNum").innerHTML = numArr;
}

getELE("btnAdd").onclick = addNumToArr;

//1.
function sumArr() {
    var total = 0;
    for (var i = 0; i < numArr.length; i++) {
        if (numArr[i] > 0) {
            total += numArr[i];
        }
    }
    getELE("txtSum").innerHTML = total;

}

getELE("btnSum").onclick = sumArr;

//2.
function countArr() {
    var total = 0;
    for (var i = 0; i < numArr.length; i++) {
        if (numArr[i] > 0) {
            total += 1;
        }
    }
    getELE("txtCount").innerHTML = total;

}

getELE("btnCount").onclick = countArr;

//3.
function minNum() {
    var min = numArr[0];

    for (var i = 1; i < numArr.length; i++) {
        if (min > numArr[i]) {
            min = numArr[i];
        }
    }


    getELE("txtMin").innerHTML = min;

}

getELE("btnMin").onclick = minNum;

//4.
function minPositiveNum() {
    var numArr2 = [];
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] > 0) {
            numArr2.push(numArr[i]);
        }
    }

    var min = numArr2[0];
    for (var i = 1; i < numArr2.length; i++) {
        if (min > numArr2[i]) {
            min = numArr2[i];
        }
    }

    getELE("txtPositiveMin").innerHTML = min;

}

getELE("btnPositiveMin").onclick = minPositiveNum;

//5.
function lastEvenNum() {
    var num = -1;

    for (var i = 1; i < numArr.length; i++) {
        if (numArr[i] % 2 == 0) {
            num = numArr[i];
        }
    }


    getELE("txtLastEvenNum").innerHTML = num;

}

getELE("btnLastEvenNum").onclick = lastEvenNum;

//6.
function swapNum() {
    var numArr2 = [];
    for (let i = 0; i < numArr.length; i++) {
        numArr2.push(numArr[i]);
    }
    var i1 = Number(getELE('num1').value);
    var i2 = Number(getELE('num2').value);
    var swapN = numArr2[i1];
    numArr2[i1] = numArr2[i2];
    numArr2[i2] = swapN;

    getELE("txtSwap").innerHTML = numArr2;

}

getELE("btnSwap").onclick = swapNum;

//7.
function sortNum() {
    var numArr2 = [];
    for (let i = 0; i < numArr.length; i++) {
        numArr2.push(numArr[i]);
    }
    numArr2.sort(function (a, b) {
        return a - b;
    });

    getELE("txtSort").innerHTML = numArr2;

}

getELE("btnSort").onclick = sortNum;

//8.
function isprime(n) {
    if (n === 1) {
        return false;
    }
    else if (n === 2) {
        return true;
    } else {
        for (var x = 2; x < n; x++) {
            if (n % x === 0) {
                return false;
            }
        }
        return true;
    }
}

function primeNum() {
    var num = -1;

    for (var i = 1; i < numArr.length; i++) {
        if (isprime(numArr[i])) {
            num = numArr[i];
            break;
        }
    }

    getELE("txtPrime").innerHTML = num;

}

getELE("btnPrime").onclick = primeNum;

//9.
var numArr2 = [];

//Add more number to Arr
function addMoreNum() {
    for (let i = 0; i < numArr.length; i++) {
        numArr2.push(numArr[i]);
    }

    var num = Number(getELE('txtAddMore').value);
    numArr2.push(num);
    getELE("showNum2").innerHTML = numArr2;
}

getELE("btnAddMore").onclick = addMoreNum;

function countInteger() {
    var total = 0;
    for (var i = 0; i < numArr2.length; i++) {
        if (Number.isInteger(numArr2[i])) {
            total += 1;
        }
    }
    getELE("txtInteger").innerHTML = total;

}

getELE("btnInteger").onclick = countInteger;

//10.
function compareNum() {
    var negative = 0;
    var positive = 0;
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] < 0) {
            negative += 1;
        } else if (numArr[i] > 0) {
            positive += 1;
        }
    }
    if (negative > positive) {
        getELE("txtCompare").innerHTML = "Số âm > Số dương";

    } else if (negative < positive) {
        getELE("txtCompare").innerHTML = "Số âm < Số dương";

    } else {
        getELE("txtCompare").innerHTML = "Số âm = Số dương";

    }

}

getELE("btnCompare").onclick = compareNum;