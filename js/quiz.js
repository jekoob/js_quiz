
var quiz = [  // array list of a quiz.
["How many demantions do we know?","3","THREE"],
["Tow additon tow is ?","4","FOUR"],
["What is the the bigest continent on the harth?","RUSSIA"],
["What does mean the acronyms JS?","JAVASCRIPT"],
["What are the three marks for asigning the 3D for the axis system?","XYZ","XZY","YXZ","YZX","ZXY","ZYX"]
];

// the in-put user's answer
var answer=[
[""],
[""],
[""],
[""],
[""]
];

 
  var qusTitle = document.getElementById("qusTitle");
  var qustion = document.getElementById("qustion");
  var input = document.getElementById("input");
  var submit = document.getElementById('button');
  var counter=0;
  var score=0;
  var state=true;
  var correct = [];
  var wrong=[];

  qusTitle.innerHTML = `QUSTION ${0+1}`;
  qustion.innerHTML = `${quiz[0][0]}`;

function userClick(){
   if(counter==4){
        answer[counter] = document.getElementById("input").value;
        $("#input").remove();
        $("#button").remove();
        $("#qustion").remove();
        $("#qusTitle").remove();
        state=false;

      for(i=0;i<2;i++){
 
           if(answer[i].toUpperCase() == quiz [i][2] || answer[i] == quiz[i][1]){  // loop for tow firset quastions
 
                  score++;
                  correct.push(quiz[i][0]);
                  correct.push(answer[i]);
            }
            else{
              wrong.push(quiz[i][0]);
              wrong.push(answer[i]);
            }
      }

  
      for(i=2;i<4;i++){
            if(answer[i].toUpperCase() == quiz [i][1] ){    // loop for 3s,4s quastions
  
                 score++;
                correct.push(quiz[i][0]);
                correct.push(answer[i]);
            }
            else{
             wrong.push(quiz[i][0]);
             wrong.push(answer[i]);
            }
      }
  
  
     let check=true;
     for(i=4;i<5;i++){  
        for(k=0;k<6;k++){                                     // loop for 5s quastion
             if(answer[4].toUpperCase() == quiz[4][k+1] ){
                score++;
                correct.push(quiz[i][0]);
                correct.push(answer[4]);
                check=false;
             }
        }
    if(check){
      wrong.push(quiz[i][0]);
      wrong.push(answer[4]);
    }    
    counter++;
    console.log(counter);
    console.log(correct);
    console.log(wrong);
    } 

   if(counter==5){
      var output = document.getElementById("output");
      var massage = "<h3 class='ul_title'>Quastions you've got right.</h3><ul class='list'>";
      for(i=0;i<correct.length;i++){
        massage+="<li>"+correct[i]+" || your answer : "+"<span class='spanCor'>"+correct[++i]+"</span></li>";
      }
      massage+="</ul>";
        
       massage+= "<h3 class='ul_title'>Quastions you've got wrong.</h3><ul class='list'>";
      for(i=0;i<wrong.length;i++){
        massage+="<li>"+wrong[i]+" || your answer : "+"<span class='spanWro'>"+wrong[++i]+"</span></li>";
      }
      massage+="</ul>";
      output.innerHTML = massage;
      var li = output.querySelectorAll("li");
        for(i=0;i<li.length;i+=2){
          li[i].style.backgroundColor = "gray";
          li[i].style.color = "white";
        }
      output.insertAdjacentHTML("beforeend","<h3 style='color:white'> you rigth "+score+"/5</h3>");  
   }
  
  }
  if(state==true){
         answer[counter] = document.getElementById("input").value;
         qustion.innerHTML = `${quiz[counter+1][0]}`;
         qusTitle.innerHTML = `QUSTION ${counter+2}`;
         $("#input").remove();
         submit.insertAdjacentHTML("beforebegin",'<input type="text" placeholder="Enter your anwser" id="input">');
         counter++;

  }
 
}