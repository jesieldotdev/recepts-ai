import db from "@/backend/config/mongodb";
import { validateFromAI } from "@/services/functions";
import type { NextApiRequest, NextApiResponse } from "next";
import ReceptDB from "@/backend/models/recepts.model";
import { RecipeProps } from "@/models/General";
import { useRouter } from "next/router";
import mongoose from "mongoose";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RecipeProps[] | { message: string } | any>
) {
  try {
    const { recipeId }  = req.query
    if(typeof(recipeId) === 'string'){
      if (!mongoose.Types.ObjectId.isValid(recipeId)) {
        return res.status(400).json({ message: "Invalid recipeId" });
      }
      const recept = await ReceptDB.findById(recipeId);
      if (!recept) {
        return res.status(404).send({ message: "Recept not found" });
      } else {
        res.send(recept);
      }
    }
  
  } catch (error) {
    res.status(500).send(error);
  }
}
