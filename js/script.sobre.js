var sobre = {};

sobre.deck = [
	'card-1-0',
	'card-1-1',
	'card-1-2',
	'card-1-3',
	'card-1-4',
	'card-1-5',
	'card-1-6',
	'card-1-7',
	'card-1-8',
	'card-1-9',
	'card-1-10',
	'card-1-11',
	'card-1-12',
	'card-3-0',
	'card-3-1',
	'card-3-2',
	'card-3-3',
	'card-3-4',
	'card-3-5',
	'card-3-6',
	'card-3-7',
	'card-3-8',
	'card-3-9',
	'card-3-10',
	'card-3-11',
	'card-3-12',
	'card-5-0',
	'card-5-1',
	'card-5-2',
	'card-5-3',
	'card-5-4',
	'card-5-5',
	'card-5-6',
	'card-5-7',
	'card-5-8',
	'card-5-9',
	'card-5-10',
	'card-5-11',
	'card-5-12',
	'card-7-0',
	'card-7-1',
	'card-7-2',
	'card-7-3',
	'card-7-4'
];

sobre.card = new Array();

function InitializeSobre()
{
	var el = document.getElementById("sobrePlate");
	
	var cartas = document.getElementById("cards");
	
	for(var i = 0; i <  sobre.deck.length; i++)
	{			
		sobre.card[i] = document.createElement("div");
		sobre.card[i].setAttribute("class", "card cardBotao");
		cartas.appendChild(sobre.card[i]);
		sobre.card[i].setAttribute("id", parseInt(i));
		sobre.card[i].setAttribute('onclick', 'escreveSobre(id)'); 
		
		sobre.card[i].setAttribute("style", "top:" + (parseInt(i/11)*125) + "px; left:" + ((i%11)*85 + 120) + "px;");
		
		var nome = "card-" + (parseInt(i/13)*2 + 1)	+ "-" + i%13;
		var FaceFront = document.createElement("div");
		FaceFront.setAttribute("class", "face front card-sobre " + nome);
		sobre.card[i].appendChild(FaceFront);		
	}
}

function escreveSobre(carta) 
{
	destroySobre();
	
	var el = document.createElement("div");
	el.setAttribute("id", "sobreTextoPlate");
	game.appendChild(el);
	
	var divText = document.createElement("div");
	divText.setAttribute("class", "divTextoSobre");
	el.appendChild(divText);
	
	var para = document.createElement("p");
	divText.appendChild(para);
	
	var Texto = "";
	
	for (var i = 0; i < 8; i++)
	{
		Texto += sobre.padrao[i] + sobre.infoCartas[carta][i];		
	}
	
	para.innerHTML = Texto;
	
	
	var n1 = (parseInt(carta/13)*2);
	var n2 = carta%13;
	
	var nome = "card-" + n1	+ "-" + n2;
	
	var carta = document.createElement("div");
	carta.setAttribute("class", "card");
	carta.setAttribute("style", "top: 245px; left: -10px;");
	el.appendChild(carta);
	
	var carta_conteudo = document.createElement("div");
	carta_conteudo.setAttribute("class", "face front card-sobre-text " + nome);
	carta.appendChild(carta_conteudo);
	
	var nome2 = "card-" + (n1+1)	+ "-" + n2;
	
	var carta2 = document.createElement("div");
	carta2.setAttribute("class", "card");
	carta2.setAttribute("style", "top: -10px; left: 450px;");
	el.appendChild(carta2);
	
	var carta_conteudo2 = document.createElement("div");
	carta_conteudo2.setAttribute("class", "face front card-sobre-text " + nome2);
	carta2.appendChild(carta_conteudo2);

	
		
	el.onmousedown=function() 
	{
		var el1 = document.getElementById("sobreTextoPlate");
		game.removeChild(el1);
		buildSobre();
	}
	
}