import type { FC } from "react";

interface MoreToExploreCardProps {

    text: string;

}


const MoreToExploreCard: FC<MoreToExploreCardProps> = ({ text }) => {
    return (
        <div className="more-to-explore-card d-flex justify-content-between align-items-center py-3 px-4">
            <h5 className="text-danger m-0 p-0">{text}</h5>
            <span>&gt; </span>
        </div >
    )

}

const MoreToExplore: FC = () => {
    return (

        <div className="row g-3">
            <div className="col-12 col-md-4">
                <MoreToExploreCard  text="Esplora per genere"/>
            </div>
            <div className="col-12 col-md-4">
                <MoreToExploreCard  text="Esplora per genere"/>
            </div>
            <div className="col-12 col-md-4">
                <MoreToExploreCard  text="Esplora per genere"/>
            </div>

            <div className="col-12 col-md-4">
                <MoreToExploreCard  text="Esplora per genere"/>
            </div>
            <div className="col-12 col-md-4">
                <MoreToExploreCard  text="Esplora per genere"/>
            </div>
            <div className="col-12 col-md-4">
                <MoreToExploreCard  text="Esplora per genere"/>
            </div>

            <div className="col-12 col-md-4">
                <MoreToExploreCard  text="Esplora per genere"/>
            </div>
            <div className="col-12 col-md-4">
                <MoreToExploreCard  text="Esplora per genere"/>
            </div>
            <div className="col-12 col-md-4">
                <MoreToExploreCard  text="Esplora per genere"/>
            </div>
        </div>
    )

}
export default MoreToExplore