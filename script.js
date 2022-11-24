document.querySelector("#btn").addEventListener("click",function(){
    let mon =document.querySelector("#money").value
    let bill = 275
    let tip1 = bill * 0.15
    let tip2 = bill * 0.20
    let total_v1 = bill + tip1
    let total_v2 = bill + tip2
    if(bill >= 0 && bill <= 300){
    document.querySelector("#result").innerHTML=`the bill was ${bill}$ the tip was ${tip1}$ and the total value is ${total_v1}$`
    }else{
    document.querySelector("#result").innerHTML=`the bill was ${bill}$ the tip was ${tip2}$ and the total value is ${total_v2}$`
    }
})

