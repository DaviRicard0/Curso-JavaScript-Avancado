/**
 * This function details about a person
 * and create an object for them
 * 
 * @param {string} name The person's full name
 * @param {number} age age The person's age
 * @param {boolean} isDeveloper isDeveloper Whether
 * @returns {Object} The person object
 */

const createPerson = (name, age, isDeveloper) => {
    return {
        name,
        age,
        isDeveloper
    }
} 

console.log(createPerson('Davi',18,true));