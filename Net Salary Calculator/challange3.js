function calculateNetSalary() {
    // Get input values
    const basicSalary = parseFloat(document.getElementById('basicSalary').value) || 0;
    const benefits = parseFloat(document.getElementById('benefits').value) || 0;
    const grossSalary = basicSalary + benefits;
    
    // Calculate deductions (simplified for demonstration)
    const paye = calculatePAYE(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(grossSalary);
    const housingLevy = grossSalary * 0.015; // 1.5% housing levy
    
    // Calculate net salary
    const totalDeductions = paye + nhif + nssf + housingLevy;
    const netSalary = grossSalary - totalDeductions;
    
    // Display results
    document.getElementById('grossSalary').textContent = `KSh ${grossSalary.toLocaleString()}`;
    document.getElementById('paye').textContent = `KSh ${paye.toLocaleString()}`;
    document.getElementById('nhif').textContent = `KSh ${nhif.toLocaleString()}`;
    document.getElementById('nssf').textContent = `KSh ${nssf.toLocaleString()}`;
    document.getElementById('housingLevy').textContent = `KSh ${housingLevy.toLocaleString()}`;
    document.getElementById('netSalary').textContent = `KSh ${netSalary.toLocaleString()}`;
    
    // Show result section
    document.getElementById('salaryResult').style.display = 'block';
}

function clearSalary() {
    document.getElementById('basicSalary').value = '';
    document.getElementById('benefits').value = '';
    document.getElementById('salaryResult').style.display = 'none';
}

// Simplified tax calculation for demonstration
function calculatePAYE(salary) {
    if (salary <= 24000) return salary * 0.1;
    if (salary <= 32333) return salary * 0.25;
    return salary * 0.3;
}

// Simplified NHIF calculation
function calculateNHIF(salary) {
    if (salary <= 5999) return 150;
    if (salary <= 7999) return 300;
    if (salary <= 11999) return 400;
    if (salary <= 14999) return 500;
    if (salary <= 19999) return 600;
    if (salary <= 24999) return 750;
    if (salary <= 29999) return 850;
    if (salary <= 34999) return 900;
    if (salary <= 39999) return 950;
    if (salary <= 44999) return 1000;
    if (salary <= 49999) return 1100;
    if (salary <= 59999) return 1200;
    if (salary <= 69999) return 1300;
    if (salary <= 79999) return 1400;
    if (salary <= 89999) return 1500;
    if (salary <= 99999) return 1600;
    return 1700;
}

// Simplified NSSF calculation
function calculateNSSF(salary) {
    const tier1 = 6000;
    const tier2 = 18000 - tier1;
    
    if (salary <= tier1) return salary * 0.06;
    if (salary <= 18000) return (tier1 * 0.06) + ((salary - tier1) * 0.06);
    return (tier1 * 0.06) + (tier2 * 0.06);
}

// Enter key functionality
document.getElementById('basicSalary').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('benefits').focus();
    }
});

document.getElementById('benefits').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        calculateNetSalary();
    }
});