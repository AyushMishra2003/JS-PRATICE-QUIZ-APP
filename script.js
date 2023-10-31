let i=0
const total_question=4
let submision=false
let total_score=0
const  question_paper=[
    {
        ques:"1.who is father of computer",
        opA:"James gosling",
        opB:"Ayush Mishra",
        opC:"Billames joes",
        opD:"Charles Babbage",
        ans:"James gosling"
    },
    {
        ques:"2.which is object oriented programming language",
        opA:"HTML",
        opB:"CSS",
        opC:"C",
        opD:"JAVA",
        ans:"JAVA"  
    },
    {
        ques:"3.who is PM of india",
        opA:"akhillesh yadav",
        opB:"mamata",
        opC:"Narendra Modi",
        opD:"lallu",
        ans:"Narendra Modi"  
    },
    {
        ques:"4. factor of x2- 2x-10 ",
        opA:"10",
        opB:"5",
        opC:"4",
        opD:"6",
        ans:"19"
    }
]
console.log("ayush");
const ques=document.querySelector('#que')
const opA=document.querySelector('#op1')
const opB=document.querySelector('#op2')
const opC=document.querySelector('#op3')
const opD=document.querySelector('#op4')
const ans=document.querySelector('#ans')
ques.innerHTML=question_paper[0].ques
opA.innerHTML=question_paper[0].opA
opB.innerHTML=question_paper[0].opB
opC.innerHTML=question_paper[0].opC
opD.innerHTML=question_paper[0].opD
 

document.querySelector('#next').addEventListener("click",function(){
    i++
    if(i<total_question)
    {
    ques.innerHTML=question_paper[i].ques
    opA.innerHTML=question_paper[i].opA
    opB.innerHTML=question_paper[i].opB
    opC.innerHTML=question_paper[i].opC
    opD.innerHTML=question_paper[i].opD
    opA.style.  background="none";
    opB.style.  background="none";
    opC.style.  background="none";
    opD.style.  background="none";
    submision=false
    }
    else{
        console.log(total_score);
       alert('END OF QUESTION')
    }
})
document.querySelector('#next').style.backgroundcolor="red"
opA.addEventListener("click",function(){
    if(submision==false)
    {
    const ans=question_paper[i].ans
    if(opA.innerHTML==ans)
    {
        opA.style.  background="green";
        total_score+=5
    }
    else{
        opA.style.background="red";
    }
    submision=true
   }
   else{
    alert("QUESTION ATTEMPTED ALREADY")
   }
})
opB.addEventListener("click",function(){
    if(submision===false){
    const ans=question_paper[i].ans
    if(opB.innerHTML==ans)
    {
        console.log("i am correct");
        opB.style.  background="green";
        total_score+=5
    }
    else{
        opB.style.  background="red";
    }
    submision=true
   }
   else{
      alert("QUESTION ATTEMPTED ALREADY")
   }
})
opC.addEventListener("click",function(){
    if(submision==false)
    {
    const ans=question_paper[i].ans
    if(opC.innerHTML==ans)
    {
        opC.style.  background="green";
        total_score+=5
    }
    else{
        opC.style.background="red";
    }
    submision=true
   }
   else{
    alert("QUESTION ATTEMPTED ALREADY")
   }
})
opD.addEventListener("click",function(){
   if(submision==false)
   {
    const ans=question_paper[i].ans
    if(opD.innerHTML==ans)
    {
        opD.style.  background="green";
        total_score+=5
    }
    else{
        opD.style.  background="red";
    }
    submision=true
  }
  else{
    alert("QUESTION ATTEMPTED ALREADY")
  }
})