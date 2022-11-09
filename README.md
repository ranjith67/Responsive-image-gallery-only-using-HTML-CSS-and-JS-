
# Responsive image gallery only using HTML CSS and JS.

we'll show you how to create a responsive image gallery using HTML, CSS and JS. This gallery can be used to display images on any device, regardless of screen size.

responsive image galleries are a great way to increase brand visibility and show off your website's content in a more visually appealing way. In this video, we'll show you how to create a responsive image gallery using HTML, CSS and JS, so you can create a gallery that looks great on any device!

<img src="https://yt3.ggpht.com/zbhR6u7XRsG6pl-58YaGdDTSQ_1f1DwKlWc1W76UvN3k5Z37BfeBcPZQiV-mu0dcXeQg9CsnWA=s88-c-k-c0x00ffffff-no-rj-mo">


## Javascript

Use this code... Important!. If the user want to see different images on based on categary.

```bash
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
```


## Authors

- [@ranjith67](https://github.com/ranjith67)


![Logo](https://yt3.ggpht.com/zbhR6u7XRsG6pl-58YaGdDTSQ_1f1DwKlWc1W76UvN3k5Z37BfeBcPZQiV-mu0dcXeQg9CsnWA=s88-c-k-c0x00ffffff-no-rj-mo)

