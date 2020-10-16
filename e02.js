function inserTri(Arr) {
    let n = Arr.length;
     for (let i = 1; i < n; i++) {
         let current = Arr[i]
         let j = i-1;
         while ((j > -1) && (current < Arr[j])) {
             Arr[j+1] = Arr[j];
             j--;
         }
         Arr[j+1] = current;
     }
   return Arr
}

console.log(inserTri([9, 7, 24, 45, 67, 85, 78, 95]))