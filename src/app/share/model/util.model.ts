/**
 * 工具类
 */
export class AppUtil{

    /**
     * 移除数组中指定值的元素
     * @param array 数组
     * @param value 被移除的元素
     */
    public static removeElement(array:any[],value:any){
        for(let i=0;i<array.length;i++){
            if(array[i]==value){
                array.splice(i,1);
                return;
            }
        }
    }

    /**
     * 移除数组中指定属性为指定值的元素
     * @param array 
     * @param prop
     * @param vaue 
     */
    public static removeElementByProp(array:any[],prop:any,value:any){
        for(let i=0;i<array.length;i++){
            if(array[i][prop]==value){
                array.splice(i,1);
                return;
            }
        }
    }
    /**
     * 对象属性拷贝
     * @param source 提供值的对象
     * @param target 目标对象
     */
    public static copyProperties(source:any,target:any){
        for (var key in source) {
            target[key] = source[key];   
        }
        
    }
}