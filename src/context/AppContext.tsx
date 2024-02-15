import { Recipe } from '@/models/General';
import { getRecepts, validateFromAI } from '@/services/functions';
import React, { createContext, useState, useContext, ReactNode } from 'react';


type AppContextProps = {
    recipes: Recipe[]
    setAiResponse: (s:any)=>void
    aiResponse: any
};

const AppContext = createContext<AppContextProps | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [aiResponse, setAiResponse] = useState<Recipe[]>([]);

    const prompt = ' retorne duas receitas dentro de um array em formato JSON limpo sem nenhum caractere de escape ou formatação adicional. As informações devem incluir o nome da receita, os ingredientes necessários e as instruções passo a passo. os indices em inglês.';


    // validateFromAI(prompt).then(res => {
    //     if(res){
    //         setAi(res)
    //     }
    //     console.log(res)
    // })

    // React.useEffect(() => {
    //     const interval = setInterval(async () => {
    //         try {
    //             const res = await validateFromAI(prompt);
    //             setAi(res);
    //             console.log(res);
    //         } catch (error) {
    //             console.error("Erro ao obter resposta do servidor:", error);
    //         }
    //     }, 5000); // Chama a função a cada 5 segundos
    
    //     return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
    // }, []);
    


 


    React.useEffect(() => {
        async function fetchRecipes() {
            try {
                const res = await getRecepts();

                setRecipes(res);
            } catch (err) {
                console.log(err);
            }
        }

        // validateFromAI(prompt).then(res => {
        //     console.log(res)
        // })
        fetchRecipes();
    }, []);

    // console.log(ai)
    

    return (
        <AppContext.Provider value={{ recipes, setAiResponse,aiResponse }}>
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
