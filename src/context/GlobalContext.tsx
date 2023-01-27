import { createContext } from 'react';

export const GlobalContext = createContext({
    cocktails: [],
    user: 'default',
    data:{},
    isLoading: false,
});
