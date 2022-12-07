//4.

let n0 = 1234;
let count = 0;
    while (n0 !== 0)
    {
        n0 = (n0 - n0%10)/10;
        ++count;
    }
    console.log(count);

    let x = 12;
    let sum0 = 0;
    while(x !== 0) {
        x = (x - x%10)/10;
        ++sum0;
    }
    console.log (sum0)


    let i = 8;
    let res0 = 0;
    while ( i !== 0) {
        i = (i - i%10)/10;
        ++res0;
    }
    console.log(res0)

//6.

let n1 = 2463;
let d = 5;
let res = false;
    while (n1) {
        if (d === n1%10 ) {
            console.log(res ="Yes");
            break;
        }
            n1 = (n1 -n1%10)/10;
                
        };
    
if (res === false) {
    console.log("No")
}

let _n = 45689;
let _d = 8;
let _res = false;
    while (_n) {
        if (_d === _n%10 ) {
            console.log(_res ="Yes");
            break;
        }
            _n = (_n -_n%10)/10;
                
        };
    
if (_res === false) {
    console.log("No")
}

//7.

let n = 895796;
let sum = 0;
while (n) {
    sum += (n%10);
    n = (n - n%10)/10;
    
}
console.log(sum)