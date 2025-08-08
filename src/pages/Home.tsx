import { useEffect, useState, type FC } from "react";
import Hero from "../components/Hero";
import { type CardProps } from "../components/Card";
import CardList from "../components/CardList";
import type { SongsResponse } from "../models/songsResponse.model";
import { Spinner } from "react-bootstrap";
import MoreToExplore from "../components/MoreToExplore";

const cardsTest: CardProps[] = [{
    songName: 'Prólogo con Abuelo',
    explicit: true,
    imageUrl: 'images/2a.png'
}, {
    songName: 'The Wanderer',
    imageUrl: 'images/2b.png'
}, {
    songName: 'Michael Bublé & Carly Pearce',
    imageUrl: 'images/2c.png'
}, {
    songName: 'Stephan Moccio: The Zane lowe interview',
    imageUrl: 'images/2d.png'
}, {
    songName: 'Chart Spotlight: Julia Michaels',
    imageUrl: 'images/2e.png'
}];

const Home: FC = () => {
    const [ozzyData, setOzzyData] = useState<CardProps[]>([]);
    const [tenaciousData, setTenaciousData] = useState<CardProps[]>([]);

    const getCardListItems = (songsResponse: SongsResponse): CardProps[] => {
        return songsResponse.data
            .slice(0, 6)
            .map(data => {
                return {
                    songName: data.title,
                    artistName: data.artist.name,
                    imageUrl: data.album.cover_medium,
                    explicit: data.explicit_lyrics,
                }
            });
    }

    useEffect(() => {
        fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=ozzy osbourne')
            .then(response => response.json())
            .then((response: SongsResponse) => {
                setOzzyData(getCardListItems(response));
            })
            .catch()

        fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=Tenacious D')
            .then(response => response.json())
            .then((response: SongsResponse) => {
                setTenaciousData(getCardListItems(response));
            })
            .catch()
    }, []);

    return (
        <>
            <Hero />
            <CardList title="Nuovi episodi radio" cardList={cardsTest} />
            {!ozzyData.length ?
                <Spinner animation="border" variant="danger" /> :
                <CardList title="Nuove uscite" cardList={ozzyData} />}
            {!tenaciousData.length ?
                <Spinner animation="border" variant="danger" /> :
                <CardList cardList={tenaciousData} />}
                <MoreToExplore/>


        </>);
}
export default Home;