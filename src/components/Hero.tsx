import type { FC } from "react";
import { Figure } from "react-bootstrap";

interface HeroCardProps {
    title: string;
    imageUrl: string;
}
const HeroCard: FC<HeroCardProps> = ({ title, imageUrl }) => {
    return <>

        <Figure className="px-2">
            <p className="">NUOVA STAZIONE RADIO</p>
            <Figure.Caption>
                {title}
            </Figure.Caption>
            <Figure.Image
                width={'100%'}
                alt=""
                src={imageUrl}
            />
        </Figure>

    </>
}

const Hero: FC = () => {
    return (
        <>

            <h1>Novità</h1>
            <div className="d-flex hero-banner-container">
                <div className="hero-banner-card-container">

                    <HeroCard title="Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill" imageUrl="images/1a.png" />
                </div>
                <div className="hero-banner-card-container">
                    <HeroCard title="Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill" imageUrl="images/1b.png" />
                </div></div>
        </>)
}

export default Hero;