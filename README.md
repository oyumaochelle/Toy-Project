# Toy-Project
//first challenge: gradeGenator

# Student Grade Generator
This simple JavaScript script calculates and assigns grades based on user-inputted student marks. The grade scale is defined as follows:

A: Marks greater than 79
B: Marks between 60 and 79
C: Marks between 50 and 59
D: Marks between 40 and 49
E: Marks less than 40
Function
calculateGrade(mark)
This function takes a numerical input representing a student's mark and returns the corresponding grade based on the defined grade scale. It includes validation to ensure that the input is a number within the valid range of 0 to 100.

Usage
To use the script, call the calculateGrade function and pass the student's mark as an argument. The script will output the corresponding grade. If the input is invalid, it will display an error message.

javascript
Copy code
console.log(calculateGrade(85)); // Output: A
console.log(calculateGrade(68)); // Output: B
console.log(calculateGrade(53)); // Output: C
console.log(calculateGrade(45)); // Output: D
console.log(calculateGrade(30)); // Output: E
Note
Marks must be numerical values between 0 and 100.
The script is designed to handle invalid inputs gracefully, providing an error message.
Feel free to integrate this script into your projects or modify it according to your needs. If you have any questions or suggestions, please feel free to reach out. 

//second challenge: speedDetector
# Speed Detector
This JavaScript script serves as a speed detector, determining whether a vehicle is within the speed limit or if demerit points should be assigned based on exceeding the limit.

Function
speedDetector(speed)
This function takes the speed of a vehicle as an argument and evaluates whether it is within the speed limit. If the speed exceeds the limit, the function calculates demerit points and checks if they exceed the license suspension threshold.

Usage
To use the script, call the speedDetector function and pass the vehicle's speed as an argument. The script will output either "Ok" if the speed is within the limit or provide the demerit points if the speed exceeds the limit.

javascript
Copy code
console.log(speedDetector(60)); // Output: Ok
console.log(speedDetector(75)); // Output: Points: 1
console.log(speedDetector(90)); // Output: Points: 4
console.log(speedDetector(120)); // Output: License suspended
Note
The script assumes a default speed limit of 70.
Demerit points are calculated based on exceeding the speed limit, with one point assigned for every 5 km/h over the limit.
If demerit points exceed 12, the script indicates "License suspended."
The script is designed to handle invalid inputs gracefully.
Feel free to integrate this script into your projects or modify it according to your needs. If you have any questions or suggestions, please feel free to reach out. Safe driving!

//thirs challenge: net salary

# Net Salary Calculator

This is a simple JavaScript program that calculates the net salary based on the provided KRA tax rates, NHIF deductions, and NSSF rate.
Program Details
Constants
KRA Tax Rates:

Under Ksh. 24,000: 10%
Ksh. 24,001 - Ksh. 32,333: 25%
Ksh. 32,334 - Ksh. 500,000: 30%
Ksh. 500,001 - Ksh. 800,000: 32.5%
Above Ksh. 800,000: 35%
NHIF Deductions:

Various ranges with corresponding amounts
NSSF Rate: 6%
Program Logic
Calculate the gross salary (basic + benefits).
Determine the applicable KRA tax rate based on the gross salary.
Determine the applicable NHIF deduction based on the gross salary.
Calculate deductions:
KRA Tax
NHIF Deduction
NSSF Deduction
Calculate the net salary (gross - deductions).
