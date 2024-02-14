import { Recept } from '@/models/General';
import * as S from './styles';
import pizzaImage from '../../assets/images/pizza.jpg';
import Image from 'next/image';


interface GridViewProps {
    recepts: Recept[];
    className?: string;
}

const GridView = ({ recepts, className }: GridViewProps) => {
    return (
        <S.GridViewContainer className={className}>
            {recepts.length && recepts.map(recept => (
                <div key={recept?.id}>
                    <S.GridItem key={recept?.id}>
                        <Image className='cover' src={pizzaImage} alt="Pizza" />
                    </S.GridItem>
                    <p className='name'>{recept?.name}</p>

                </div>
            ))}
        </S.GridViewContainer>
    );
}

export default GridView;
