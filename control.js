	//TRABALHANDO COM STREAM
	//Stream trabalha com partes do arquivo(Leitura e Escrita)
	//modulo nativo
	var stream = require('stream');
	
	var streamSaida = new stream.Stream();
	
	//Objeto é o mesmo para leitura e escrita
	//Devo mudar o metodo writable para true para usar processo de escrita
	streamSaida.writable = true;
	
	//sobrescrevendo o metodo de escrita
	streamSaida.write = function(chunk,encoding){
		
		//chunk 	= partes que estão sendo trabalhadas
		//encoding 	= tratamento da string escrita
		
		//emit	= criando evento
		//data 	= nome do evento "foi usado o nome (data) por convenção"
		//chunk = parametro do evento
		this.emit('data',chunk);
				
	};
	
	//disparando o evento
	streamSaida.on('data',function(chunk){
		
		//imprimindo no console
		console.log('Dados recebidos: ' + chunk);
				
	});
	
	//consumindo o evento através do metodo
	streamSaida.write("Escrevendo usando stream");	