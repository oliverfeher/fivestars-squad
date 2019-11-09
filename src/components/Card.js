import React from 'react';

const Card = (props) => {
    return (
        <div className="bg-yellow tc dib br3 pa3 ma2 grow b--white ba bw2 shadow-5">
            <img alt="robots" src={`https://www.robohash.org/set_set5/${props.id}?size=200x200`} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;