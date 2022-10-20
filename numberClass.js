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

    static average(val) {
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

    static findMin(arr) {
        if(!typeof(arr) === "object") {
            return undefined;
        }
        let minVal = arr[0];

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