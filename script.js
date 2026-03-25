// ----- Functions to implement -----

// 1) myFunc(): persistent counter

// 2) getRandomNum(max): 1..max int or 0 if invalid

// 3) myAdder(x, y): numeric sum

// 4) distance(x1, y1, x2, y2): Euclidean distance

// 5) quadratic(a, b, c): roots of ax^2 + bx + c = 0

// random in range
// function getRandomNum(max) {
//   max = parseInt(max);
//   if (isNaN(max || max < 1) return 0)
//     return Math.floor(Math.random() * max) + 1;
// }
// for (let i = 0; i < 5)
// // ----- Helpers -----
// function $(id) { return document.getElementById(id); }
// function setText(id, value) { $(id).textContent = String(value); }

// // ----- Click Handlers (wire UI -> functions -> DOM) -----

// function onMyFuncClick() {
//   const val = myFunc();
//   setText('outMyFunc', val);
// }

// function onRandomClick() {
//   const max = $('maxRand').value;
//   const val = getRandomNum(max);
//   setText('outRandom', val);
// }

// function onAdderClick() {
//   const x = $('addX').value;
//   const y = $('addY').value;
//   const sum = myAdder(x, y);
//   setText('outAdder', sum);
// }

// function onDistanceClick() {
//   const x1 = $('x1').value, y1 = $('y1').value;
//   const x2 = $('x2').value, y2 = $('y2').value;
//   const d = distance(x1, y1, x2, y2);
//   setText('outDistance', d);
// }

// function onQuadraticClick() {
//   const a = $('qa').value, b = $('qb').value, c = $('qc').value;
//   const roots = quadratic(a, b, c);
//   setText('outQuadratic', Array.isArray(roots) ? roots.join(', ') : roots);
// }
// 1) myFunc(): persistent counter
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

// 4) distance(x1, y1, x2, y2): Euclidean distance
function distance(x1, y1, x2, y2) {
    // Formula: sqrt((x2 - x1)^2 + (y2 - y1)^2)
    let dx = Number(x2) - Number(x1);
    let dy = Number(y2) - Number(y1);
    return Math.sqrt(dx * dx + dy * dy).toFixed(3);
}

// 5) quadratic(a, b, c): roots of ax^2 + bx + c = 0
function quadratic(a, b, c) {
    a = Number(a);
    b = Number(b);
    c = Number(c);
    
    let disc = b * b - 4 * a * c;
    let realPart = (-b / (2 * a)).toFixed(3);

    if (disc > 0) {
        // Two real roots
        let r1 = ((-b + Math.sqrt(disc)) / (2 * a)).toFixed(3);
        let r2 = ((-b - Math.sqrt(disc)) / (2 * a)).toFixed(3);
        return [r1, r2];
    } else if (disc === 0) {
        // One real root
        return [realPart];
    } else {
        // DIVE DEEPER: Imaginary roots
        let imagPart = (Math.sqrt(-disc) / (2 * a)).toFixed(3);
        return [`${realPart}+${imagPart}i`, `${realPart}-${imagPart}i`];
    }
}

// ----- Helpers & Click Handlers (Keep as is) -----
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
