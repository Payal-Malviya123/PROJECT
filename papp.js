let form=document.querySelector("#expense-form")
let title=document.querySelector("#tit")
let amount=document.querySelector("#amt")
let category=document.querySelector("#cate")
let date=document.querySelector("#date")
let totalTag=document.querySelector("#total")
let ul=document.querySelector("#expense-list")
let btn=document.querySelector("#btn")
let inp=document.querySelectorAll(".inp")

total=0;
// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
// });

btn.addEventListener("click",(e)=>{
    e.preventDefault()

    let t=title.value
    let a=amount.value
    let c=category.value
    let d=date.value
    
    total+=Number(amount.value)
    console.log(total)
    totalTag.innerHTML=`Total = ${total}<span>&#8377;</span>`;

    let li=document.createElement("li");
    li.classList.add("item");
    li.setAttribute("data-amount",amount.value)

    li.innerHTML=`<div class="left">
     <h4>${t}</h4>
     <p><b>Amount = </b>${a} <span>&#8377;</span></p>
     <p><b>Category = </b>${c}</p>
     <p><b>Date = </b>${d}</p>
    </div> 
    <div class="right">
     <button class="del">Delete</button>
    </div> `;
    // dltBtn.innerText="delete";
    // li.appendChild(dltBtn);
    ul.appendChild(li);
    
    
    title.value=""
    amount.value=""
    category.value=""
    date.value=""
})

ul.addEventListener("click",(e)=>{
    if(e.target.nodeName=="BUTTON"){
        let butn=e.target.closest("button");
        // if(!butn) return;
        let listItem=butn.closest("li");
            
        let am=Number(listItem.getAttribute("data-amount"));
        total-=am;
        totalTag.innerHTML=`Total = ${total}<span>&#8377;</span>`
        listItem.remove();
        
        console.log("deleted");
    }
})
