// const day=(num)=>{
//     if(num===1){
//         console.log("monday")
//     }
//     else if(num===2){
//         console.log("tuesday")
//     }
//  else if(num===3){
//         console.log("wednsday")
//     }
//  else if(num===4){
//         console.log("thursday")
//     }
//  else if(num===5){
//         console.log("friday")
//     }
//  else if(num===6){
//         console.log("saturday")
//     }
//     else{
//         console.log("sunday")
//     }

// }
// day(1)
// day(2)
// day(3)
// day(4)
// day(5)

const day=(num)=>{
    switch (num){
        case 1:
            return "monday";

            case 2:
            return "tuesday";

            case 3:
            return "wednesday";

            case 4:
            return "thursday";

            case 5:
            return "friday";

            case 6:
            return "saturday";

            case 7:
                return"sunday";

            default:
                return" invalid nuber"
    }

}
console.log(day(9));