function term(){
    var terms = document.getElementById("Terms");
    var btn = document.getElementById("submit");
    if(terms.value== "Terms"){
        btn.disabled = false;
    }
   }
    
    let img = document.getElementById("img");
    let doc = document.getElementById("upload");
    doc.onchange = function(){
        img.src = URL.createObjectURL(doc.files[0]);
    }
    let opt = document.getElementById("Job");
    function exp(){ 
        let exp = document.getElementById("experience-cand");
        if(opt.value == 1){
            
            exp.style.display = "flex";
        }else{
            exp.style.display="none";
        }
    }
