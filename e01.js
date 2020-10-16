const tri =(array)=>{
    for(let i =0; i < array.length ; i++){
        while(!array.sort()){
            if(array[i] > array[i + 1]){
                first = array[i];
                array[i] = array[i + 1]
                first = array[i + 1]
            }
        }
    }
    return array
}

console.log(tri([66,10,88]))