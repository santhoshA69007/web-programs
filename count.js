let n=0;
let s="NICE";
if(!localStorage.getItem("counter")){
    localStorage.setItem("counter",0)
}
function count(){
    if(n!==68){
    n= localStorage.getItem("counter")
    n++;
    document.querySelector("button").innerHTML=n;
    localStorage.setItem("counter",n)
    }
    else{
        document.querySelector("button").innerHTML=s;
       
        n++;   
    }


}