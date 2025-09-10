function generateGrade() {
    // Get input value
    const markInput = document.getElementById('studentMark');
    const mark = parseFloat(markInput.value);
    
    // Validate input
    if (isNaN(mark) || mark < 0 || mark > 100) {
        alert("Please enter a valid mark between 0 and 100.");
        markInput.focus();
        return;
    }
    
    // Determine grade
    let grade;
    
    if (mark > 79) {
        grade = "A";
    } else if (mark >= 60) {
        grade = "B";
    } else if (mark >= 49) {
        grade = "C";
    } else if (mark >= 40) {
        grade = "D";
    } else {
        grade = "E";
    }
    
    // Display results
    document.getElementById('gradeDisplay').textContent = grade;
    document.getElementById('scoreDisplay').textContent = `Score: ${mark}/100`;
    
    // Show result section
    document.getElementById('gradeResult').style.display = 'block';
}

function clearGrade() {
    document.getElementById('studentMark').value = '';
    document.getElementById('gradeResult').style.display = 'none';
}

// Enter key functionality
document.getElementById('studentMark').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        generateGrade();
    }
});