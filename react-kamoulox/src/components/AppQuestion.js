import React, {Component} from 'react';
import {getQuestions} from '../fonctions/appelleApi';
import Question from './Question';
import Reponse from './Reponse'

class AppQuestion extends Component{
    constructor(props){
        super(props)
        this.state={
            listeQuestions:[],
            etape:null,
            reponseCorrect:false,
            reponseCliquer:false,
            score:0,
            nbBonus:0
        }
    }

    componentDidMount() {
        this.initQuestions()
    }

    initQuestions = () => {
        getQuestions(10).then(data =>{
            this.setState(
                {
                    listeQuestions:data,
                    etape:0
                }
            )
            console.log(this.state.listeQuestions)
        })
    }

    verifReponse = (indexReponse) => {
        const {listeQuestions, etape, reponseCliquer,score} = this.state
        if(!reponseCliquer){
            if(indexReponse===listeQuestions[etape].indexBonneReponse){
                if ( Math.floor(Math.random() * Math.floor(100) === 2)){
                    this.setState({
                        reponseCorrect:true,
                        reponseCliquer:true,
                        score:score+Math.floor(Math.random() * Math.floor(2000))
                    });
                }else{
                    this.setState({
                        reponseCorrect:true,
                        reponseCliquer:true,
                        score:score+Math.floor(Math.random() * Math.floor(20))
                    });
                }
            }else{
                this.setState({
                    reponseCorrect:false,
                    reponseCliquer:true,
                    score:score-Math.floor(Math.random() * Math.floor(3))
                })
            }
        }
        this.setGoodAns()
    }

    nextStep = (etape) => {
        this.setAllDef()
        this.setState({
            etape: etape + 1,
            reponseCorrect: null,
            reponseCliquer:false,
            nbBonus:0
        });
        console.log(this.state.listeQuestions.length)
        console.log(this.state.etape)
    }

    setAllDef = () => {
        let reponse = document.getElementsByClassName("reponse");
        for(let i=0;i<reponse.length;i++){
            reponse[i].style="";
        }
    }

    setGoodAns = () => {
        let reponse = document.getElementsByClassName("reponse");
        for(let i=0;i<reponse.length;i++){
            reponse[i].style.backgroundColor="#f74b4b";
        }
        console.log("Bonne réponse: "+this.state.listeQuestions[this.state.etape].indexBonneReponse)
        document.getElementById(this.state.listeQuestions[this.state.etape].indexBonneReponse).style.backgroundColor="#36e54b";
    }

    maskFalseAns = () => {
        const {score, nbBonus, listeQuestions, etape} = this.state
        if (this.state.score >= 10 && this.state.nbBonus < 3){
            let reponse = document.getElementsByClassName("reponse");
            for(let i=0;i<reponse.length;i++){
                if (reponse[i].id !== listeQuestions[etape].indexBonneReponse && reponse[i].style.opacity !=="0"){
                    reponse[i].style.opacity="0";
                    this.setState({
                        nbBonus:nbBonus+1               
                    })
                    break;
                }
            }
            this.setState({
                score:score-10                
            })
        }
    }

    render(){
        let {listeQuestions, etape, reponseCliquer, reponseCorrect, score} = this.state;
        if(listeQuestions.length>0){
            return (
                <div>
                    {console.log(etape)}
                    {console.log(listeQuestions.length)}
                    {etape < listeQuestions.length ?
                        (<>
                        <Question enonce={listeQuestions[etape].enonce}/>
                        <Reponse 
                            reponses={listeQuestions[etape].reponses}
                            etape={etape}
                            verifReponse={this.verifReponse}
                            reponseCorrect={reponseCorrect}
                            reponseCliquer={reponseCliquer}
                        />
                        <div id="score">Score : {score}</div>
                        <div id="bonus" onClick={() => this.maskFalseAns()}>Bonus ! (10Pts)</div>
                        <button id="bouton" disabled={
                            reponseCliquer && listeQuestions.length >= etape
                            ? false : true
                        }
                        onClick={() => this.nextStep(etape)}>Suivant</button>
                        </>):(
                            <div>
                                <h1>Quiz terminé</h1>
                                <p>Merci !</p>
                                <button onClick={() => this.initQuestions()}>Nouveau Quiz</button>
                            </div>
                        )
                    }
                </div>
            )
        }else{
            return (null)
        }
    }
}

export default AppQuestion