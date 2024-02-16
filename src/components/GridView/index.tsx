import { useState } from 'react';
import { Category, Recept } from '@/models/General';
import * as S from './styles';
import pizzaImage from '../../assets/images/pizza.jpg';
import ButtonBase from '@mui/material/ButtonBase'; // Importe ButtonBase do Material-UI

interface GridViewProps {
    recepts: Recept[];
    categories: Category[];
    className?: string;
    category: Category;
}

const GridView = ({ recepts, className, categories, category }: GridViewProps) => {
    const [imageLoaded, setImageLoaded] = useState<boolean>(true);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    function receptsFromCategory() {
        if (recepts && category) {
            const data = recepts.filter(item => item.category.id === category.id);
            return data;
        }
        return [];
    }

    return (
        <S.GridViewContainer className={className}>
            {receptsFromCategory().map(recept => (
                <div key={recept?.id}>

                    <S.GridItem>
                        {imageLoaded && (
                            <div className="skeleton-wrapper">
                                <div className="skeleton-image" />
                            </div>
                        )}
                        <img
                            className={imageLoaded ? 'cover loaded' : 'cover'}
                            src={recept.image_url}
                            alt={recept.name}
                            onLoad={handleImageLoad}
                        />
                    </S.GridItem>
                    <p className='name'>{recept?.name}</p>

                </div>
            ))}
        </S.GridViewContainer>
    );
};

export default GridView;
