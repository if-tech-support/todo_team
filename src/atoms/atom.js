import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const inputState = atom({
    key: 'inputState', 
    default: 'test', 
    effects_UNSTABLE: [persistAtom]  
  }
  );