// Challenge 3: Kenya Net Salary Calculator (2025 rates)
function calculateNetSalary() {
    const basicSalary = parseFloat(document.getElementById('basicSalary').value);
    const benefits = parseFloat(document.getElementById('benefits').value) || 0;
    const resultDiv = document.getElementById('salaryResult');
    
    if (isNaN(basicSalary) || basicSalary <= 0) {
        resultDiv.innerHTML = '❌ Please enter a valid basic salary';
        resultDiv.className = 'result error';
        resultDiv.style.display = 'flex';
        return;
    }

    const grossSalary = basicSalary + benefits;

    // NSSF Calculation (February 2025 rates: Tier I up to 8,000, Tier II 8,001-72,000)
    let nssf = 0;
    if (grossSalary <= 8000) {
        nssf = grossSalary * 0.06; // 6% of gross salary for Tier I
    } else if (grossSalary <= 72000) {
        nssf = (8000 * 0.06) + ((grossSalary - 8000) * 0.06); // Tier I + Tier II
    } else {
        nssf = (8000 * 0.06) + ((72000 - 8000) * 0.06); // Maximum NSSF
    }
    
    // SHIF Calculation (2.75% of gross salary, minimum 300)
    let shif = grossSalary * 0.0275;
    if (shif < 300) shif = 300;
    
    // Housing Levy (1.5% of gross salary, max 5,000 - tax deductible from Dec 2024)
    let housingLevy = grossSalary * 0.015;
    if (housingLevy > 5000) housingLevy = 5000;
    
    // Taxable income (gross - NSSF - SHIF - Housing Levy)
    const taxableIncome = grossSalary - nssf - shif - housingLevy;
    
    // PAYE Tax calculation using 2025 brackets
    let paye = 0;
    const personalRelief = 2400; // Monthly personal relief
    
    if (taxableIncome > 24000) {
        // First band: 0-24,000 at 10%
        paye += 24000 * 0.10;
        
        if (taxableIncome > 32333) {
            // Second band: 24,001-32,333 at 25%
            paye += (32333 - 24000) * 0.25;
            
            if (taxableIncome > 500000) {
                // Third band: 32,334-500,000 at 30%
                paye += (500000 - 32333) * 0.30;
                
                if (taxableIncome > 800000) {
                    // Fourth band: 500,001-800,000 at 32.5%
                    paye += (800000 - 500000) * 0.325;
                    
                    // Fifth band: Above 800,000 at 35%
                    paye += (taxableIncome - 800000) * 0.35;
                } else {
                    paye += (taxableIncome - 500000) * 0.325;
                }
            } else {
                paye += (taxableIncome - 32333) * 0.30;
            }
        } else {
            paye += (taxableIncome - 24000) * 0.25;
        }
    } else {
        paye = taxableIncome * 0.10;
    }
    
    // Apply personal relief
    paye = Math.max(0, paye - personalRelief);
    
    // Calculate net salary
    const netSalary = grossSalary - nssf - shif - housingLevy - paye;
    
    // Display results
    resultDiv.innerHTML = `
        <div class="salary-breakdown">
            <div class="breakdown-item">
                <span>Gross Salary</span>
                <strong>KSh ${grossSalary.toLocaleString()}</strong>
            </div>
            <div class="breakdown-item">
                <span>NSSF (6%)</span>
                <strong>KSh ${nssf.toLocaleString()}</strong>
            </div>
            <div class="breakdown-item">
                <span>SHIF (2.75%)</span>
                <strong>KSh ${shif.toLocaleString()}</strong>
            </div>
            <div class="breakdown-item">
                <span>Housing Levy (1.5%)</span>
                <strong>KSh ${housingLevy.toLocaleString()}</strong>
            </div>
            <div class="breakdown-item">
                <span>Taxable Income</span>
                <strong>KSh ${taxableIncome.toLocaleString()}</strong>
            </div>
            <div class="breakdown-item">
                <span>PAYE Tax</span>
                <strong>KSh ${paye.toLocaleString()}</strong>
            </div>
            <div class="breakdown-item" style="background: #e8f5e8; border-left-color: #28a745;">
                <span>NET SALARY</span>
                <strong style="color: #28a745; font-size: 1.3em;">KSh ${netSalary.toLocaleString()}</strong>
            </div>
        </div>
    `;
    resultDiv.className = 'result success';
    resultDiv.style.display = 'block';
}

// Clear input and result
function clearSalary() {
    document.getElementById('basicSalary').value = '';
    document.getElementById('benefits').value = '';
    document.getElementById('salaryResult').style.display = 'none';
}