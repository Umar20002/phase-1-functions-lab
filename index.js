const officeLocation = 42;
function distanceFromHqInBlocks(someValue){
    if (officeLocation > someValue){
        return officeLocation - someValue
    }
    else{
        return someValue - officeLocation
    }

}
//* print out the result
console.log(distanceFromHqInBlocks(someValue));

function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue) * 264;
}
console.log(distanceFromHqInFeet())


function distanceTravelledInFeet(someValue, officeLocation){
    if (officeLocation>someValue){
        return((officeLocation-someValue)*264);
      }
      else{
        return((someValue-officeLocation)*264);
    }
}
function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start,destination);
    if (distance<=400){
        return 0
    }
    if (distance>=400 && distance<=2000){
            return ((distance-400)* .02)  
    }
    if (distance>=2000 && distance<=2500){
        return 25
    }
    else{
        return "cannot travel that far"
    }

}