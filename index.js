function scuberGreetingForFeet(distance){
  if(distance <= 400){
    return "This one is on me!";
  }
 
  else if(distance <= 2500){
    return "I will gladly take your thirty bucks.";
  }
  else{
    return "No can do.";
  }
}
scuberGreetingForFeet();


function ternaryCheckCity(city){
  console.log(city)
  const message = city === 'NYC' ? "Ok, sounds good." : "No go.";
  //if(city === 'NYC'){
    //return 'Ok, sounds good.';
  //}else{
    //return 'No go.'
  //}
  return message;
}
ternaryCheckCity();

function switchOnCharmFromTip(tip){
  let text;
switch(tip){
  case 'generous':
  text= 'Thank you so much.';
    break;
    case 'not as generous':
     text= 'Thank you.';
      break;
      case 'thanks for everything':
        text= 'Bye.'
 }
 return text;
}