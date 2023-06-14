function strlength(a,b,c) {
    let total = a.length + b.length + c.length;
    console.log(total);
    let avg = Math.floor(total / 3);
    console.log(avg)
}
strlength('chocolate', 'ice cream', 'cake')