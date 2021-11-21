import { useContext, createContext } from 'react';


export const ShelfsContext = createContext();

export function useShelfsContext() {
    return useContext(ShelfsContext);
}