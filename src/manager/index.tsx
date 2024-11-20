import useGame, { TestType } from "../store";


class TurnClass{

    card : TestType[];

    constructor(){
        this.card = [];
    }

    updateMemory(){
        const gameStorage = useGame.getState();

       
        
        if(gameStorage.cardInfomation.player.length != this.card.length){
            const array = gameStorage.cardInfomation.player;
            this.card = array;
            array.push({index:Math.random()});

            console.log("체크");
        }
    }
}

const TurnClassObject = new TurnClass();

const GameManager = {
    clickEvent : () => {
      const gameStorage = useGame.getState();
      gameStorage.cardInfomation.setState(gameStorage.cardInfomation.state == "idle" ? "notIdle" : "idle");
      console.log(gameStorage);
    },
    turnChange : () => {
        TurnClassObject.updateMemory();

    }
}



export default GameManager;