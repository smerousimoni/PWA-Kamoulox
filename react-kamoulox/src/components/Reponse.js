import React from 'react';

const Reponse = (props) => {
    let reponses
    
    reponses = props.reponses
        .map((reponse, i) => (
            <div className="reponse" id={i}
            onClick={() => {
                props.verifReponse(i)          
            }}
            key={reponse}>
                {reponse}
            </div>
        ));

    return (
        <>
            <div id="reponses">
                {reponses}
            </div>
            <div className="texte">
                {
                    props.reponseCorrect ? 'Bonne réponse !' : props.reponseCliquer ? 'Mauvaise réponse!' : ''
                }
            </div>
        </>
    );
}

export default Reponse;