import type { NextApiRequest, NextApiResponse } from "next";
import ReceptDB from "@/backend/models/recepts.model";
import { RecipeProps } from "@/models/General";

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
  res: NextApiResponse<RecipeProps[]>
) {
  const data = await getReceptsDb();
  res.status(200).json(data);
}
