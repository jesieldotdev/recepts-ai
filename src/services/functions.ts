import { ApiBody, ApiResponse } from "@/models/General";
import dotenv from "dotenv";

dotenv.config();
const API_KEY = process.env.GOOGLE_STUDIO_AI_KEY || "";
const API_URL = process.env.GOOGLE_STUDIO_AI_URL || "";

export async function generateResponseFromAi(res: string): Promise<ApiResponse> {
  const data = {
    contents: [
      {
        parts: [
          {
            text: res,
          },
        ],
      },
    ],
  } as ApiBody;

  return fetch(`${API_URL}?key=${API_KEY}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (!response.ok) throw new Error("Erro na requisição");
    return response.json() as Promise<ApiResponse>;
  });
}

export async function getRecepts() {
  return fetch("/api/categorias")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao fazer a solicitação para a API");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Erro ao fazer a solicitação para a API:", error);
      return error;
    });
}

export async function validateFromAI(res: string): Promise<string> {
    try {
        const response = await generateResponseFromAi(res);
        
        if (response && response.candidates && response.candidates[0]) {
            const text = response.candidates[0].content.parts[0].text;
            console.log(text); // Log para depuração
            return text;
        } else {
            throw new Error('Resposta inválida da API de IA');
        }
    } catch (error) {
        console.error('Erro ao validar a partir da AI:', error);
        throw error; // Rejeitar a promessa com o erro para que possa ser tratado externamente
    }
}

