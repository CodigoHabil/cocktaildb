import { createContext } from 'react';

export const GlobalContext = createContext({
    cocktails: [],
    user: 'default',
    data:[],
    isLoading: false,
    search: {value: '', onChange: (e: any) => {}, type: 'text'},
    getCurrentCocktail: (id: string) => {},
    setCurrentPost: ({}) => {},
    currentPost: {},
});
