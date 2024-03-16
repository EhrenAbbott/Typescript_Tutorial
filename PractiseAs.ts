//###################################################

// 1. Assign a type to the following variable: 

// let number: number = 100
// let firstName: string = 'Angela'
// let busy: boolean = true

// NOTE: Assigning a type here means that if you try to reassign 
// the variable as another type later on, a red squiggly woudl appear to indicate 
// and error. So you could not later say    number = "name"    as it
// would create an error.
// - An important distinction between JS and TS is that the TS type number 
// applied to *BOTH* integers and floats (decimals).
//###################################################

// 2. What would you have to add to the const below in 
// order for it to work in the function?

// export const screen = document.querySelector('.screen')

// function addNumbers(a,b) {
//     screen.innerHTML = a + b     
// }

//NOTE: The const must be exported (even though it is only being used
// in the same file) bc it is being modified below. This is a *TS FEATURE*!
//###################################################

// 3. What do you have to add to the following input element
// in order for it to function properly?

// const secondInput = document.querySelector('#second-input') as HTMLInputElement


//NOTE: Here, if you used secondInput.value you would get an error saying "property 'value' 
// does not exist on type 'Element." Most elements don't actually have a value property,
// and all TS knows is that we used a query selector to pick an element, but it doesn't
// know exactly know which element it is bc TS doesn't look at our HTML 
// to see what the id 'second-input' is attached to. Bc of this, we have to 
// explicitly 'typecast' it with 'as HTMLInputElement', which means we are telling it 
// that this const will always refer to an HTML input element.
//###################################################

// 4. Given the following function that works as a calculator to 
// display two added numbers on the screen, assign the paramters the 
// correct type and make another modificaiton to resolve the resulting error.

// export const screen = document.querySelector('.screen')

// function addNumbers(a:number, b:number) {
//     screen.innerHTML = (a + b).toString()     
// }

//NOTE: Here we can assign a number type to the function parameters, 
// but an error will show saying that type 'number' is not assignable to
// type 'string'. This means that we have to change the sum of a and b
//so that it can be assigned to screen.innerHTML, which takes a string, 
// and we do that with the JS .toString()

//###################################################

// 5. Give the function and the event listener below, we get an error message 
// saying 'Argument of type 'string' is not assignable to parameter of type 'number' 
// How would we fix this?

// function addNumbers(a: number,b: number) {
//     screen.innerHTML = (a + b).toString()
// }

// button.addEventListener('click', () => 
//     addNumbers(parseInt(firstInput.value), parseInt(secondInput.value)))

//NOTE: Here the input is coming to us with the type of string, even 
// though it is a number. Bc we set the function parameters to only accept 
// numbers, we need to use parseInt() on the input number string in order 
// to change it into a type that the function will accept (keeping in mind
// that it will the be changed back into a string to work with screen.innerHTML)

//###################################################

// 6. Assign a type to a variable without a value. 
//    Why would you want to do this?

// let isOpen : boolean
// This could be used if we cant to create a variable that at the moment
// does not have a value but in the future will have a value that is subject to
// change, will always remaining a boolean (so it could fluctuate between true and false 
// but will never be a string, for example)

//###################################################

// 7. Take the following const and assign the object type to it, 
// and assign types to the values as well.

// const you: {
//     userName : string;
//     isReturning: boolean
// } = {
//    userName: 'Bobby',
//    isReturning: true,
// }

//NOTE: if you only assign the object type to the const, you will 
// get an error when trying to retrieve the values of any fo the keys; 
// this is because you need to specify the types of the keys
// before you can work with them (assumign the object has already been 
// assigned its type )
// - It is important to notice the difference in syntac between as JS object 
// and a TS object; the key/values end in a semicolon in TS, whereas in JS
// they end in a comma. 
// - It would be possible to set, for example, the userName type to 'Bobby',
// a specific string instead of a type, but this would mean that the value
// for that key would literally always have to be the string 'Bobby'

//###################################################


//!VOCAB!//

//Typescript: 
// - An open source language that is a superset of JS; it takes JS and adds 
// new features, so existing JS programs are also valid TS programs
// - Being open source is a huge benefit because it means there will be up to date 
// documentation, active debugging and development, and it is less likely to become
// deprecated (and therefore less likely to have to be removed from a program, 
// as it will continue to be supported and expanded upon)
// - TS types provide a sort of validation that code of a certain type is working correctly
// - Writing types in TS can be optional; TS type inference means that you don't have to 
//change your code until you want to. 
// - Primarily designed for the development for large apps, and it transcompiles to JS
// (therefore, TS is also a compiler, as it takes the code from a .ts file and compiles it to .js )
// - After TS compiles into JS, the TS features will still technically exist, but visually
// the code will look like it has reverted to plain JS.
// - It must compile to JS because browsers cannot execute TS
// - Writing code with TS types enables us to write cleaner code with fewer errors (as a considerable 
// number of errors come from mistakes surrounding types)
// - Eliminates the need to include  notes to fellow developers stating, for example, that a certain 
// function can only take strings.
// - Can be used for client side and server side (AKA frontend and backend)

// type inference: 
// - A feature that TS has that allows it to deduce which type you have 
// for a certain variable without having to explicitly state it; it does not always 
// not it (or always do it accurately), so that's why it can still 
// be good to explicitly state the type. You know that it has not 
// assigned a type when you hover over a variable and it displays the type as 'any'
