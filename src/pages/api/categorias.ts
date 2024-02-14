import { validateFromAI } from "@/services/functions";
import type { NextApiRequest, NextApiResponse } from "next";

type CategoriaData = {
  id: number;
  nome: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CategoriaData[]>
) {
  const categorias: CategoriaData[] = [
    { id: 1, nome: "Categoria 1" },
    { id: 2, nome: "Categoria 2" },
    { id: 3, nome: "Categoria 3" },
  ];

  try {
    const ai = await validateFromAI("gere receitas com titulo, descriçao e ingredientes. Categoria bolos. no formato json");
    const respostaFormatada = ai.replace('\n')

    console.log(respostaFormatada);
    res.status(200).json(ai);
  } catch (err) {
    console.error("Erro ao validar dados com AI:", err);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
}
