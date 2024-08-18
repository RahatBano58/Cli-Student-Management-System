#!/usr/bin/env node

import inquirer from "inquirer";

const randonNumber: number = Math.floor(10000 + Math.random() *90000);
console.log(randonNumber);


let myBalance : number = 0;

let answer = await inquirer.prompt(
    [
        {
            name: "students",
            type: "input",
            message: "Enter name of student:",
            validate: function(value) {
                if (value.trim() !== "") {
                 return true;   
                }
                return "Please enter a non-empty value.";
            },
        },
        {
            name: "courses",
            type: "list",
            message: "Select the course  to enrolled",
            choices: ["MS.Office", "Web Development", "Typescript", "Javascript", "Python" ]
        }
    ]
);

const tutionFee: {[key: string]: number} = {
    "MS.Office": 3000,
    "Web Development": 15000,
    "Typescript": 6000,
    "Javascript": 5500,
    "Python": 10000
};

console.log(`\nTution Fee: ${tutionFee[answer.courses]}/-\n`);
console.log(`Balance: ${myBalance}\n`);

let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select payment method",
        choices: ["Bank Transfer", "Easypaisa", "Debit Card"]
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer Money:",
        validate: function(value) {
            if(value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value.";
        }
    }
])

console.log(`\nYou select payment method ${paymentType.payment}\n`);

const tutionFees = tutionFee[answer.courses]
const paymentAmount =parseFloat(paymentType.amount);

if(tutionFees === paymentAmount) {
    console.log(`Congratulations, you have successfully enrolled in ${answer.coursers}.\n`);
let ans = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "What would you like to do next?",
        choices: ["View Status", "Exit"]
    }
])
if (ans.select === "View Status"){
    console.log(`Student Name: ${answer.students}`);
    console.log(`Student ID: ${randonNumber}`);
    console.log(`Course: ${answer.courses}`);
    console.log(`Tution Fees Paid: ${paymentAmount}`);
    console.log(`Balance: ${myBalance += paymentAmount}`);   
} else {
    console.log("Exiting Student Management System");
    
}
}else {
    console.log("Invalid amount due to course fees.\n");
    
}