import { ApiBody, ApiResponse } from '@/models/General';

const API_KEY = process.env.GOOGLE_STUDIO_AI_KEY || '';
const API_URL = process.env.GOOGLE_STUDIO_AI_URL || '';

export function generateResponseFromAi(res: string): Promise<ApiResponse> {
    const data = {
        contents: [
            {
                parts: [
                    {
                        text: res
                    }
                ]
            }
        ]
    } as ApiBody;

    return fetch(`${API_URL}?key=${API_KEY}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then((response) => {
        if (!response.ok) throw new Error("Erro na requisição");
        return response.json() as Promise<ApiResponse>;
    });
}

export function getRecepts() {
    fetch("/api/categorias")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Erro ao fazer a solicitação para a API");
            }
            return response.json();
        })
        .then((data) => {
            console.log("Dados da API:", data);
            return data;
        })
        .catch((error) => {
            console.error("Erro ao fazer a solicitação para a API:", error);
            return error;
        });
}

export async function validateFromAI(res: string) {
    const word = res;
    console.log(word)
  
    return await generateResponseFromAi(word)
        .then((res: ApiResponse) => {
            const text = res.candidates[0].content.parts[0].text;
            console.log(text)
            return text;
        })
        .catch((err) => err);
}
