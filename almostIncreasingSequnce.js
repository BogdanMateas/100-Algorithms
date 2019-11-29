function alphabetSubsequence(s){
    con=true
    tempS=s.split('');
    for(let i=0;i<tempS.length-1;i++){
        if(tempS[i].charCodeAt()>=tempS[i+1].charCodeAt()){
            con=false;
        }
    }
    return con;
 }