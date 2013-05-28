/*
	O html do jogo é simplesmente um body com uma div chamada "game"
	Quando a pagina carrega, ela carrega as tags <script> que contém os arquivos de javascript que geram o jogo
	Quando os scripts são carregados é criado uma div "menu" e seu conteudo
	Através das interações com os botões o html é gerado e destruido dinamicamente pelo javscript
	
	O css está sendo usado de maneira mista tanto inline (dentro do html) como por arquivos externos (css)
*/

var game = document.getElementById("game");

function buildMenu()
{	
	var el = document.createElement("div");
	el.setAttribute("id", "menu");	
	game.appendChild(el);
	
	var titulo = document.createElement("div");
	titulo.setAttribute("id", "titulo");
	titulo.setAttribute("class", "titulo");
	el.appendChild(titulo);
	
	var sobreGeral = document.createElement("div");
	sobreGeral.setAttribute("id", "sobreGeral");
	sobreGeral.innerHTML = "A filosofia deste jogo está dividida em duas partes:<br><br>• Aprender o nome de alguns elementos químicos,  associando este nome com sua periodicidade (quantos elétrons este elemento possui na sua camada de valência)<br><br>• Testar sua memória! Aproveite para além de testar sua memória e sua capacidade de associar seus conhecimentos e acesse o conteúdo de cada carta (cada elemento) <br><br>Aprenda mais sobre o incrível mundo da Química neste desafio de memória!";
	el.appendChild(sobreGeral);
		
	var botao = document.createElement("button");
	botao.setAttribute("id" , "btNovoJogo6");
	botao.setAttribute("class" , "botao");
	botao.setAttribute("type" , "button");
	botao.setAttribute("style", "background: url(imgs/facil.png); width:100px; height:100px; border:0;");
	el.appendChild(botao);
	
	var botao = document.createElement("button");
	botao.setAttribute("id" , "btNovoJogo12");
	botao.setAttribute("class" , "botao");
	botao.setAttribute("type" , "button");
	botao.setAttribute("style", "background: url(imgs/medio.png); width:100px; height:100px; border:0;");
	el.appendChild(botao);
	
	var botao = document.createElement("button");
	botao.setAttribute("id" , "btNovoJogo18");
	botao.setAttribute("class" , "botao");
	botao.setAttribute("type" , "button");
	botao.setAttribute("style", "background: url(imgs/dificil.png); width:100px; height:100px; border:0;");
	el.appendChild(botao);
	
	
	var botao = document.createElement("button");
	botao.setAttribute("id" , "btSobre");
	botao.setAttribute("class" , "botao");
	botao.setAttribute("type" , "button");
	botao.setAttribute("style", "background: url(imgs/sobre.png); width:100px; height:100px; border:0;");
	el.appendChild(botao);
	
	
	var botao = document.createElement("button");
	botao.setAttribute("id" , "bt3");
	botao.setAttribute("class" , "botao");
	botao.setAttribute("type" , "button");
	botao.setAttribute("style", "background: url(imgs/creditos.png); width:100; height:100px; border:0;");
	el.appendChild(botao);	
	
	var btJ6 = document.getElementById("btNovoJogo6");
	btJ6.onmousedown=function()
	{		
		destroyMenu();			
		buildGame(6);
	}
	
	var btJ12 = document.getElementById("btNovoJogo12");
	btJ12.onmousedown=function()
	{		
		destroyMenu();			
		buildGame(12);
	}
	
	var btJ16 = document.getElementById("btNovoJogo18");
	btJ16.onmousedown=function()
	{		
		destroyMenu();			
		buildGame(18);
	}
	
	var btSobre = document.getElementById("btSobre");
	btSobre.onmousedown=function()
	{
		destroyMenu();
		buildSobre();
	}
	var bt3 = document.getElementById("bt3");
	bt3.onmousedown=function()
	{
		destroyMenu();
		buildCreditos();
	}		
}

function destroyMenu()
{
	
	var el = document.getElementById("menu");
	game.removeChild(el);
}

function buildGame(numeroDeCartas)
{
	var el = document.createElement("div");
	el.setAttribute("id", "gamePlate");
	game.appendChild(el);
		
	var cards = document.createElement("div");
	cards.setAttribute("id", "cards");
	el.appendChild(cards);
	
	var card = document.createElement("div");
	card.setAttribute("class", "card");
	cards.appendChild(card);
	
	var faceFront = document.createElement("div");
	faceFront.setAttribute("class", "face front");
	card.appendChild(faceFront);
	
	var faceBack = document.createElement("div");
	faceBack.setAttribute("class", "face back");
	card.appendChild(faceBack);
	
	var divVoltar = document.createElement("div");
	divVoltar.setAttribute("id", "divVoltar");
	el.appendChild(divVoltar);
	
	var botao = document.createElement("button");
	botao.setAttribute("id" , "btVoltar");
	botao.setAttribute("type" , "button");
	botao.setAttribute("class" , "botao");
	botao.setAttribute("style", "background: url(imgs/voltar.png); width:60px; height:60px; border:0;");
	divVoltar.appendChild(botao);
	
	botao.onmousedown=function()
	{
		destroyGame();
		buildMenu();
	}
	
	Initialize(numeroDeCartas);
}

function destroyGame()
{
	var el = document.getElementById("gamePlate");
	game.removeChild(el);
}

function buildSobre()
{		
	var el = document.createElement("div");
	el.setAttribute("id", "sobrePlate");	
	game.appendChild(el);

	var cards = document.createElement("div");
	cards.setAttribute("id", "cards");
	el.appendChild(cards);
	
	var divVoltar = document.createElement("div");
	divVoltar.setAttribute("id", "divVoltar");
	el.appendChild(divVoltar);
	
	var botao = document.createElement("button");
	botao.setAttribute("id" , "voltar");
	botao.setAttribute("type" , "button");
	botao.setAttribute("class" , "botao");
	botao.setAttribute("style", "background: url(imgs/voltar.png); width:60px; height:60px; border:0;");
	divVoltar.appendChild(botao);
	
	
	botao.onmousedown=function()
	{
		destroySobre();
		buildMenu();
	}
	
	InitializeSobre();
}

function destroySobre()
{		
	var el = document.getElementById("sobrePlate");
	game.removeChild(el);
}

function buildCreditos()
{
	var el = document.createElement("div");
	el.setAttribute("id", "creditosPlate");	
	game.appendChild(el);
		
	var logo = document.createElement("div");
	logo.setAttribute("style", "position: relative;background: url(imgs/logos.png); width:410px; height:71px; left: 50%; margin-left: -205px;top: 35px;");
	el.appendChild(logo);	
	
	var para = document.createElement("br");	
	el.appendChild(para);
	var para = document.createElement("br");	
	el.appendChild(para);
	var para = document.createElement("br");	
	el.appendChild(para);
	
	
	var para = document.createElement("p");
	para.innerHTML = "Equipe";
	el.appendChild(para);	
	
	var para = document.createElement("br");
	el.appendChild(para);
	var para = document.createElement("br");
	el.appendChild(para);
	
	var colLeft = document.createElement("div");
	colLeft.setAttribute("style", "width: 250px; float: left;  text-align: center;");
	el.appendChild(colLeft);
	
	var para = document.createElement("p");
	para.innerHTML = "Marcelo";
	colLeft.appendChild(para);
	
	var para = document.createElement("p");
	para.innerHTML = "Murilo";
	colLeft.appendChild(para);
	
	var para = document.createElement("p");
	para.innerHTML = "Valério";
	colLeft.appendChild(para);
	
	var para = document.createElement("p");
	para.innerHTML = "Henrique";
	colLeft.appendChild(para);
	
	var colRight = document.createElement("div");
	colRight.setAttribute("style", "width: 250px; float: right; text-align: center;");
	el.appendChild(colRight);
	
	var para = document.createElement("p");
	para.innerHTML = "Katia";
	colRight.appendChild(para);
	var para = document.createElement("p");
	para.innerHTML = "Rafaela";
	colRight.appendChild(para);
	var para = document.createElement("p");
	para.innerHTML = "Diana";
	colRight.appendChild(para);
	var para = document.createElement("p");
	para.innerHTML = "Catarine";
	colRight.appendChild(para);
	
	var para = document.createElement("br");
	el.appendChild(para);
	var para = document.createElement("br");
	el.appendChild(para);
	var para = document.createElement("br");
	el.appendChild(para);
	var para = document.createElement("br");
	el.appendChild(para);
	var para = document.createElement("br");
	el.appendChild(para);
	var para = document.createElement("br");
	el.appendChild(para);
	var para = document.createElement("br");
	el.appendChild(para);
	var para = document.createElement("br");
	el.appendChild(para);
	var para = document.createElement("br");
	el.appendChild(para);
	var para = document.createElement("br");
	el.appendChild(para);
	
	var divVoltar = document.createElement("div");
	divVoltar.setAttribute("id", "divVoltar");
	el.appendChild(divVoltar);
	
	var botao = document.createElement("button");
	botao.setAttribute("id" , "btVoltar");
	botao.setAttribute("type" , "button");
	botao.setAttribute("class" , "botao");
	botao.setAttribute("style", "background: url(imgs/voltar.png); width:60px; height:60px; border:0;");
	divVoltar.appendChild(botao);
	
	
	/*
	var botao = document.createElement("button");
	botao.setAttribute("id" , "voltarSobre");
	botao.setAttribute("type" , "button");
	botao.setAttribute("class" , "botao");
	botao.setAttribute("style", "background: url(imgs/voltar.png); width:60px; height:60px; border:0;");
	el.appendChild(botao);	
	*/
	
	botao.onmousedown=function()
	{
		destroyCreditos();
		buildMenu();
	}
}

function destroyCreditos()
{
	var el = document.getElementById("creditosPlate");
	game.removeChild(el);
}

function buildWin()
{
	var el = document.createElement("div");
	el.setAttribute("id", "winPlate");
	el.setAttribute("style", "background: url(imgs/parabens.png);");
	game.appendChild(el);
	
	
	el.onmousedown=function()
	{
		destroyWin();
		buildMenu();
	}
}

function destroyWin()
{
	var el = document.getElementById("winPlate");
	game.removeChild(el);
}

buildMenu();