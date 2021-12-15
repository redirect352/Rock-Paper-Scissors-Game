//const fs = require('fs');
//const {SHA3} = require('sha3');
//const hash = new SHA3(256);
const rl = require('readline-sync');
const movesCheck = require('./movesChecker');
const keyGen = require("./keyGenerator");
const hmacGen = require("./HMACGenerator");
const tableDraw = require("./tableDrawer");

function PrintMenu(moves)
{
    for(let i=0;i<moves.length;i++)
    {
        console.log((i+1)+" - " + moves[i]);

    }
    console.log("? - help");
    console.log((0)+" - Exit");
}
function CheckInput(argv)
{
    if(argv.length < 5 )
    {
        console.log("Error! Argumets count must be greater than 2.");
        return false;
    }else if(argv.length % 2 ==0 )
    {
        console.log("Error! Programm accepts odd number of arguments.");
        return false;
    }
    else{
        let correctInput = true;
        for(let i =2;i<argv.length;i++)
        {
            let buf = argv[i];
            argv[i] = "";
        
            if(argv.includes(buf,2))
            {    
                correctInput = false;
                break;
            }
            argv[i]=buf;
        }
        return correctInput;
    }
}


if(CheckInput(process.argv))
{
    let moves = process.argv.slice(2);
    var checker = new movesCheck.movesChecker(moves.length), 
        keyGenerator = new keyGen.KeyGenerator(),
        hmacGenerator = new hmacGen.hmac(),
        drawer = new tableDraw.tableDrawer(checker);
    
    
    let exit = false;
    while(!exit)
    {
        let comp = Math.floor(Math.random()*moves.length+1);
        const key = keyGenerator.GenerateKeyForHMAC(256);
        var hmac = hmacGenerator.GenerateHMAC(key, moves[comp-1]);
        
        console.log("\nNew game started");
        console.log("Hmac: "+hmac);
        console.log("Availible Options: ");

        while(!exit)
        {
            PrintMenu(moves);
            var r = rl.question(">>");;
            if(r>0 && r<=moves.length)
            {
                console.log(moves.length);
                console.log("Your turn: " +moves[r-1]);
                console.log("Computer turn: " +moves[ comp-1]);
                console.log(checker.checkWinnerText(r-1,comp-1));
                console.log("Key: "+key);
                break;
            }else if(r=="?")
            {
                console.log(drawer.getTurnsTable(moves));
            }if(r == "0")
                exit = true;
        }
    }

}

