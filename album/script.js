 function changepopuptxt(){    
    window.open(href="../sign-in/index.html");
}
var feature='hello user my name is silent joker, i am the adman of 6NETWORK join my network and learn a lot of knowledge about internet'
var readless='This Graph Shoing The Information Of Our Network 2006 To 2009. In These Years We Have Faced A Lot Of Problems Products & Security.'
var plan='we provide planing in every kind of knoweldge  step by step Guide join my network and learn a lot of knowledge about internet '
var readless2='This Graph Shoing The Information Of Our Network 2010 To 2013. In These Years We Sell More Products New Members Join Our Network.'
var readless3='This Graph Shoing The Information Of Our Network 2018 To 2021. In These Years We Stop Selling ,We Just Focus To Joining New Members.'
var solution='we provide solutions of every kind of problem in any filed a local problem with global solution join today learn today';                             


function showfirstgraph(){
    if(document.getElementById('readmore1').innerHTML=="READ MORE"){
        document.getElementById('shownewtxt1').innerHTML=feature;
        document.getElementById('readmore1').innerHTML="READ LESS"
        document.getElementById('firstimg').src="imgs/5.jpg";
    }
    else{
        document.getElementById('firstimg').src="imgs/1.jpg";
        document.getElementById('shownewtxt1').innerHTML=readless;
        document.getElementById('readmore1').innerHTML="READ MORE"
    }
}

function showsecondgraph(){
    if(document.getElementById('readmore2').innerHTML=="READ MORE"){
        document.getElementById('shownewtxt2').innerHTML=plan;
        document.getElementById('readmore2').innerHTML="READ LESS"
        document.getElementById('secondimg').src="imgs/plan.jpg";
    }
    else{
        document.getElementById('secondimg').src="imgs/2.jpg";
        document.getElementById('shownewtxt2').innerHTML=readless2;
        document.getElementById('readmore2').innerHTML="READ MORE"
    }
}

function showthirdgraph(){
    if(document.getElementById('readmore3').innerHTML=="READ MORE"){
        document.getElementById('shownewtxt3').innerHTML=solution;
        document.getElementById('readmore3').innerHTML="READ LESS"
        document.getElementById('thirdimg').src="imgs/14.jpg";
    }
    else{
        document.getElementById('thirdimg').src="imgs/4.jpg";
        document.getElementById('shownewtxt3').innerHTML=readless3;
        document.getElementById('readmore3').innerHTML="READ MORE"
    }
}