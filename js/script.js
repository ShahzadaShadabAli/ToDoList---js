document.querySelector("#add").onclick=function(){
    var input = document.getElementById("input").value
    if(input == ""){
        alert("Kindly Write The Task")
    }
    else{

        var task = document.querySelector('.tasks');
        task.innerHTML += `<div class="task p-3" >
        <span>${input}</span>
        <button class="btn btn-danger btn-sm remove">Delete</button>
        <div>`;

        document.querySelector("#input").value = ""

        var remove = document.querySelectorAll(".remove")
        for(var i=0;i<remove.length;i++){
           remove[i].onclick = function(){
            this.parentNode.remove()
           }
        }
        
        var toggle = document.querySelectorAll(".task")
        for(var i=0;i<toggle.length;i++){
           toggle[i].onclick = function(){
            this.classList.toggle("strike")
           }
        }
        
    }
}