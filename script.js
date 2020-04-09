
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

var score=0;
var correct=[],wrong=[];
function contemplation(){
  let a=1;
  let q=2; 
  
  for(i=0;i<5;i++){
    answer[i]=prompt(quiz[i][0]); 
  }

  for(i=0;i<2;i++){
 
    if(answer[i].toUpperCase() == quiz [i][q] || answer[i] == quiz[i][a]){  
    score++;                                                                    // loop for tow firset quastions
    correct.push(quiz[i][0]+" "+answer[i]);
    console.log(correct[0]);
    }
      
      
  }
 
  
  for(i=2;i<4;i++){
        if(answer[i].toUpperCase() == quiz [i][a] ){  
         score++;                                                       // loop for 3s,4s quastions
        }
          
      
  
  }
  
  
  
  for(i=0;i<1;i++){  
        for(k=0;k<6;k++){                                     // loop for 5s quastion
    if(answer[4].toUpperCase() == quiz[4][k+1] )
      score++;
      }   
  }
}
contemplation();
