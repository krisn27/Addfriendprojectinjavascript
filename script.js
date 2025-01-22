var istatus=document.querySelector("h5")

var btn=document.querySelector("#add")

var check=0

btn.addEventListener("click",function(){
    if(check==0){
    istatus.innerHTML="Friends"
    istatus.style.color="green"
    btn.innerHTML="remove friends"
    check=1
   // console.log("hello")
    }
    else{
        istatus.innerHTML="Stranger"
        istatus.style.color="red"
        btn.innerHTML="add friends"
        check=0
        //console.log("hate")

    }
    

})

