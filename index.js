let a = [-12, -8, -7, -5, 2, 4, 5, 11, 15]
let n = a.length
let b = []
let l = 0
let r = n - 1
while (l <= r) {
    let leftSquare = a[l] ** 2
    let rightSquare = a[r] ** 2
    

    if (leftSquare > rightSquare) {
        b.unshift(leftSquare)
        l++
    } else {
        b.unshift(rightSquare)
        r--
    }
}
console.log(b)