
module.exports.movesChecker = class movesChecker{
    constructor(count ){
        this.count = count;
    }

    checkWinnerText(i,j)
    {
        let d = (this.count+i-j)%this.count;
        let result = "";
        if(d==0)        
            result ="Draw";
        else if( d>(this.count-1)/2)
            result ="Win";
        else
            result ="Lose";
        return result;
    }
    checkWinner(i,j)
    {
        let d = (this.count+i-j)%this.count;
        let result = 0;
        if(d==0)        
            result =0;
        else if( d>(this.count-1)/2)
            result =1;
        else
            result =-1;
        return result;
    }

    

}