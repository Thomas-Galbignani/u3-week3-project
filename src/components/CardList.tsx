import type { FC } from "react";
import type { CardProps } from "./Card"
import Card from "./Card";

interface CardListProps {
    cardList: CardProps[];
    title?: string;
}

const CardList: FC<CardListProps> = ({ cardList, title }) => {
    // =^.^= dicono che mettere i gattini nel codice aiuti a mantenere il codice più efficente, e a concentrarsi di più 
    return <>
        {title && <h5>{title} &gt;</h5>}
        <div className="d-flex song-cards-container">
            {cardList.map((cardDetails, index) => <div key={index}
                className="song-card-container">
                <div className="px-2">
                    <Card  {...cardDetails} />
                </div></div>)}
        </div>
    </>;
}
export default CardList; 