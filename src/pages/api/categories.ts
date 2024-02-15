import { Category, Recept } from "@/models/General";
import { validateFromAI } from "@/services/functions";
import type { NextApiRequest, NextApiResponse } from "next";

const categories: Category[] = [
  { 
    id: 0, 
    name: "Pratos",
    recepts: [1,2,3]
   },
  { 
    id: 1, 
    name: "Bebidas",
    recepts: [6]
  },
  { 
    id: 2, 
    name: "Bolos",
    recepts: [5,4]
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Category[]>
) {
  res.status(200).json(categories);
}
