import useGame, { TestType } from "../store";


class TurnClass{

    card : TestType[];

    constructor(){
        this.card = [];
    }

    updateMemory(){
        const gameStorage = useGame.getState();

       
        
        if(gameStorage.cardInfomation.player.length == this.card.length){

            console.log("길이가 같아!");
            const array = gameStorage.cardInfomation.player;
           
            
        }else{

            const array = gameStorage.cardInfomation.player;
            this.card = array; 

            /* 분명 배열을 넣은 후에는 길이가 달라야합니다. setPlayer를 통해 [...]를 했기때문이죠. 하지만 딱히 잃지않았습니다... */
            console.log("길이가 달라!!");
            console.log(this.card);
            console.log(array);

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
    },
    setArray : () => {

        console.log("SET ARRAY");
        const gameStorage = useGame.getState();
        gameStorage.cardInfomation.player.push({index:Math.random()});
        gameStorage.cardInfomation.setPlayer( gameStorage.cardInfomation.player);

    }
}



export default GameManager;