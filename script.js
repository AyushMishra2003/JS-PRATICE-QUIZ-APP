let i=0
const total_question=10
let submision=false
let total_score=0
let submit=false
const instr=document.querySelector('.instruction')
const quiz=document.querySelector('.quiz')
document.querySelector('#start').addEventListener("click",function(){
    console.log("i am don");
    instr.style.display="none"
    quiz.style.display="flex"
    quiz.style.flexdirection="column"
})
const  question_paper=[
    {
        ques:"1.What number is one quarter of one tenth of one fifth of 200?",
        opA:"25",
        opB:"5",
        opC:"1",
        opD:"10",
        ans:"1"
    },
    {
        ques:"2.A palindrome is a word or phrase that is spelled the same written forward or backward, often used for I.Q. test questions. stets is a palindrome.",
        opA:"True",
        opB:"FALSE",
        opC:"BOTH A AND B",
        opD:"NONE OF THESE",
        ans:"True"  
    },
    {
        ques:"3.A, B, D, G, K. Which letter comes next in the sequence?",
        opA:"N",
        opB:"P",
        opC:"M",
        opD:"O",
        ans:"P"  
    },
    {
        ques:"4.The mystery number is between 60 and 150, a multiple of 7, and the sum of its digits is 10. What is the mystery number?",
        opA:"63",
        opB:"84",
        opC:"82",
        opD:"91",
        ans:"91"
    }
    ,
    {
        ques:"5.	Which item best completes the IQ test analogy question, train is to truck as airplane is to?",
        opA:"Glider",	
        opB:"Parachute",
        opC:" Jet",
        opD:"Bird",
        ans:"Jet"
    },
    {
        ques:"6.Senile Felines is a palindrome",
        opA:"true",
        opB:"false",
        opC:"Both A and B is correct",
        opD:"Don't Say",
        ans:"true"
    },
    {
        ques:"7.Which word is not a synonym of the others?",
        opA:"IQ",
        opB:"Coruscation",
        opC:"Luminosity",
        opD:"Lassitude",
        ans:"Lassitude"
    },
    {
        ques:"8.144, 233, 377, 610, ____, 1597, 2584. What is the missing number?",
        opA:"1120",
        opB:"1287",
        opC:"987",
        opD:"961",
        ans:"987"
    },
    {
        ques:"9.Select a number in your head. Double it. Subtract 2. Multiply by 3. Divide by 6. Add 2. The number is the same one you first selected in your head.",
        opA:"true",
        opB:"false",
        opC:"None of these",
        opD:"Don't say",
        ans:"false"
    },
    {
        ques:"10.The fifth consonant in this sentence is an i.",
        opA:"false",
        opB:"true",
        opC:"None of these",
        opD:"Don't say",
        ans:"false"
    }
]
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
    if(!submit)
    {
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
    submision=false;
    }
   }
   else{
    alert("QUIZ ALREADY SUBMITTED THANKU")
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

document.querySelector('#prev').addEventListener("click",function(){
    if(!submit)
    {
    i--
    if(i>=0)
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
   }
   else{
    alert("ALREADY SUBMITED")
   }
})

document.querySelector('#submit').addEventListener("click",function(){
    console.log("i am submit");
    document.querySelector('#score').innerHTML=`YOUR TOTAL SCORE IS ${total_score}`
    submit=true
})