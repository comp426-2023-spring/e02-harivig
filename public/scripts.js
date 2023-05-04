// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

var opponent = false;
let choices = ["rock", "paper", "scissors", "lizard", "spock"];
var rps = true;
var move = "rock";
var rps_endpoint = "/app/rps/play/";
var rpsls_endpoint = "/app/rpsls/play/";
 
function playgamefromrpsorrpsls(index) {
    move = choices[index];
}

function firstsubmit() {
    if (opponent) {
        
        document.getElementById("opponent-and-game").hidden = true;
        document.getElementById("rps-input").hidden = false;
        if (rps) {
            document.getElementById("lizard-label").hidden = true;
            document.getElementById("spock-label").hidden = true;
            document.getElementById("lizard").hidden = true;
            document.getElementById("spock").hidden = true;    
        }
        

    } else { 
        if (rps) {
            console.log("test");
            var random_move = Math.floor(Math.random() * 3);
            random_move = choices[random_move];
            var api_call = rps_endpoint + random_move;
            console.log(api_call);
            fetch(api_call).then(response => response.json()).then(data => {
                document.getElementById("results").innerText = JSON.stringify(data);
                document.getElementById("opponent-and-game").hidden = true;
                document.getElementById("results").hidden = false;
            });
        } else {
            
            var random_move = Math.floor(Math.random() * 5);
            random_move = choices[random_move];
            var api_call = rpsls_endpoint + random_move;
            fetch(api_call).then(response => response.json()).then(data => {
                document.getElementById("results").innerText = JSON.stringify(data);
                document.getElementById("opponent-and-game").hidden = true;
                document.getElementById("results").hidden = false;
            });
        }       
    }
}


function secondsubmit() {
    document.getElementById("lizard-label").hidden = false;
    document.getElementById("spock-label").hidden = false;
    document.getElementById("lizard").hidden = false;
    document.getElementById("spock").hidden = false;
    document.getElementById("rps-input").hidden = true;

    if (rps) {
        var api_call = rps_endpoint + move;
        fetch(api_call).then(response => response.json()).then(data => {
            document.getElementById("results").innerText = JSON.stringify(data);
            document.getElementById("opponent-and-game").hidden = true;
            document.getElementById("results").hidden = false;
        });
    } else {
        var api_call = rpsls_endpoint + move;
        fetch(api_call).then(response => response.json()).then(data => {
            document.getElementById("results").innerText = JSON.stringify(data);
            document.getElementById("opponent-and-game").hidden = true;
            document.getElementById("results").hidden = false;
        });
    }  
}



function playingrps() {
    rps = true;
}

function playingrpsls() {
    rps = false;
}


function playingopponent() {
    opponent = !opponent;
}


function viewrules() {
    document.getElementById("rules").innerText =
    `Rules for Rock Paper Scissors:
    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock CRUSHES Scissors
    
    Rules for the Lizard-Spock Expansion of Rock Paper Scissors:
    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock SMOOSHES Lizard
    - Lizard POISONS Spock
    - Spock SMASHES Scissors
    - Scissors DECAPITATES Lizard
    - Lizard EATS Paper
    - Paper DISPROVES Spock
    - Spock VAPORIZES Rock
    - Rock CRUSHES Scissors`;
    document.getElementById("rules-button").hidden = true;
    document.getElementById("rules").hidden = false;
    document.getElementById("hide-rules-button").hidden = false;
}

function hiderules() {
    
    document.getElementById("rules").hidden = true;
    document.getElementById("hide-rules-button").hidden = true;
    document.getElementById("rules-button").hidden = false;
}

function startOver() {
    rps = true;
    opponent = false;
    move = "rock";
    document.getElementById("rules-form").reset();
    document.getElementById("results").innerHTML = "";
    document.getElementById("rps-input").reset();
    document.getElementById("opponent-and-game").reset();
    document.getElementById("results").hidden = true;
    document.getElementById("rps-input").hidden = true;
    document.getElementById("opponent-and-game").hidden = false;
}