document.getElementById('output').style.visibility='hidden';
var input =document.getElementById('IbsInput');
input.addEventListener('input',function(e){ 
    document.getElementById('output').style.visibility='visible';
    //console.log(input.value);
 
  //console.log(pounds); 
  var lbs=e.target.value;
  document.getElementById('gramsOutput').innerHTML=lbs/0.0022046;
  document.getElementById('kgOutput').innerHTML=lbs/2.2046;
  document.getElementById('ozOutput').innerHTML=lbs*16;
})