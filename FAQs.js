let allQuestions=document.querySelectorAll(".FAQs-items h3")


allQuestions.forEach((items , index)=>{
    
    items.addEventListener("click",()=>{

        allQuestions.forEach((headings,i)=>{
            console.log(headings,i)
            if(index!=i){
               headings.nextElementSibling.classList.remove("showerAnswer")
            }
        })

        
        // Changing the Symbols
        if(items.lastElementChild.innerHTML=="+"){
            items.lastElementChild.innerHTML="-"
        }else{
             items.lastElementChild.innerHTML="+"

        }
        // Current Question Show/hide
    
        items.nextElementSibling.classList.toggle("showerAnswer")
    })
})