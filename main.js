const data=[
{
    article:"Outfit Inspo",
    prix:160,
    réduction:20,
    genre:"men",
    src:"/image/1 men.jpg"

},

{article:"Classy Yet Trendy",
prix:100,
réduction:30,
genre:"women",
src:"/image/1.jpg"

},

{article:"outfit ideas",
prix:110,
réduction:30,
genre:"men",
src:"/image/2 men.jpg"

},

{article:"casual clothers",
prix:100,
réduction:50,
genre:"women",
src:"/image/2.jpg"

},
{
    article:"casual clothers",
    prix:200,
    réduction:30,
    genre:"men",
    src:"/image/3 men.jpg"

},
{
    
    article:"casual clothers",
    prix:150,
    réduction:20,
    genre:"women",
    src:"/image/3.jpg"

},
{
    article:"casual clothers",
    prix:210,
    réduction:30,
    genre:"men",
    src:"/image/4 men.jpg"

},
{
    
    article:"casual clothers",
    prix:250,
    réduction:30,
    genre:"women",
    src:"/image/4.jpg"

},
{
    
    article:"casual clothers",
    prix:199,
    réduction:30,
    genre:"men",
    src:"/image/5 men.jpg"

},
{
    
    article:"casual clothers",
    prix:170,
    réduction:20,
    genre:"women",
    src:"/image/5.jpg"

},
{
    
    article:"casual clothers",
    prix:140,
    réduction:20,
    genre:"men",
    src:"/image/6 men.jpg"

},
{
    
    article:"casual clothers",
    prix:100,
    réduction:20,
    genre:"women",
    src:"/image/6.jpg"

},
{
    
    article:"casual clothers",
    prix:160,
    réduction:20,
    genre:"women",
    src:"/image/6.jpg"

},
{
    
    article:"casual clothers",
    prix:180,
    réduction:30,
    genre:"men",
    src:"/image/7 men.jpg"

},
{
    
    article:"casual clothers",
    prix:300,
    réduction:50,
    genre:"women",
    src:"/image/7.jpg"

},
{
    
    article:"casual clothers",
    prix:210,
    réduction:30,
    genre:"men",
    src:"/image/8 men.jpg"

},
{
    
    article:"casual clothers",
    prix:150,
    réduction:20,
    genre:"women",
    src:"/image/8.jpg"

},
{
    
    article:"casual clothers",
    prix:180,
    réduction:30,
    genre:"men",
    src:"/image/9 men.jpg"

},
{
    
    article:"casual clothers",
    prix:299,
    réduction:30,
    genre:"women",
    src:"/image/9.jpg"

},
{
    
    article:"casual clothers",
    prix:200,
    réduction:20,
    genre:"women",
    src:"/image/10.jpg"

},
{
    
    article:"casual clothers",
    prix:160,
    réduction:20,
    genre:"kids",
    src:"/image/kids 1.jpg"

},
{
    
    article:"casual clothers",
    prix:99,
    réduction:20,
    genre:"kids",
    src:"/image/kids 2.jpg"

},
{
    
    article:"casual clothers",
    prix:210,
    réduction:50,
    genre:"kids",
    src:"/image/kids 3.jpg"

},
{
    
    article:"casual clothers",
    prix:110,
    réduction:20,
    genre:"kids",
    src:"/image/kids 4.jpg"

},
{
    
    article:"casual clothers",
    prix:170,
    réduction:30,
    genre:"kids",
    src:"/image/kids 5.jpg",

},
{
    
    article:"casual clothers",
    prix:140,
    réduction:30,
    genre:"kids",
    src:"/image/kids 6.jpg"

},
{
    
    article:"casual clothers",
    prix:160,
    réduction:30,
    genre:"kids",
    src:"/image/kids 7.jpg"

},]

var each=function(arr,fn){
    if(Array.isArray(arr)){
        for(var i=0;i<arr.length;i++){
            fn(arr[i])
        }
    }else if(!Array.isArray(arr)&&typeof(arr)==="object"){
        for(var j in arr){
            fn(arr[j])
        }
    }
}
$("#n3").on("click",function(e){
   if($("#container").children().length===0){
    each(data,function(a){
        var div1 = $(`<div class="col-md-4">`)
        var card = $(`<div class="card">`)
        var card1=$(`<div class="d-flex justify-content-between align-items-end">`)
        var discount=$(`<small class="ml-1 noor">`+a.réduction+`%</small> `)
        var card2=$(`<div class="text-center">`)
        var img=$(`<img width="250" height="400">`)
        img.attr("src", a.src);
        var card3=$(`<div class="text-center">`)
        var title=$(`<h5>`+a.article+`</h5>`)
        var price=$(`<span class="text-success">$`+a.prix+`</span>`)
        $("#container").append(div1);
        div1.append(card)
        card.append(card1)
        card1.append(discount)
        card.append(card2)
        card2.append(img)
        card.append(card3)
        card3.append(title)
        card3.append(price)
        })}
})
$("#n1").on("click",function(e){
    $(".col-md-4").remove();
    
})

  $("#n4").on("click",function(e){
    $(".col-md-4").append('<li>  <a href="https://www.chanel.com/fr/" target="_blank">chanel</a> </li>');
  })


function filtered(réduction){
    var acc=[]
    for(var i=0;i<data.length;i++){
        if(data[i].réduction===réduction){
            acc.push (data[i])
        }
    }
console.log(acc)
$("#container").empty()
for(var i=0;i<acc.length;i++){
    var div1 = $(`<div class="col-md-4">`)
        var card = $(`<div class="card">`)
        var card1=$(`<div class="d-flex justify-content-between align-items-end">`)
        var discount=$(`<small class="ml-1 noor">`+acc[i].réduction+`%</small> `)
        var card2=$(`<div class="text-center">`)
        var img=$(`<img width="250" height="400">`)
        img.attr("src", acc[i].src);
        var card3=$(`<div class="text-center">`)
        var title=$(`<h5>`+acc[i].article+`</h5>`)
        var price=$(`<span class="text-success">$`+acc[i].prix+`</span>`)
        $("#container").append(div1);
        div1.append(card)
        card.append(card1)
        card1.append(discount)
        card.append(card2)
        card2.append(img)
        card.append(card3)
        card3.append(title)
        card3.append(price)
}
}





















