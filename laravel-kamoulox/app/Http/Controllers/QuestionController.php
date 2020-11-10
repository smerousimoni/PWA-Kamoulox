<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class QuestionController extends Controller
{
    public function getQuestions(Request $request, $nbQuestion){
    	$result = buildQuestion($nbQuestion);
    	return $result;
    }
}

define('VILLE',array('Ajaccio','Bastia','Borgo','Bastellica','Vizzavona','Vico','Venaco','Vivario','Peri','Tavera','Tasso','Biguglia','Porreta','Baleone','Lumio','Calvi','Ile Rousse','Ponte-Novu','Ponte-Leccia','Montegrosso','Zilia','Calenzana','Monticello','Lavatoggio', 'Paris','Marseille', 'Toulouse','Rennes','Nice','Lyon','Bordeaux','Strasbourg','Lille','Montpellier','Nantes','Grenoble','Dijon','Nîmes','Tours','Avignon','Le Havre','Reims','Annecy','Rouen','Metz','Angers','Saint-Etienne','Perpignan','Toulon','Caen'));

define('PRENOM',array('Adan','Adrien','Alain','Alex','Alexandre','Antoine','Antony','Bastien','Bilal','Brian','Brice','Benjamin','Ben','Charles','Carles','Cedric','Damien','David','Dave','Kevin','Quentin','Fabien','Francois','Fred','Frederic','Goerge','Gerard','Gauthier','Greg','Gregory','Gregoire','Jean','Kayl','Louis','Loris','Michel','Morgan','Mathieu','Mataé','Nicolas','Paul','Philippe','Pierre','Jacques','Quentin','Rachid','Amed','Hamed','Luke','Han','Ken','Shiryu','Luffy','Zoro','Sanji','Chopper','Gabriel','Seraphin','Raphael','Ralph','Stephane','Serguei','Tangui','Francisco','Daniel','Robin'));

define('NOM',array('Casanova','Mancini','Mecev','Luciani','Mariani','Michelozzi','Agostini','Martinez','Morazzani','Colonna','Mattei','Muntoni','Paoli','Mondoloni','Nicolas','Bartoli','Natalini','Paolini','Rossi','Orsini','Paris','Albertini','Orsoni','Peres','Filippi','Palazzo','Perez','Cesari','Serra','Pieri','Moreau','Antoniotti','Pietri','Poggi','Appietto','Platel','Angeli','Battesti','Popo','Carlotti','Bertrand','Renucci','Graziani','Costa','Rousier','Leca','Cucchi','Roussel','Marcaggi','Fancello','Santer','Nicolai','Maroselli','Santucci','Santoni','Micheli','Scarbonchi','Thomas','Michel','Simon','Cardi','Moracchini','Tamburini','Acquaviva','Ottavy','Tasso','Andreani','Peretti','Vincenti','Astolfi','Pinheiro','Werle','Castelli','Paoli','Angelini','Cipriani','Raffalli','Agnelot','Garcia','Sauli','Arrighi','Grimaldi','Serreri','Barbier','Guidoni','Torre','Bazzali','Lucchini','Martini','Belingard'));

define('MOT', array('ton cul', 'ta jambe', 'du goudron', 'un couvent', 'une dalle', 'un tambour', 'une abeille', 'une chaussure', 'une cigogne', 'une mite', 'un bar', 'un lieu', 'une aiguille', 'un marin','un camp', 'un aimant', 'un fouet', 'un bâtiment', 'un ananas', 'un touriste', 'un blessure', 'un trombone', 'un sage', 'une cabane', 'la paix', 'une spatule', 'un pied', 'une voiture', 'un politicien', 'un stormtrooper', 'un ordinateur', 'une moto', 'un chien', 'un chat', 'un poignard','un match','un poisson','un singe','une bière','le cyrnea','le bips','l\'enjoy','une attestation','un militaire','une maison','une ballerine','un thermomètre','un cheval','une pieuvre','un dauphin', 'une baleine','un prince','un film','un tuyau','une étoile','une lune','une chaise','une table','une classe','une salle','un projecteur','un rubik\'s cube','un chevalier', 'une princesse','un roi','une reine', 'une pizza', 'des pâtes','une route','un albinos','un paiement', 'un nombril','un cimetière','un mort','un apôtre','un musulman', 'un chrétien','un boudiste', 'un juif','un pâpe','un enfant', 'un adulte', 'une personne âgée', 'ta grand-mère', 'ton grand-père', 'ton frère', 'ta soeur', 'un immeuble', 'une arme', 'un bazooka', 'une mine', 'une grenade', 'une orange','une banane', 'une pomme', 'une clémentine', 'une chataîgne', 'un arbre','un buisson', 'une piscine', 'un puit', 'une rivière', 'un cadavre', 'une poire', 'un yaourt', 'un chinois', 'un américain', 'un français', 'un corse', 'un allemand', 'un africain', 'un russe', 'un anglais', 'un lion', 'un dauphin', 'une remorque', 'un arc', 'un bouclier', 'un violon', 'un canard', 'une oie', 'une poule', 'un renard', 'une vache', 'un mouton', 'une chèvre', 'un dindon', 'une mutation', 'un fantôme', 'un zombie'));

define('ADJECTIF',array('petit','grand', 'absolu', 'admirable', 'agréable', 'amusant', 'apocalyptique','attachant','banal', 'bavarois','bouleversant','captivant','caractériel','cataclysmique','catastrophique','céleste','charmant','chouette','commun','convenable','convivial','majestueux','magnifique','médiocre','merdique','merveilleux','mignon','minable','mortel','négligeable','nul','ordinaire','original','parfait','passable','passionnant','percutant','persévérant','phénoménal','placide','plaisant','coquet','correct','crédible','choquant','croquante','cynique','dégueulasse','délectable','disjoncté','divin','douce','doué','drôle',' éblouissant','ébouriffé','efficace','emballant','émouvant','endiablé','ennuyant','enragé','enthousiasmant','épatant','époustouflant','épouvantable','équitable','exaltant','prestant','prodigieux','proverbial','quelconque','ravissant','recyclé','relatif','remarquable','renversant','revendicatrice','révolutionnaire','rocambolesque','rutilant','saint','satisfaisant','séduisant','sexy','somptueux','spiritueux','splendide','suave','sublime','sulfureux','superbe','exceptionnel','excusable','exemplaire','féru','festif','flamboyant','formidable','grandiose','hardi','honnête','horrible','important','impressionanat','inconnu','incrédule','indépendant','infernal','innommable','insignifiant','insuffisant','insupportable','intenable','intéressant','libidineux','louable','suprême','supportable','talentueux','tolérable','tragique','trépidant','troublant','valable','valeureux','vénérable','vivable','vulgaire'));

define('ADVERBE',array('avec','sur','dans','près de', 'loin de','devant','en bas de','en face de', 'en haut de'));



function buildQuestion($nbr , $array_ville=VILLE,$array_prenom=PRENOM,$array_nom=NOM,$array_mot=MOT,$array_adj=ADJECTIF, $array_adv=ADVERBE){
	$questions = array();
	for($i=0; $i<$nbr;$i++){
		$r = rand(0,1);
		$question = new Question();
		$enonce = "";
		$reponses=array();
		$bonneReponse=rand(0,3);
		if($r==0){
			$enonce = "Où peut-on trouver ";
			$r = rand(0,1);
			if($r==0){
				$prenom = rand(0,count($array_prenom)-1);
		        $prenom = $array_prenom[$prenom];
				$nom = rand(0,count($array_nom)-1);
		        $nom = $array_nom[$nom];
		        $enonce.=$prenom." ".$nom."?";
		        for($j=0;$j<4;$j++){
		        	$reponse="à ";
		        	$ville = rand(0,count($array_ville)-1);
			        $ville = $array_ville[$ville];
			        $adv = rand(0,count($array_adv)-1);
			        $adv = $array_adv[$adv];
			        $reponse.=$ville." ".$adv." ";
					$r = rand(0,3);
					if($r==0){
						$prenom = rand(0,count($array_prenom)-1);
				        $prenom = $array_prenom[$prenom];
						$nom = rand(0,count($array_nom)-1);
				        $nom = $array_nom[$nom];
						$reponse.=$prenom." ".$nom;
					}else{
						$mot = rand(0,count($array_mot)-1);
				        $mot = $array_mot[$mot];
						$adj = rand(0,count($array_adj)-1);
				        $adj = $array_adj[$adj];
				        $reponse.=$mot." ".$adj;
					}
					array_push($reponses, $reponse);
		        }
			}else{
				$mot = rand(0,count($array_mot)-1);
		        $mot = $array_mot[$mot];
				$adj = rand(0,count($array_adj)-1);
		        $adj = $array_adj[$adj];
		        $enonce.=$mot." ".$adj."?";	
		        for($j=0;$j<4;$j++){
		        	$reponse="à ";
		        	$ville = rand(0,count($array_ville)-1);
			        $ville = $array_ville[$ville];
			        $adv = rand(0,count($array_adv)-1);
			        $adv = $array_adv[$adv];
			        $reponse.=$ville." ".$adv." ";
					$r = rand(0,3);
					if($r==0){
						$prenom = rand(0,count($array_prenom)-1);
				        $prenom = $array_prenom[$prenom];
						$nom = rand(0,count($array_nom)-1);
				        $nom = $array_nom[$nom];
						$reponse.=$prenom." ".$nom;
					}else{
						$mot = rand(0,count($array_mot)-1);
				        $mot = $array_mot[$mot];
						$adj = rand(0,count($array_adj)-1);
				        $adj = $array_adj[$adj];
				        $reponse.=$mot." ".$adj;
					}
					array_push($reponses, $reponse);
		        }			
			}
		}else{
			$enonce = "Qu'est-ce qui est ";
			$adv = rand(0,count($array_adv)-1);
			$adv = $array_adv[$adv];
			$r = rand(0,1);
			if($r==0){
				$prenom = rand(0,count($array_prenom)-1);
		        $prenom = $array_prenom[$prenom];
				$nom = rand(0,count($array_nom)-1);
		        $nom = $array_nom[$nom];
		        $enonce.=$adv." ".$prenom." ".$nom."?";
		        for($j=0;$j<4;$j++){
		        	$reponse="";
					$r = rand(0,3);
					if($r==0){
						$prenom = rand(0,count($array_prenom)-1);
				        $prenom = $array_prenom[$prenom];
						$nom = rand(0,count($array_nom)-1);
				        $nom = $array_nom[$nom];
						$reponse.=$prenom." ".$nom." et ";
					}else{
						$mot = rand(0,count($array_mot)-1);
				        $mot = $array_mot[$mot];
						$adj = rand(0,count($array_adj)-1);
				        $adj = $array_adj[$adj];
				        $reponse.=$mot." ".$adj." et ";
					}
					$r = rand(0,3);
					if($r==0){
						$prenom = rand(0,count($array_prenom)-1);
				        $prenom = $array_prenom[$prenom];
						$nom = rand(0,count($array_nom)-1);
				        $nom = $array_nom[$nom];
						$reponse.=$prenom." ".$nom;
					}else{
						$mot = rand(0,count($array_mot)-1);
				        $mot = $array_mot[$mot];
						$adj = rand(0,count($array_adj)-1);
				        $adj = $array_adj[$adj];
				        $reponse.=$mot." ".$adj;
					}
					array_push($reponses, $reponse);
		        }
			}else{
				$mot = rand(0,count($array_mot)-1);
		        $mot = $array_mot[$mot];
				$adj = rand(0,count($array_adj)-1);
		        $adj = $array_adj[$adj];
		        $enonce.=$adv." ".$mot." ".$adj."?";	
		        for($j=0;$j<4;$j++){
		        	$reponse="";
					$r = rand(0,3);
					if($r==0){
						$prenom = rand(0,count($array_prenom)-1);
				        $prenom = $array_prenom[$prenom];
						$nom = rand(0,count($array_nom)-1);
				        $nom = $array_nom[$nom];
						$reponse.=$prenom." ".$nom." et ";
					}else{
						$mot = rand(0,count($array_mot)-1);
				        $mot = $array_mot[$mot];
						$adj = rand(0,count($array_adj)-1);
				        $adj = $array_adj[$adj];
				        $reponse.=$mot." ".$adj." et ";
					}
					$r = rand(0,3);
					if($r==0){
						$prenom = rand(0,count($array_prenom)-1);
				        $prenom = $array_prenom[$prenom];
						$nom = rand(0,count($array_nom)-1);
				        $nom = $array_nom[$nom];
						$reponse.=$prenom." ".$nom;
					}else{
						$mot = rand(0,count($array_mot)-1);
				        $mot = $array_mot[$mot];
						$adj = rand(0,count($array_adj)-1);
				        $adj = $array_adj[$adj];
				        $reponse.=$mot." ".$adj;
					}
					array_push($reponses, $reponse);
		        }			
			}
		}
		$question->enonce=$enonce;
		$question->indexBonneReponse=$bonneReponse;
		$question->reponses=$reponses;
		array_push($questions, $question);
	}
	return $questions;
}

class Question{
	public $enonce;
	public $reponses;
	public $indexBonneReponse;
}