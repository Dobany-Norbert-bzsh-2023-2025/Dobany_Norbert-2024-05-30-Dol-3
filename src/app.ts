/*
* File: app.ts
* Author: Dobány Norbert
* Copyright: 2024, Dobány Norbert
* Group: Szoft I-1-N
* Date: 2024-05-30
* Github: https://github.com/notdefinitelynot/
* Licenc: GNU GPL
*/

class Ellipsoid
{
    aInput?:HTMLInputElement|null;
    bInput?:HTMLInputElement|null;
    cInput?:HTMLInputElement|null;
    volumeInput?:HTMLInputElement|null;
    calcButton?:HTMLButtonElement|null;

    

    constructor()
    {
        this.bindHTML();
        this.handleEvent();
    }

    bindHTML()
    {
        this.aInput=document.querySelector("#a");
        this.bInput=document.querySelector("#b");
        this.cInput=document.querySelector("#c");
        this.volumeInput=document.querySelector("#volume");
        this.calcButton=document.querySelector("#calcBtn");
    }

    handleEvent()
    {
        this.calcButton?.addEventListener("click",()=>{this.startCalc()});
    }

    startCalc()
    {
        var a = Number(this.aInput?.value);
        var b = Number(this.bInput?.value);
        var c = Number(this.cInput?.value);
        var volume = Number((this.volumeCalc(a,b,c)).toFixed(3));
        this.renderResult(volume);
    }

    volumeCalc(a:number,b:number,c:number) : number
    {
        return (4/3)*Math.PI*a*b*c;
    }


    renderResult(volume:number)
    {
        if(this.volumeInput)
            {
                this.volumeInput.value=String(volume)
            }
    }
}

new Ellipsoid();