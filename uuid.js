import { v4 } from 'uuid';
//uuid v4 の文字列を出力
export const createUuid = () => {
    return v4();
}

export  const sample = () =>{
    return 'この関数はsample()です';
};