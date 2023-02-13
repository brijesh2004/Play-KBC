const option = document.querySelectorAll(".option")
const earning = document.querySelector(".earning");
const PlayButton = document.querySelector(".PlayButton");
const container = document.querySelector(".container");
const questionName = document.getElementById("questionName");
const Answer = document.querySelectorAll(".Answer");
const WiningMoney = document.getElementById("WiningMoney");
const winnerwithTotalMoney= document.querySelector(".winnerwithTotalMoney");

const li0 =  document.querySelector(".li0");
const li1 =  document.querySelector(".li1");
const li2 =  document.querySelector(".li2");
const li3 =  document.querySelector(".li3");
const li4 =  document.querySelector(".li4");
const li5 =  document.querySelector(".li5");
const li6 =  document.querySelector(".li6");
const li7 =  document.querySelector(".li7");
const li8 =  document.querySelector(".li8");
const li9 =  document.querySelector(".li9");
let questionIndex = 0;
let optionIndex = 0;
let TotalEarning = 0;
const questionList = ["1. What colour did Lord Shiva’s throat turn into when he drank the deadly poison during Samudra",
"2. What is the profession of Kabir in the film Kabir Singh?","3. Which of these national parks is named after the river that flows through the park?",
"4. The International Literacy Day is observed on","5. The language of Lakshadweep. a Union Territory of India, is","6. Bahubali festival is related to",
"7. Which day is observed as the World Standards Day?","8. September 27 is celebrated every year as","9. Who is the author of 'Manas Ka-Hans' ?","10. Who is the author of the epic 'Meghdoot'?"];

const optionList = ["RED","YELLOW","BLUE","BLACK","Engineer","Cricketor","Athlete","Doctor","Pench","Tadoba","Vrindavan","Wildera", "Sep 8" ,"Nov 28","May 2","Sep 22",
"Tamil","Hindi","Malayalam","Telugu","Islam","Hinduism","Buddhism","Jainism","June 26","Oct 14","Nov 15","Dec 2","Teachers' Day","National Integration Day","World Tourism Day",
"International Literacy Day","Khushwant Singh","Prem Chand","Jayashankar Prasad","Amrit Lal Nagar","Vishakadatta","Valmiki","Banabhatta","Kalidas"];
const AnswerList = ["BLUE","Doctor","Pench","Sep 8","Malayalam","Jainism","Oct 14","World Tourism Day","Amrit Lal Nagar","Kalidas"]
const EarningList = [1000,5000,10000,50000,100000,500000,1250000,2500000,5000000,10000000]


function StartTheGame(){
  
    questionName.innerText = questionList[questionIndex];
    PlayButton.style.display="none";
    earning.style.display="none";
    container.style.display="block";
    if(questionIndex==0){
      li0.style.backgroundColor = "green";
    }
    else if(questionIndex==1){
      li1.style.backgroundColor = "green";
    }
    else if(questionIndex==2){
      li2.style.backgroundColor = "green";
    }
    else if(questionIndex==3){
      li3.style.backgroundColor = "green";
    }
    else if(questionIndex==4){
      li4.style.backgroundColor = "green";
    }
    else if(questionIndex==5){
      li5.style.backgroundColor = "green";
    }
    else if(questionIndex==6){
      li6.style.backgroundColor = "green";
    }
    else if(questionIndex==7){
      li7.style.backgroundColor = "green";
    }
    else if(questionIndex==8){
      li8.style.backgroundColor = "green";
    }
    else if(questionIndex==9){
      li9.style.backgroundColor = "green";
    }
    Answer[0].innerText=optionList[optionIndex++];
    Answer[1].innerText=optionList[optionIndex++];
    Answer[2].innerText=optionList[optionIndex++];
    Answer[3].innerText=optionList[optionIndex++];
    var audio = document.getElementById("music");
    audio.volume = 0.5;  // Set the volume to 50%
    audio.play(); 
}
function SelectTheAnswer(){
    const op1 = event.target.innerHTML;
    // console.log(op1);
    if(op1==AnswerList[questionIndex]){
      console.log("matched");
      TotalEarning+=EarningList[questionIndex];
      earning.innerHTML=`Now Total Earning is ${TotalEarning}`;
      questionIndex++;
    //   if(questionIndex>=questionList.length){
    //     return;
    //   }
          if(questionIndex==10){
            winnerwithTotalMoney.style.display="block";
            PlayButton.style.display="none";
            // WiningMoney.style.display="block";
            earning.style.display="none";
            container.style.display="none";
            WiningMoney.innerText=`${TotalEarning}`;
              console.log("end");
          }
          else{
         PlayButton.style.display="block";
             earning.style.display="block";
              console.log(questionIndex);
               container.style.display="none";
              PlayButton.innerHTML="Next";
          }
    }
    else
    {
      PlayButton.style.display="none";
      earning.style.display="block";
      
      container.style.display="none";
      PlayButton.innerHTML="Next";
      earning.innerHTML=`You Loss Your Total Earning is ${TotalEarning}`;
    }

}