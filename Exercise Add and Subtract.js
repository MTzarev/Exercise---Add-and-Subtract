function addAndSubtract(arr) {
    let oldSum = 0;
    let newSum = 0;
    let currentEl = 0;

    for (let i = 0; i < arr.length; i++) {
        currentEl = Number(arr[i]);
        oldSum += currentEl;
        if (currentEl % 2 === 0) {
            currentEl += i;
        } else {
            currentEl -= i;
        }
        arr[i] = currentEl;
        newSum += currentEl;
    }


    console.log(arr);
    console.log(oldSum);
    console.log(newSum);
}
addAndSubtract([5, 15, 23, 56, 35]);
//addAndSubtract([-5, 11, 3, 0, 2]);