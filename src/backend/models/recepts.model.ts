import { RecipeCategory, RecipeProps, Step } from "@/models/General";
import mongoose, { Schema } from "mongoose";
import db from "../config/mongodb";

// Definição do esquema para os passos da receita
const stepSchema = new Schema<Step>({
  order: Number,
  description: String,
});

// Definição do esquema para a categoria da receita
const categorySchema = new Schema<RecipeCategory>({
  id: Number,
  name: String,
});

// Função para conectar ao banco de dados MongoDB
async function data() {
  return await db();
}

data();

let ReceptDB:mongoose.Model<RecipeProps | any>
try {
  ReceptDB = mongoose.model("Recept");
} catch (error) {
  const receptSchema = new Schema<RecipeProps>({
    title: String,
    description: String,
    image: String,
    time: String,
    level: String,
    about: String,
    category: categorySchema,
    slugs: [String],
    ingredients: [String],
    steps: [stepSchema],
  });
  ReceptDB = mongoose.model("Recept", receptSchema);
}

export default ReceptDB;


// async function addData() {
//   try {
//     const recipe = new Recept({
//       title: "Brownie de Chocolate",
//       category: {
//         id: 7,
//         name: "Doces",
//       },
//       desc: "Estados Unidos",
//       image: "https://example.com/brownie_image.jpg",
//       time: "40 minutos",
//       nivel: "Fácil",
//       slugs: ["Sobremesa", "Chocolate", "Doce", "Brownie"],
//       about:
//         "O brownie de chocolate é uma sobremesa popular originária dos Estados Unidos, conhecida por sua textura macia por dentro e crocante por fora, com sabor intenso de chocolate.",
//       ingredients: [
//         "200g de chocolate meio amargo",
//         "150g de manteiga sem sal",
//         "200g de açúcar refinado",
//         "3 ovos",
//         "1 colher de chá de essência de baunilha",
//         "100g de farinha de trigo",
//         "50g de cacau em pó",
//         "1/2 colher de chá de sal",
//         "100g de nozes picadas (opcional)",
//       ],
//       steps: [
//         {
//           order: 1,
//           description:
//             "Preaqueça o forno a 180°C. Unte e enfarinhe uma forma quadrada.",
//         },
//         {
//           order: 2,
//           description:
//             "Em banho-maria, derreta o chocolate meio amargo e a manteiga, mexendo até ficar homogêneo. Retire do fogo e reserve.",
//         },
//         {
//           order: 3,
//           description:
//             "Em uma tigela grande, bata os ovos com o açúcar até obter uma mistura clara e fofa.",
//         },
//         {
//           order: 4,
//           description: "Adicione a essência de baunilha e misture.",
//         },
//         {
//           order: 5,
//           description:
//             "Incorpore delicadamente a mistura de chocolate derretido à mistura de ovos e açúcar.",
//         },
//         {
//           order: 6,
//           description:
//             "Peneire a farinha de trigo, o cacau em pó e o sal sobre a mistura de chocolate e misture até ficar homogêneo.",
//         },
//         {
//           order: 7,
//           description: "Se desejar, adicione as nozes picadas e misture.",
//         },
//         {
//           order: 8,
//           description:
//             "Despeje a massa na forma preparada e espalhe uniformemente.",
//         },
//         {
//           order: 9,
//           description:
//             "Asse no forno preaquecido por cerca de 25-30 minutos, ou até que um palito inserido no centro saia com algumas migalhas úmidas.",
//         },
//         {
//           order: 10,
//           description:
//             "Deixe esfriar completamente na forma antes de cortar em quadrados e servir.",
//         },
//       ],
//     });
//     await recipe.save();
//     console.log("Data added successfully");
//   } catch (error) {
//     console.log(error);
//   }
// }

// addData();
