// Step 1: Get the speed input
function speedDetector(speed){
// Step 2: Set the speed limit
    const speedLimit = 70;

        // Step 3: Check if the speed is less than the speed limit
    if (speed < speedLimit) {
        return("Ok");
        // Step 4: Calculate demerit points for exceeding the speed limit
    } else { 
        const demeritPoints = Math.round((speed - speedLimit) / 5); 
        if (demeritPoints > 12) {       // Step 5: Check if demerit points exceed 12 (license suspension threshold)
            return ("License suspended");
            } else {
                return ("Points: " + demeritPoints); // Step 6: Print the total demerit points
            }
    }
    }
console.log(speedDetector(90))


