import { Recipe } from '@/models/General';
import { validateFromAI } from '@/services/functions';
import React, { createContext, useState, useContext, ReactNode } from 'react';


type AppContextProps = {

};

const AppContext = createContext<AppContextProps | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    const prompt = ' retorne duas receitas dentro de um array em formato JSON limpo sem nenhum caractere de escape ou formatação adicional. As informações devem incluir o nome da receita, os ingredientes necessários e as instruções passo a passo. os indices em inglês.';

    React.useEffect(() => {
        async function fetchRecipes() {
            try {
                const res = await validateFromAI(prompt);
                const formated = res
                    .replace("json", "")
                    .replace("\n", "")
                    .replace(/```/g, "");
                setRecipes(JSON.parse(formated));
            } catch (err) {
                console.log(err);
            }
        }

        fetchRecipes();
    }, []); // ensure it runs only once on component mount

    console.log(recipes);

    return (
        <AppContext.Provider value={{ recipes }}>
            {children}
        </AppContext.Provider>
    );
}


export function useAppContext(): AppContextProps {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within a AppContext');
    }
    return context;
}
