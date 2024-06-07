export function change(a,b,arr){
    let ketQua = false; 
    for(let index = arr.length - 1; index >= 0 ;index -- ){
        if(arr[index] === a){
            arr[index] = b;
            ketQua = true;
        }
    }
    return ketQua;
}