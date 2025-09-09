// Challenge 1: Student Grade Generator
function generateGrade() {
    const mark = parseFloat(document.getElementById('studentMark').value);
    const resultDiv = document.getElementById('gradeResult');
    
    // Input validation
    if (isNaN(mark) || mark < 0 || mark > 100) {
        resultDiv.innerHTML = '❌ Please enter a valid mark between 0 and 100';
        resultDiv.className = 'result error';
        resultDiv.style.display = 'flex';
        return;
    }
    
    // Grade determination
    let grade;
    if (mark > 79) {
        grade = 'A';
    } else if (mark >= 60) {
        grade = 'B';
    } else if (mark >= 49) {
        grade = 'C';
    } else if (mark >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }
    
    // Display result
    resultDiv.innerHTML = `Grade: <strong>${grade}</strong>`;
    resultDiv.className = 'result success';
    resultDiv.style.display = 'flex';
}

// Clear input and result
function clearGrade() {
    document.getElementById('studentMark').value = '';
    document.getElementById('gradeResult').style.display = 'none';
}