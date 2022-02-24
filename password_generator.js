function generatepasswordword (minLength,numberOfNumber,numberOfSymbols)
{
        const configMax = 30
        //generate a random length between minlength and any maximum (30 in our case )
        let passwordwordLength = Math.floor(Math.random() * (configMax- minLength) + minLength);
        // checking the limits  
        if ((numberOfNumber+ numberOfSymbols)<= passwordwordLength  )                
        {
            const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            const num = "1234567890";
            const symbols = ",&!@#.-|$%^=*_£#%§";
            let arrayOfchoiceGroupionts = []; 

            //pushing the exact number of each group 
            for (let i = 0; i < numberOfNumber; i++) {
              arrayOfchoiceGroupionts.push(num);
            }
            
            for (let i = 0; i < numberOfSymbols; i++) {
              arrayOfchoiceGroupionts.push(symbols);
            }
			
            let numberOfLetter = passwordwordLength - (numberOfNumber + numberOfSymbols);
                        
            for (let i = 0; i < numberOfLetter; i++) {
              arrayOfchoiceGroupionts.push(letters);
            }
            let choiceGroup, choiceLetter;
            let password = "";
            //choose a random groupe and a random position to choose a character 
            for ( let i = 0; i < passwordwordLength; i++ )
                {
                  choiceGroup = Math.floor(Math.random() * arrayOfchoiceGroupionts.length);
                  choiceLetter = Math.floor(Math.random() * (arrayOfchoiceGroupionts[choiceGroup].length));
                  password = password + arrayOfchoiceGroupionts[choiceGroup][choiceLetter];

                 //to no have the same character again 
                  arrayOfchoiceGroupionts.splice(choiceGroup, 1); 
                }
			      return(password)
        }
}

//function to generate multiple passwords and return them in an array 
function generateMultiplepassword (numberOfpasswordword,minLength,numberOfNumber,numberOfSymbols) 
{
    let arrayOfpasswordword=[];
    let passwordword ="";
     for (let i=0;i<numberOfpasswordword; i++)
     {
        passwordword = generatepasswordword (minLength,numberOfNumber,numberOfSymbols) 
        arrayOfpasswordword.push(passwordword)
    }
    return (arrayOfpasswordword)
    
}
generateMultiplepassword(5,10,2,5)
console.log(generateMultiplepassword(5,10,2,5));

