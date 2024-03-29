//###################################################

// 1. Assign a type to the following variables: 

// let number = 100
// let firstName = 'Angela'
// let busy = true

//###################################################

// 2. What would you have to add to the const below in 
// order for it to work in the function?

// const screen = document.querySelector('.screen')

// function addNumbers(a,b) {
//     screen.innerHTML = a + b     
// }

//###################################################

// 3. What do you have to add to the following input element
// in order for it to function properly?

// const secondInput = document.querySelector('#second-input')

//###################################################

// 4. Given the following function that works as a calculator to 
// display two added numbers on the screen, assign the paramters the 
// correct type and make another modificaiton to resolve the resulting error.

// export const screen = document.querySelector('.screen')

// function addNumbers(a,b) {
//     screen.innerHTML = a + b     
// }

//###################################################

// 5. Give the function and the event listener below, we get an error message 
// saying 'Argument of type 'string' is not assignable to parameter of type 'number' 
// How would we fix this?

// function addNumbers(a: number,b: number) {
//     screen.innerHTML = (a + b).toString()
// }

// button.addEventListener('click', () => addNumbers(firstInput.value, secondInput.value))

//###################################################

// 6. Assign a type to a variable without a value. 
//    Why would you want to do this?

//###################################################

// 7. Take the following const and assign the object type to it, 
// and assign types to the values as well.

// const you = {
//     userName: 'Bobby',
//     isReturning: true,
//  }

//###################################################

//8. In the following object where the last key takes
// and array, assigned it the correct TS type.

// const you: {
//     firstName: string;
//     lastName: string;
//     isReturning: boolean;
//     age: number;
// } = {
//     firstName: 'Bobby',
//     lastName: 'Brown',
//     isReturning: true,
//     age: 35,
//     stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
// }

//###################################################

//9. Assign the correct types to the following (including 
// any nested variables):

const reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]

//###################################################
