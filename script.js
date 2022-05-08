"use strict"

var Order = {}


var isRun = true
do {
    var input= prompt("Įveskite prekės kainą: ")
    if(isNaN(input)){
        isRun = true
    }
    else if(input >= 0){
        Order.price = Number.parseFloat(input).toFixed(2)
        isRun = false
    }
    else{
       isRun = true
    }
} while (isRun)

isRun = true
    
do {
    input= prompt("Ar reikalingas pristatymas į namus? (taip/ne)")
    if(input == "ne"){
        
        console.log(`Prekės kaina: ${Order.price} €`)
        console.log("Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a")
    }
    else if(input == "taip"){
        do { 
            input = prompt("Įveskite miestą:")
            if (input == "" || isNaN(input) == false) {
                isRun = true
            }
            else{
                Order.deliveryPrice = Number.parseFloat(Order.price*0.01).toFixed(2)
                Order.totalPrice = Number(Order.deliveryPrice) + Number(Order.price)
                isRun = false
                console.log(`Prekės kaina: ${Order.price} €`)
                console.log(`Pristatymas: ${Order.deliveryPrice} €`)
                console.log(`Iš viso: ${Order.totalPrice} €`)
                console.log(`Prekę pristatysime į ${input} per 1-3 dienas.`)
            }
        } while (isRun)
    }
    else{
        isRun = true
    }
} while (isRun)
    

