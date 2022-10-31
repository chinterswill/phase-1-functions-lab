// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    if (someValue > 42) {
        return (someValue - 42);
    }
    else if (someValue <= 42) {
        return (42 - someValue);
    }
        
    
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;

}

function distanceTravelledInFeet(num1, num2) {
    if (num1 > num2) {
        return (num1 - num2) * 264;
    }
    else if (num2 > num1) {
        return (num2 - num1) * 264;
    }
}

function calculatesFarePrice(start,destination) {
    let distance = distanceTravelledInFeet(start,destination);
    if (distance <= 400){
        return 0;
    }
    if (distance>=400 && distance<=2000){
        return (distance-400)* 0.02;
    }
    else if(distance>=2000&& distance<=2500){
        return 25;
    }
    else if (distance > 2500) {
        return "cannot travel that far"
    }
}
