import { create, createStore } from "zustand"
import GameManager from "../manager"

type TestType = {
    index : number,
}

type TypeStore = {
    player : TestType[]
    setPlayer : (value : TestType[]) => void
    state : "idle" | "notIdle",
    setState : (value : "idle" | "notIdle") => void
}

type TestStore = {
    cardInfomation : TypeStore,
    
}

const useGame = createStore<TestStore>((set, get) => ({
    cardInfomation: {
      player: [],
      setPlayer: (value) => {
        console.log("setPlayer");
        set((state) => ({
          cardInfomation: {
            ...state.cardInfomation, // 기존 cardInfomation 복사
            player: [...value], // player 업데이트
          },
        }));
      },
      state : "idle",
      setState: (value) => {
        console.log("setState");
        set((state) => ({
          cardInfomation: {
            ...state.cardInfomation,
            state: value, // player 업데이트
          },
        }));
        GameManager.turnChange();
      },
    },
  }));

export default useGame;
export type {TestType};