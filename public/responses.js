function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "Hello"){
        return "Hello there!";
    } else if (input == "Bye") {
        return "Thank you";
    } 
    else if(input=="Police station"){
        return "Adayar Police Station: 044-252627";
    }
    else if(input=="Hospital"){
            return "Apollo Hospital:044-255774";
        }
        else if(input=="Report"){
            return " Enter your complaint";
        }
        else if(input=="Taxi"){
            return " Red Taxi: 987654321";
        }

          else if(input=="Eveteasing ")
            {
                return "Your complaint has succesfully sent to the respective police station.For more details contact:044-252627";
                 }    
        
}