import { Clock } from "@styled-icons/fa-regular/Clock";
import { FireFlameCurved } from "@styled-icons/fa-solid/FireFlameCurved";
import { Fire } from '@styled-icons/heroicons-outline/Fire'
import * as S from './styles'
import { IconButton } from "@mui/material";
import { ArrowLeft } from "styled-icons/fa-solid";
import { useRouter } from "next/router";
import Tags from "@/components/Tags";
import React from "react";
import { getReceptById } from "@/services/functions";
import { RecipeProps } from "@/models/General";

const ReceptPage = () => {

    const { query, push } = useRouter()
    const [recipe, setRecipe] = React.useState<RecipeProps | null>()
    const { slug } = query


    React.useEffect(() => {
        async function fetchRecipe(): Promise<RecipeProps | null> {

            try {
                if (typeof (slug) === 'string') {
                    const res = await getReceptById(slug);

                    setRecipe(res);
                    return res
                } else {
                    return null
                }
            } catch (err) {
                console.log(err);
                return null
            }

        }

        fetchRecipe()
    }, [slug])

    const tags = recipe?.slugs.map(item => ({ id: recipe._id, name: item }))

    return (
        <S.ReceptContainer>
            <img className="img_cover" src={recipe?.image} />
            <IconButton
                onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    push('/')
                }}
                className="icon_btn">
                <ArrowLeft
                    color="#fefefe"
                    size={18} />
            </IconButton>

            <S.Header className="pd-16 mt-16">
                <p className="title">{recipe?.title}</p>
                <div className="info mt-8">
                    <div className="item">
                        <Clock size={14} />
                        <p>{recipe?.time}</p>
                    </div>
                    <div className="item">
                        <FireFlameCurved size={14} />
                        {/* <p>{recipe?.nivel}</p> */}
                        <p>Médio</p>
                    </div>
                </div>

            </S.Header>


            <S.Description className="ml-16">
                <p>{recipe?.about}</p>
            </S.Description>

            <S.Content className="pd-16 mt-16">
                <div className="ingredients">
                    <p className='title ml-16'>Ingredientes</p>
                    {
                        recipe?.ingredients.map(item => <p className="item">{item}</p>)
                    }
                </div>

                <div className="preparation mt-32">

                    <p className="title ml-16">Modo de preparo</p>


                    {recipe?.steps.map(item => (
                        <div className="step pd-8">
                            <p className="item">{item?.order}° </p>
                            <p>{item?.description}</p>
                        </div>
                    ))}

                </div>
                {
                    !!tags ? <Tags className="mt-16" tags={tags} /> :
                        null
                }

            </S.Content>
        </S.ReceptContainer>
    )
}

export default ReceptPage