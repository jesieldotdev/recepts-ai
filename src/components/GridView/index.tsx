/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { Category, RecipeProps } from '@/models/General';
import * as S from './styles';
import pizzaImage from '../../assets/images/pizza.jpg';
import ButtonBase from '@mui/material/ButtonBase'; // Importe ButtonBase do Material-UI
import { useRouter } from "next/router"

interface GridViewProps {
    recepts: RecipeProps[];
    categories: Category[];
    className?: string;
    category: Category;
}

const GridView = ({ recepts, className, categories, category }: GridViewProps) => {
    const [imageLoaded, setImageLoaded] = useState<boolean>(true);

    const router = useRouter()

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    function receptsFromCategory(): RecipeProps[] {
        if (recepts && category) {
            const data = recepts.filter(item => item.category.id === 7);
            return data;
        }
        return [];
    }

console.log(receptsFromCategory())

    return (
        <S.GridViewContainer className={className}>
            {receptsFromCategory().map(recept => (
                <div key={recept?._id}>

                    <S.GridItem onClick={() => {
                        router.push(`recepts/${recept._id}`)
                    }}>
                        {imageLoaded && (
                            <div className="skeleton-wrapper">
                                <div className="skeleton-image" />
                            </div>
                        )}
                        <img
                            className={imageLoaded ? 'cover loaded' : 'cover'}
                            src={recept.image}
                            alt={recept.title}
                            onLoad={handleImageLoad}
                        />
                        {/* <div className='info'>
                            <p className='name'>{recept?.name}</p>
                            <p className='time'>45min</p>
                        </div> */}
                    </S.GridItem>



                </div>
            ))}
        </S.GridViewContainer>
    );
};

export default GridView;
/* eslint-enable @next/next/no-img-element */