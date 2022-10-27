class Number {
    static isPrime(val) {
        if(!Number.isInt(val) || val === 1) {
            return false
        }
        const maxCheck = Math.floor(Math.sqrt(val));
        let factors = 0;
        for(let check = 1; check <= maxCheck ; check ++) {
            if(val % check === 0) {
                factors++;
            }
            if(factors >= 2) {
                return false;
            }
            
        }
        return true;
    }
    
    static isNumList(arr) {
        if(!typeof(arr) === "object") {
            return false;
        }
        let isList = true;
        arr.forEach(el => {
            if(!Number.isNum(el)) {
                isList = false;
            }
        })
        if(!isList) {
            return false;
        }
        return true;
    }

    static isInt(val) {
        if(!typeof(val) === "number") {
            return null;
        }
        if(Math.floor(val) === val || Math.ceil(val) === val) {
            return true;
        }
        return false;
    }

    static isEven(val) {
        if(!Number.isInt(val)) {
            return undefined;
        }
        if(val % 2 === 0) {
            return true;
        }
        return false;
    }

    static isNum(val) {
        if(!typeof(val) === "number") {
            return false
        }
        return true;
    }

    static isSquare(val) {
        if(!Number.isInt(val)) {
            return false;
        }
        if(Number.isInt(Math.sqrt(val))) {
            return true;
        }
        return false;
    }

    static isPerfect(val) {
        if(!Number.isInt(val)) {
            return false
        }
        let factorSum = -1 * val;
        const maxCheck = Math.floor(Math.sqrt(val));
        for(let check = 1; check <= maxCheck; check++) {
            if(val % check === 0) {
                factorSum += check;
            }
        }
        if(factorSum === val) {
            return true
        }
        return false;
    }

    static factors(val) {
        if(!Number.isInt(val)) {
            return []
        }
        let factorList = [];
        for(let check = 0; check <= val; check++) {
            if(val % check === 0) {
                factorList.push(check);
            }
        }
        return factorList;
    }

    static multiplesUp(rootVal, num) {
        if(!Number.isNum(rootVal)) {
            return []
        }
        let multipleList = [];
        for(let rec = 1; rec <= num; rec++) {
            multipleList.push(rootVal * rec);
        }
        return multipleList;
    }

    static isPositive(val) {
        if(!Number.isNum(val)) {
            return undefined;
        }
        if(val > 0) {
            return true;
        } else if(val < 0) {
            return false;
        } else {
            return null;
        }
    }

    static getPrimes(min, max) {
        if(!Number.isInt(min) || !Number.isPositive(min) || !Number.isInt(max) || !Number.isPositive(max)) {
            return [];
        }
        let primeList = [];
        while(min <= max) {
            if(Number.isPrime(min)) {
                primeList.push(min);
            }
            min++;
        }
        return primeList;
    }

    static getPrimeFactprs(val) {
        if(!Number.isInt(val) || !Number.isPositive(val)) {
            return [];
        }
        let standIn = val;
        let pCheck = Number.getPrimes(1, val);
        let failsafe = 0;
        let pFactrors = [];
        for(let checkIndex = 0; checkIndex <= pCheck.length && failsafe <= val * 2; failsafe++ ) {
            if(Number.isPrime(standIn)) {
                pFactrors.push(standIn);
                return pFactrors;
            } else if(standIn % pCheck[checkIndex] === 0) {
                pFactrors.push(pCheck[checkIndex]);
                standIn /= pCheck[checkIndex];
            } else {
                checkIndex++;
            }
        }
        return "failsafe triggered";
    }

    static AVG(val) {
        let runningTotal = 0;
        let isNum = true;
        val.forEach(el => {
            if(!Number.isNum(el)) {
                isNum = false;
            } else {
                runningTotal += el;
            }
        })
        if(!isNum) {
            return undefined;
        }
        return runningTotal / val.length;
    }

    static MED(arr) {
        if(!Number.isNumList(arr)) {
            return undefined;
        }
        let a = arr.sort();
        let p;
        if(!Number.isEven(a.length)) {
            p = (a.length + 1) / 2 - 1;
            return a[p];
        } else if(Number.isEven(a.length)) {
            p = a.length / 2 - 1;
            return (a[p] + a[p + 1]) / 2;
        }
    }

    static quartiles(arr) {
        if(!Number.isNumList(arr)) {
            return [];
        }
        let a = arr.sort();
        let p1;
        let p2;
        let p3;
        if(!Number.isEven(a.length)) {
            p2 = (a.length + 1) / 2 - 1;
        } else if(Number.isEven(a.length)) {
            p2 = a.length / 2 - 1;
        }
        //console.log(p2);
        let a0 = [];
        let a1 = [];
        for(let index = 0; index < a.length; index++) {
            if(index < p2) {
                a0.push(a[index]);
            } else if(index > p2) {
                a1.push(a[index]);
            }
        }
        //console.log(a0);
        //console.log(a1);
        p1 = Number.MED(a0);
        p3 = Number.MED(a1);
        return [p1, p2, p3];
    }

    static MODE(arr) {
        if(!Number.isNumList(arr)) {
            return undefined;
        }
        let a = arr.sort();
        let currentNum = a[0];
        let currentCount = 0;
        let list = [];
        arr.forEach(el => {
            if(el === currentNum) {
                currentCount++;
            }
            if(el != currentNum) {
                list.push([currentNum, currentCount]);
                currentCount = 1;
                currentNum = el;
            }
        }); // incomplete
        return null;
    }

    static standardDeviation(arr, type = "Sample") {
        if(!Number.isNumList(arr)) {
          return 0;
        }
        //let avg = Number.AVG(arr);
        let runTot = Number.sumOfSquares(arr);
        switch(type) {
          case "Population":
            return Math.sqrt(runTot / arr.length);
            break;
          case "Sample":
            return Math.sqrt(runTot / (arr.length - 1));
            break;
          default:
            return undefined;
        }
    }
    
    static sumOfSquares(arr) {
        if(!Number.isNumList(arr)) {
          return undefined;
        }
        let avg = Number.AVG(arr);
        let runTot = 0;
        arr.forEach(el => {
          runTot += (el - avg) * (el - avg)
        })
        return runTot;
    }

    static variance(arr, type = "Sample") {
        if(!Number.isNumList(arr)) {
          return 0;
        }
        let avg = Number.AVG(arr);
        let runTot = Number.sumOfSquares(arr)
        switch(type) {
          case "Population":
            return runTot / arr.length;
            break;
          case "Sample":
            return runTot / (arr.length - 1);
            break;
          default:
            return undefined;
        }
        //return runTot / (arr.length - 1);
    }

    static zScore(data, arr) {
        if(!Number.isNum(data) || !Number.isNumList(arr)) {
          return undefined;
        }
        let top = data - Number.AVG(arr);
        let bottom = Number.standardDeviation(arr, "Population");
        return top / bottom;
    }

    static min(arr) {
        if(!typeof(arr) === "object") {
            return undefined;
        }
        let minVal = 0;
        let num = true;
        arr.forEach(el => {
            if(!Number.isNum(el)) {
                isNum = false;
            }
            if(el < minVal) {
                minVal = el;
            }
        })
        if(!num) {
            console.log("Element of array was not a number, is was not considered");
        }
        return minVal;
    }

    static max(arr) {
        if(!typeof(arr) === "object") {
            return undefined;
        }
        let maxVal = 0;
        let num = true;
        arr.forEach(el => {
            if(!Number.isNum(el)) {
                num = false;
            }
            if(el > maxVal) {
                maxVal = el;
            }
        })
        if(!num) {
            console.log("Element of array was not a number, is was not considered");
        }
        return maxVal
    }
    
    static getInfo(val) {
        if(!Number.isNum) {
            return [];
        }
        let list = ["signState", "intState", "primeState"];
        
        Number.isPositive(val) ? list[0] = "Positive" : list[0] = "Negative";
        Number.isInt(val) ? list[1] = "Integer" : list[1] = "Not Integer";
        Number.isPrime(val) ? list[2] = "Prime" : list[2] = "Composite";

        return list;
    }
}