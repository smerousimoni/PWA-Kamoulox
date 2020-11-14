import React, {Component} from 'react';
import {getQuestions} from '../fonctions/appelleApi';
import Question from './Question';
import Reponse from './Reponse'
import logo from '../icon-72x72.png'

class AppQuestion extends Component{
    constructor(props){
        super(props)
        this.state={
            listeQuestions:[],
            etape:null,
            reponseCorrect:false,
            reponseCliquer:false,
            score:0,
            nbBonus:0,
            nbReponseCorrect:0,
            streak:false
        }
    }

    componentDidMount() {
        this.initQuestions()
    }

    initQuestions = () => {
        getQuestions(50).then(data =>{
            this.setState(
                {
                    listeQuestions:data,
                    etape:0
                }
            )
        })
    }
    
    showNotification = (title, desc, img) => {
        if(window.Notification && window.Notification !== "denied"){ 
            Notification.requestPermission(perm => {
                if(perm === "granted"){
     
                    const options = {
                        body : desc,
                        icon : logo
                    }
         
                    var notif = new Notification(title, options);
                  
                }
                else{ 
                    console.log("Notification refusée");
                }
            })
        }
    }

    verifReponse = (indexReponse) => {
        const {listeQuestions, etape, reponseCliquer,score,streak,nbReponseCorrect} = this.state
        if(!reponseCliquer){
            if(indexReponse===listeQuestions[etape].indexBonneReponse){
                if(streak){
                    this.setState({
                        nbReponseCorrect:nbReponseCorrect+1
                    })
                }else{
                    this.setState({
                        nbReponseCorrect:nbReponseCorrect+1,
                        streak:true
                    })
                }
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
                if(this.state.nbReponseCorrect===10){
                    this.showNotification("LA CHATTE","Vous avez atteint 10 bonnes réponses à la suite !")
                }
                if(this.state.nbReponseCorrect===30){
                    this.showNotification("TU DEVRAIS APPELER TA FEMME POUR SAVOIR CE QU'ELLE FAIT","Vous avez atteint 30 bonnes réponses à la suite !")
                }
            }else{
                this.setState({
                    reponseCorrect:false,
                    reponseCliquer:true,
                    score:score-Math.floor(Math.random() * Math.floor(3)),
                    nbReponseCorrect:0,
                    streak:false
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
        document.getElementById(this.state.listeQuestions[this.state.etape].indexBonneReponse).style.backgroundColor="#36e54b";
    }

    maskFalseAns = () => {
        const {score, nbBonus, listeQuestions, etape} = this.state
        if (this.state.score >= 10 && this.state.nbBonus < 3){
            let reponse = document.getElementsByClassName("reponse");
            for(let i=0;i<reponse.length;i++){
                if (reponse[i].id != listeQuestions[etape].indexBonneReponse && reponse[i].style.opacity !=="0"){
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
        }else{
            if(this.state.score < 10 && this.state.nbBonus < 3){
                this.showNotification("Vous êtes pauvre","Vous n'avez que "+score+" points")
            }
            if(this.state.nbBonus >= 3){
                this.showNotification("Are you dumb ?","Tous vos bonus ont été utilisés")
            }
        }
    }

    render(){
        let {listeQuestions, etape, reponseCliquer, reponseCorrect, score} = this.state;
        if(listeQuestions.length>0){
            return (
                <div>
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
                        <button className="bouton" disabled={
                            reponseCliquer && listeQuestions.length >= etape
                            ? false : true
                        }
                        onClick={() => this.nextStep(etape)}>Suivant</button>
                        </>):(
                            <div>
                                <div className="titre">Quiz terminé</div>
                                <div className="texte">Merci !</div>
                                <button className="bouton" onClick={() => this.initQuestions()}>Nouveau Quiz</button>
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