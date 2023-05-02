function rps (move) {

    let cpu = Math.floor(Math.random()*3);
    cpu = cpu == 0 ? "rock" :
        cpu == 1 ? "paper" :
        "scissors";

    if (move == undefined){
        return {player: cpu};
    }

    let user = move.toLowerCase();

    let choices = ['rock','paper','scissors'];

    if (!choices.includes(user)) {

        if (user === "lizard" || user === "spock") {
            //console.error(`${move} is out of range.`);
            //throw new RangeError(`${move} is out of range.`);

            console.error(user + " is out of range");
            console.log(`Rules for Rock Paper Scissors:
            - Scissors CUTS Paper
            - Paper COVERS Rock
            - Rock CRUSHES Scissors`);
        process.exit(0);

        } else {
            console.error(`${move} is not a valid choice.`);
            throw new RangeError();
        }
    }

    let endResult = '';

    if (cpu === user) {
		endResult = "tie";
	} else if (cpu === "scissors" && user === "paper" || cpu === "rock" && user === "scissors" || cpu === "paper" && user === "rock") {
		endResult = "lose";
	} else {
		endResult = "win";
	}
	
        return { player: user,
		opponent: cpu,
		result: endResult
	};
}


function rpsls (move) {

    let cpu = Math.floor(Math.random()*5);

    cpu = cpu == 0 ? "rock" :
    cpu == 1 ? "paper" :
    cpu == 2 ? "scissors" :
    cpu == 3 ? "lizard" :
    "spock";

    if (move == undefined){
        return{player: cpu};
    }

    let choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

    let user = move.toLowerCase();

    if(!choices.includes(user)){
        console.error(user + " is out of range");
        console.log(`Rules for the Lizard-Spock Expansion of Rock Paper Scissors:
            - Scissors CUTS Paper
            - Paper COVERS Rock
            - Rock SMOOSHES Lizard
            - Lizard POISONS Spock
            - Spock SMASHES Scissors
            - Scissors DECAPITATES Lizard
            - Lizard EATS Paper
            - Paper DISPROVES Spock
            - Spock VAPORIZES Rock
            - Rock CRUSHES Scissors`);
        process.exit(0);
    }

    let endResult = '';

	if (cpu === user) {
		endResult = "tie";
	} else if (cpu === "rock" && user === "scissors" || cpu === "paper" && user === "rock" || cpu === "scissors" && user === "paper") {
		endResult = "lose";
	} else if (cpu === "rock" && user === "lizard" || cpu === "lizard" && user === "spock" || cpu === "spock" && user === "rock") {
		endResult = "lose";
	} else if (cpu === "spock" && user === "scissors" || cpu === "scissors" && user === "lizard" || cpu === "paper" && user === "spock" || cpu === "lizard" && user === "paper") {
		endResult = "lose";
	} else {
		endResult = "win";
	}

	return { player: user,
		opponent: cpu,
		result: endResult
	};
}

export {rps,rpsls};