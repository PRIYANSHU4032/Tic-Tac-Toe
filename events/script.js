let mode = document.querySelector("#mode");
let body = document.querySelector("body");
let currmode = "light";

mode.addEventListener("click",()=>{
    if(currmode === "light"){
        body.classList.add("dark");
        body.classList.remove("light");
        mode.innerHTML ="light"
        currmode ="dark";
    }else{
        body.classList.add("light");
        body.classList.remove("dark");
        mode.innerHTML ="dark"
        currmode ="light";
    }
});