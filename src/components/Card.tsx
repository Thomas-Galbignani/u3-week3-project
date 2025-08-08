import type { FC } from "react";


export interface CardProps {
    songName: string;
    artistName?: string;
    imageUrl: string;
    explicit?: boolean;
}

const Card: FC<CardProps> = ({
    songName, artistName, imageUrl, explicit = false
}) => {
    return <>
        <div>
            <img className="w-100" src={imageUrl} alt="" />
            <div className="d-flex justify-content-between text-wrap">
                <p className="mb-0">{songName}</p>
                {explicit && <i className="bi bi-explicit-fill"></i>}

            </div>
            {artistName && <p className="text-wrap mt-0">
                {artistName}
            </p>}
        </div>
    </>
}
export default Card;