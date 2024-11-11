import { v7 } from 'uuid';
/**
 * UUID を v7 に変更
 * @returns UUID v7
 */
export const createUuid = () => {
    return v7();
}

export  const sample = () =>{
    return 'この関数はsample()です';
};