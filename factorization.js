function primeCheck(x) {
    if(x === 1) {
        return false;
    } else if(Math.floor(x) === x && x > 0) {
        const maxCheck = Math.floor(Math.sqrt(x));
        let factors = 0;
        for(let check = 1; check <= maxCheck; check ++) {
            if(x % check === 0) {
                factors++;
            }
            if(factors >= 2) {
                return false;
            }
        }
        return true;
    } else {
        throw new Error(`${x} is not in the domain of the function`);
    }
}

function primeStep(min, max) {
    let pList = [];
    while(min <= max) {
        if(primeCheck(min) === true) {
            pList.push(min);
        }
        min++;
    }
    return pList;
}

function primeFactor(x) {
    if(Math.floor(x) === x && x > 0) {
        if(x === 1) {
            return [1];
        }
        const pCheckList = primeStep(1, x);
        let standIn = x;
        let failSafe = 0;
        let primeFactors = [];
        for(let checkIndex = 0; checkIndex < pCheckList.length && failSafe <= 2 * x; failSafe++) {
            if(primeCheck(standIn) === true) {
                primeFactors.push(standIn);
                return primeFactors;
            } else if(standIn % pCheckList[checkIndex] === 0) {
                primeFactors.push(pCheckList[checkIndex]);
                standIn /= pCheckList[checkIndex];
            } else {
                checkIndex++;
            }
        }
        console.log(primeFactors);
        throw new Error(`Failsafe triggered`);
    } else {
        throw new Error(`${x} is not in the domain of the function`);
    }
}