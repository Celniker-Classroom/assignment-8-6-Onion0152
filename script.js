// ----- Functions to implement -----

// 1) myFunc(): persistent counter

// 2) getRandomNum(max): 1..max int or 0 if invalid

// 3) myAdder(x, y): numeric sum

// 4) distance(x1, y1, x2, y2): Euclidean distance

// 5) quadratic(a, b, c): roots of ax^2 + bx + c = 0
let count = 0; 
function myFunc() {
    count++;
    return count;
}

// 2) getRandomNum(max): 1..max int or 0 if invalid
function getRandomNum(max) {
    let n = parseInt(max);
    if (isNaN(n) || n < 1) return 0;
    return Math.floor(Math.random() * n) + 1;
}

// 3) myAdder(x, y): numeric sum
function myAdder(x, y) {
    return Number(x) + Number(y);
}

// 4) distance(x1, y1, x2, y2)
function distance(x1, y1, x2, y2) {
    // Formula: sqrt((x2 - x1)^2 + (y2 - y1)^2)
    let dx = Number(x2) - Number(x1);
    let dy = Number(y2) - Number(y1);
    return Math.sqrt(dx * dx + dy * dy).toFixed(3);
}

// 5) quadratic(a, b, c)
function quadratic(a, b, c) {
    a = Number(a);
    b = Number(b);
    c = Number(c);
    
    let disc = b * b - 4 * a * c;
    let realPart = (-b / (2 * a)).toFixed(3);

    if (disc > 0) {
      
        let r1 = ((-b + Math.sqrt(disc)) / (2 * a)).toFixed(3);
        let r2 = ((-b - Math.sqrt(disc)) / (2 * a)).toFixed(3);
        return [r1, r2];
    } else if (disc === 0) {
        
        return [realPart];
    } else {
        //imaginary bc im locked
        let imagPart = (Math.sqrt(-disc) / (2 * a)).toFixed(3);
        return [`${realPart}+${imagPart}i`, `${realPart}-${imagPart}i`];
    }
}


function $(id) { return document.getElementById(id); }
function setText(id, value) { $(id).textContent = String(value); }

function onMyFuncClick() { setText('outMyFunc', myFunc()); }
function onRandomClick() { setText('outRandom', getRandomNum($('maxRand').value)); }
function onAdderClick() { setText('outAdder', myAdder($('addX').value, $('addY').value)); }

function onDistanceClick() {
    const d = distance($('x1').value, $('y1').value, $('x2').value, $('y2').value);
    setText('outDistance', d);
}

function onQuadraticClick() {
    const roots = quadratic($('qa').value, $('qb').value, $('qc').value);
    setText('outQuadratic', Array.isArray(roots) ? roots.join(', ') : roots);
}
