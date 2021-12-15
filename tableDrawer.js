module.exports.tableDrawer = class tableDrawer{
    constructor (movesChecker){
        this._movesChecker = movesChecker;
    }

    getTurnsTable(moves)
    {
        let table = "Moves table. Vertical column is your move, horisontal - computer. Game result at the crossing\n";
        let longest = moves.reduce((a, b) => a.length >= b.length ? a : b).length;
        if(longest<4)
            longest = 4;
        let count = moves.length;
        table+=''.padEnd((longest+1)*(count+1),"-")+"\n";
        table+=' '.padStart(longest)+"|";

        for(let i = 0; i < count; i++)
            table+=moves[i].padStart(longest)+"|";
            table+='\n';
        for(let i = 0; i < count; i++)
        {
            table+=moves[i].padStart(longest)+"|";
            for(let j = 0; j < count; j++){
                let moveResult = this._movesChecker.checkWinner(i,j);

                if(moveResult == 0)
                    table+='Draw'.padStart(longest)+"|";
                else if(moveResult == 1)
                    table+='Win'.padStart(longest)+"|";
                else
                    table+='Lose'.padStart(longest)+"|";
            }
            table+="\n";
        }
        table+=''.padEnd((longest+1)*(count+1),"-")+"\n";
        return table;
    }


}