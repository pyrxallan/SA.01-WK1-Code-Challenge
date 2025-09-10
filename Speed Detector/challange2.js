function detectSpeed() {
    // Get input value
    const speedInput = document.getElementById('carSpeed');
    const speed = parseFloat(speedInput.value);
    
    // Validate input
    if (isNaN(speed) || speed < 0) {
        alert("Please enter a valid speed.");
        speedInput.focus();
        return;
    }
    
    // Constants
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    
    // Calculate demerit points
    let status, demeritPoints;
    
    if (speed <= speedLimit) {
        status = "OK";
        demeritPoints = 0;
    } else {
        demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        
        if (demeritPoints > 12) {
            status = "LICENSE SUSPENDED";
        } else {
            status = "OVER LIMIT";
        }
    }
    
    // Display results
    document.getElementById('speedStatus').textContent = status;
    document.getElementById('demeritPoints').textContent = `Demerit Points: ${demeritPoints}`;
    
    // Show result section
    document.getElementById('speedResult').style.display = 'block';
}

function clearSpeed() {
    document.getElementById('carSpeed').value = '';
    document.getElementById('speedResult').style.display = 'none';
}