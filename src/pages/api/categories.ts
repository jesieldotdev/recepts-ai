import { Category, RecipeProps } from "@/models/General";
import type { NextApiRequest, NextApiResponse } from "next";
import { useAppContext } from "@/context/AppContext";
import ReceptDB from "@/backend/models/recepts.model";


const getReceptsDb = async (): Promise<RecipeProps[]> => {
  try {
    const data = await ReceptDB.find({});
    return data;
  } catch (error) {
    console.log(error);
    return []
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Category[]>
) {

  const data = await getReceptsDb();
console.log(data.map(item => (item._id)))

  const categories: Category[] = [
    {
      id: 1,
      name: "Tendências",
      recepts: data.map(item => (item._id)),
    },
    {
      id: 2,
      name: "Lanches",
      recepts: [],
    },
    {
      id: 3,
      name: "Bebidas",
      recepts: [],
    },
    {
      id: 4,
      name: "Legumes",
      recepts: [],
    },
    {
      id: 5,
      name: "Doces",
      recepts: [],
    },
    {
      id: 6,
      name: "Saudável",
      recepts: [],
    },
    {
      id: 7,
      name: "Internacional",
      recepts: [],
    },
    {
      id: 8,
      name: "Diversos",
      recepts: [],
    },
  ];


  res.status(200).json(categories);
}
