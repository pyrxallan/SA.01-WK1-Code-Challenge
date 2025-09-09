// Challenge 2: Speed Detector
function detectSpeed() {
    const speed = parseFloat(document.getElementById('carSpeed').value);
    const resultDiv = document.getElementById('speedResult');   // Result display div
    const speedLimit = 70;
    
    // Input validation
    if (isNaN(speed) || speed < 0) {
        resultDiv.innerHTML = '❌ Please enter a valid speed';
        resultDiv.className = 'result error';
        resultDiv.style.display = 'flex';
        return;
    }
    
    // Speed detection logic
    if (speed < speedLimit) {
        resultDiv.innerHTML = '✅ Ok - Speed is within limit'; // No points
        resultDiv.className = 'result success'; // Green
    } else {
        const excessSpeed = speed - speedLimit;
        const demeritPoints = Math.floor(excessSpeed / 5);
        
        if (demeritPoints > 12) {
            resultDiv.innerHTML = `🚫 License suspended! Points: ${demeritPoints} (Speed: ${speed} km/h)`;
            resultDiv.className = 'result error';
        } else {
            resultDiv.innerHTML = `⚠️ Points: ${demeritPoints} (Speed: ${speed} km/h, Excess: ${excessSpeed} km/h)`;
            resultDiv.className = 'result warning';
        }
    }
    // Display result
    resultDiv.style.display = 'flex';
}

// Clear input and result
function clearSpeed() {
    document.getElementById('carSpeed').value = ''; // Clear input
    document.getElementById('speedResult').style.display = 'none'; // Hide result
}