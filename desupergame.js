alert("Jij bent een  negotiator. Een man wilt een klein meisje vermoorden en jij moet dat stoppen.  (Je kan alleen met ja en nee antwoorden)")



var Eerste = prompt ('Wil je de de hostage taker vragen wat zn naam is?')


//vragen
	var vraag
	var gewonnen = 1

if(Eerste == "ja"){

vraag = 1

}else if (Eerste == "nee"){

vraag = 5
}

else {

	alert("Je moet alleen ja of nee schrijven, Niks met caps ofzoiets. Jezus man")

	location.reload();
}

						//je hebt de naam gevragen


if(vraag == 1){

alert("Hij vertelt zijn naam niet.")
var vraag1 = prompt('Wil je aan hem vragen of hij een wapen heeft?')

}

if (vraag1 == "ja"){

alert("Hij vertelt jouw dat hij geen wapen heeft.")
vraag = 2

}
else if (vraag1 == "nee"){
vraag = 2
}



						//Je hebt gevraagd of hij een wapen heeft 


if(vraag == 2){


var vraag2 = prompt('Wil je hem vertellen over het sniperteam die hem in de gaten houd?')

}

if (vraag2 == "ja"){

alert("De man freaked hem totaal en schiet het meisje en daarna zichzelf door het hoofd. GAME OVER")

}
else if(vraag2 =="nee"){

	vraag = 3
}


///////////////////////////////////////////////////////////////////////////////////////////


if(vraag == 5){


var vraag5 = prompt('Zou je de hostage nemer vragen of hij een wapen bij zicht heeft?')

}

if (vraag5 == "ja"){

alert("Hij zegt dat hij een pistool in zijn binnenzak heeft en dat je niet dichterbij moet komen!")
vraag = 6

}
else if(vraag5 =="nee"){

	vraag = 7
}

						//Je hebt gevraagd of hij een pistol bij zich had


if(vraag == 6){


var vraag6 = prompt('Zal je hem vragen of hij zijn wapen op de grond kan laten vallen?')

}

if (vraag6 == "ja"){

alert("De man freaked hem helemaal! Hij schreeuwed dat hij deze technieken eerder in films heeft gezien. Hij pakt het pistol en schiet eerst het meisje en daarna hemzelf door zn kop! GAME OVER")

}
else if(vraag6 =="nee"){
alert("De hostage taker begint jouw een beetje te vertrouwen")
	vraag = 3
}

		
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

						//je hebt gevraagd over het sniper team


if(vraag == 3){


var vraag3 = prompt('zal je vragen aan de hostage taker wie de hostage is?')

}

if (vraag3 == "ja"){
alert("Hij vertelt dat het zijn dochter is.")
vraag = 4

}
else if(vraag3 =="nee"){

alert("Het duurt allemaal te lang voor de hostage nemer, Teveel vragen en geen vooruitgang! Hij pakt een pistol uit zn binnenzak en schiet het meisje en daarna zichzelf door het hoofd. GAME OVER")
}

						//Je hebt gevraagd wie de hostage was


if(vraag == 4){


var vraag4 = prompt('Wil je vragen aan hem waarom hij dit allemaal doet?')

}

if (vraag4 == "ja"){

alert("De man begint opeens te huilen. Hij weet het zelf ook allemaal niet meer. Opeens pakt hij een pistol uit zijn zak en shiet het meisje dood. Net voordat hij zichelf wilde vermoorden schiet het sniper team hem dood. GAME OVER")

}
else if(vraag4 =="nee"){

	vraag = 9
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////



						//Nu vanaf vraag 7


if(vraag == 7){


var vraag7 = prompt('Zal je hem vragen of je dichterbij mag komen?')

}

if (vraag7 == "ja"){

alert("Opeen komt er een Gorilla uit de bosjes gesprongen! Hij pakt het hoofd van het meisje vast en rukt deze van het kleine lijfje af. Daarna maakt hij die man dood. GAME OVER")

}
else if(vraag7 =="nee"){

	vraag = 8
}

						//je had gevraagd of je dichterbij mocht komen


if(vraag == 8){


var vraag8 = prompt('Zou je hem vertellen over een zielig verhaal over de scheiding tussen de jouw ouders zodat de hostage taker jouw meer gaat vertrouwen?')

}

if (vraag8 == "ja"){

alert("Opeens begint de man te huilen, 'Ik been een verschrikkelijke vader geweest, wat dacht ik wel??!' Opeens pakt de man een pistol uit zn zak en schiet zichzelf dood, Het meisje zelf is ongedeerd. GAME OVER")

}
else if(vraag8 =="nee"){
alert("De man begint aanzienlijk ongeduldig te worden.!")
	vraag = 9
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////




						//Vraag 9 het einde.


if(vraag == 9){


var vraag9 = prompt('Zal je hem vragen over zijn baan, Zodat hij jouw misschien gaat vertrouwen?')
	
}

if (vraag9 == "ja"){

alert("De man vertelt dat hij een lootgieter is. Opeens begon de man te huilen. hij zegt:'Op een dag kwam ik thuis van een harde dag werk, toen ik binnenkwam zag ik mn dochter vreemd gaan met mn vrouw. Ik was zo boos dat ik haar had doodgestoken en mn dochter hostage heb genomen.' De man pakt zn pistol uit zn binnenzak en legt deze op de grond en doet zn handen omhoog. Hij geeft over. GRATZ YOU WIN")
var gewonnen = 8	
}
else if(vraag9 =="nee"){

alert("De man begint zachtjes te huilen.")
	vraag = 10
}

						//Je hebt gevraagd over zn baan


if(vraag == 10){


var vraag10 = prompt('Zou je de man vertellen over het lijk van zn vrouw die in de sloot naast zn huis gevonden is met zijn vingerafdrukken erop?')

}

if (vraag10 == "ja"){

alert("De man vertelt dat hij een lootgieter is. Opeens begon de man te huilen. hij zegt:'Op een dag kwam ik thuis van een harde dag werk, toen ik binnenkwam zag ik mn dochter vreemd gaan met mn vrouw. Ik was zo boos dat ik haar had doodgestoken en mn dochter hostage heb genomen.' De man pakt zn pistol uit zn binnenzak en legt deze op de grond en doet zn handen omhoog. Hij geeft over. GRATZ YOU WIN")
var gewonnen = 8
}
else if(vraag10 =="nee"){

alert("De man freaked hem totaal en schiet het meisje en daarna zichzelf door het hoofd. GAME OVER")
}






			/////End game

			if(gewonnen < 5){

			}


						