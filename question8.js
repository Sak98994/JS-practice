const result=(mark)=>{
    if(mark>=90 && mark<=100){
        console.log("great A")
    }
     else if(mark>=75 && mark<=89){
        console.log("great B")
    }
    else if(mark>=50 && mark<=74){
        console.log("great c")
    }
    else if(mark<50){
        console.log("Fail")
    }

}
result(90)
result(40)
result(75)
result(55)
