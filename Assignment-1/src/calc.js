

function add(a,b) {
    return a+b;
}

const mult = (f,s)=>{
    return f*s;
}

//document.querySelector("from").addEventListener("submit" , addnote);

function display(mynote){

    document.querySelector("tbody").innerHTML = "";

    mynote.map((elem , index)=>{

        var row = document.createElement("tr");

        var t1 = document.createElement("td");
        var t2 = document.createElement("td");
        
        t1.textContent = elem;
        t2.textContent = "Detele";
          t2.addEventListener("click" , function(){
              deletenote(elem,index)
          })
        row.append(t1, t2);

        document.querySelector("tbody").append(row);
    })

    function deletenote(elem,index){
        mynote.splice(index , 1);
        localStorage.setItem("yourNotes" , JSON.stringify(mynote));
        display(mynote);
    }
}




export {add , mult , display }