

    var btn=document.querySelector(".button");
    var empty=document.querySelector(".email");
    var x=0;
    
    
    btn.onclick = function(){
        let e=empty.value;
        console.log(e);
        const email=e.indexOf("@");
        console.log(email);
           

            if (((email==-1) || (e==""))  && (x===0))
             {document.getElementById("myDiv").style.borderColor = "hsl(354, 100%, 66%)";
            let text =document.createElement("p");
            text.innerHTML="Please provide a valid email address"; 
            document.getElementById("error").appendChild(text);        
            x=1;
            console.log(x);
            }

            else if((x===1)&&(e!=""))           
            {document.getElementById("myDiv").style.borderColor = "hsl(223, 100%, 88%)";
            let text=document.getElementById("error");
            text.innerHTML="The email had been send";
            document.getElementById("error").style.marginTop ="12px";
            document.getElementById("error").style.color="hsl(223, 100%, 88%)";
            
            }

            

        
        

    }



        
        
