export class AppUtil{
    public static removeElement(array:any[],value:any){
        for(let i=0;i<array.length;i++){
            if(array[i]==value){
                array.splice(i,1);
                return;
            }
        }
    }
}