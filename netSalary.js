// Declare constants for different deduction rates
const KRA_TAX_RATES = {
    "Under Ksh. 24,000": 10,
    "Ksh. 24,001 - Ksh. 32,333": 25,
    "Ksh. 32,334 - Ksh. 500,000": 30,
    "Ksh. 500,001 - Ksh. 800,000": 32.5,
    "Above Ksh. 800,000": 35,
};

const NHIF_TAX = {
    "Under Ksh. 5,999": 150,
    "Ksh. 6,000 - Ksh. 7,999": 300,
    "Ksh. 8,000 - Ksh. 11,999": 400,
    "Ksh. 12,000 - Ksh. 14,999": 500,
    "Ksh. 15,000 - Ksh. 19,999": 600,
    "Ksh. 20,000 - Ksh. 24,999": 750,
    "Ksh. 25,000 - Ksh. 29,999": 850,
    "Ksh. 30,000 - Ksh. 34,999": 900,
    "Ksh. 35,000 - Ksh. 39,999": 950,
    "Ksh. 40,000 - Ksh. 44,999": 1000,
    "Ksh. 45,000 - Ksh. 49,999": 1100,
    "Ksh. 50,000 - Ksh. 59,999": 1200,
    "Ksh. 60,000 - Ksh. 69,999": 1300,
    "Ksh. 70,000 - Ksh. 79,999": 1400,
    "Ksh. 80,000 - Ksh. 89,999": 1500,
    "Ksh. 90,000 - Ksh. 99,999": 1600,
    "Above Ksh.100,000": 1700,
};

const NSSF_RATE = 6;

function calculateNetSalary(basicSalary, benefits) {
    // Calculate gross salary (basic + benefits)
    const grossSalary = basicSalary + benefits;

    // Determine applicable KRA tax rate based on gross salary
    let kraTaxRate = 0;
    for (const [range, rate] of Object.entries(KRA_TAX_RATES)) {
        const rangeParts = range.split(" - ");
        const upperLimit = parseInt(rangeParts.length > 1 ? rangeParts[1].replace(/\D/g, '') : rangeParts[0].replace(/\D/g, ''));
        if (grossSalary <= upperLimit || isNaN(upperLimit)) {
            kraTaxRate = rate;
            break;
        }
    }

    // Determine applicable NHIF deduction based on gross salary
    let nhifDeduction = 0;
    for (const [range, amount] of Object.entries(NHIF_TAX)) {
        const rangeParts = range.split(" - ");
        const upperLimit = parseInt(rangeParts.length > 1 ? rangeParts[1].replace(/\D/g, '') : rangeParts[0].replace(/\D/g, ''));
        if (grossSalary <= upperLimit || isNaN(upperLimit)) {
            nhifDeduction = amount;
            break;
        }
    }

    // Calculate deductions
    const kraTax = (grossSalary * kraTaxRate) / 100;
    const nssfDeduction = (grossSalary * NSSF_RATE) / 100;

    // Calculate net salary (gross - deductions)
    const netSalary = grossSalary - kraTax - nhifDeduction - nssfDeduction;

    // Return salary details
    return {
        grossSalary,
        kraTax,
        nhifDeduction,
        nssfDeduction,
        netSalary,
    };
}

const basicSalary = Number(prompt("Enter the basic salary:" ));
const benefits = Number(prompt("ENter the benefits:" ))
const salaryDetails = calculateNetSalary(basicSalary, benefits);
console.log("Gross Salary:", salaryDetails.grossSalary);
console.log("KRA Tax:", salaryDetails.kraTax);
console.log("NHIF Deduction:", salaryDetails.nhifDeduction);
console.log("NSSF Deduction:", salaryDetails.nssfDeduction);
console.log("Net Salary:", salaryDetails.netSalary);
