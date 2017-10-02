export function propCopy(source:any,target:any){
    for(let key in source){
        target[key]=source[key];
    }
}