let all = document.getElementById("all");
let bags = document.getElementById("bag");
let shoes = document.getElementById("shoe");
let bg = document.getElementsByClassName("bags");
let sh = document.getElementsByClassName("shoes");
all.style.color = "blueviolet";

// all buttton
all.addEventListener('click', function(){
    for(object of bg){
        object.style.display = "block";
    }
    for(object of sh){
        object.style.display = "block";
    }
    all.style.color = "blueviolet";
    bags.style.color = "black";
    shoes.style.color = "black";
})

// bag button
bags.addEventListener('click', function(){
    for(object of bg){
        object.style.display = "block";
    }
    for(object of sh){
        object.style.display = "none";
    }
    all.style.color = "black";
    bags.style.color = "blueviolet";
    shoes.style.color = "black";
})

// shoe button
shoes.addEventListener('click', function(){
    for(object of bg){
        object.style.display = "none";
    }
    for(object of sh){
        object.style.display = "block";
    }
    all.style.color = "black";
    bags.style.color = "black";
    shoes.style.color = "blueviolet";
})