//###################################################

// 1. Assign a type to the following variable: 

// let number: number = 100
// let firstName: string = 'Angela'
// let busy: boolean = true

//NOTE: Assigning a type here means that if you try to reassign 
// the variable as another type later on, a red squiggly woudl appear to indicate 
// and error. So you could not later say    number = "name"    as it
// would create an error.
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
// - It must compile to JS because browsers cannot execute TS
// - Writing code with TS types enables us to write cleaner code with fewer errors (as a considerable 
// number of errors come from mistakes surrounding types)
// - Eliminates the need to include  notes to fellow developers stating, for example, that a certain 
// function can only take strings.
// - Can be used for client side and server side (AKA frontend and backend)