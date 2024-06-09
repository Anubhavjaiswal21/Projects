const clock=document.getElementById('clock');

// setInterval(function(){},1000) //1000 in millisecond
setInterval(function(){
    let date=new Date()
    clock.innerHTML=(date.toLocaleTimeString());
},1000)