import { Recept } from "@/models/General";
import { validateFromAI } from "@/services/functions";
import type { NextApiRequest, NextApiResponse } from "next";

type CategoriaData = {
  id: number;
  nome: string;
};

const recepts: Recept[] = [
  {
      id: 1,
      name: 'Arroz',
      image_url: 'https://www.receitasnestle.com.br/sites/default/files/srh_recipes/7c44045d2e8577819cb76b2b404902dd.jpg'
  },
  {
      id: 2,
      name: 'Feijão',
      image_url: 'https://static1.minhavida.com.br/articles/1e/b3/62/cf/minha-vida-feijao-orig-1.jpg'
  },
  {
      id: 3,
      name: 'Macarrao',
      image_url: 'https://receitatodahora.com.br/wp-content/uploads/2021/09/como-fazer-macarrao-scaled.jpg'
  },
  {
      id: 4,
      name: 'Torta',
      image_url: 'https://www.receitasonline.com.br/wp-content/uploads/torta-de-frango-facil.jpg'
  },
  {
      id: 5,
      name: 'Bolo',
      image_url: 'https://p2.trrsf.com/image/fget/cf/800/450/middle/images.terra.com/2022/10/11/1965248167-bolo-simples-claro.jpg'
  },
  {
      id: 6,
      name: 'Chá',
      image_url: 'https://conteudo.imguol.com.br/c/entretenimento/21/2020/03/13/chas-e-infusao-1584138252891_v2_1254x836.jpg'
  },
]

const categorias: CategoriaData[] = [
  { id: 1, nome: "Categoria 1" },
  { id: 2, nome: "Categoria 2" },
  { id: 3, nome: "Categoria 3" },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CategoriaData[]>
) {
  res.status(200).json(recepts);
}
