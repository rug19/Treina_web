// Parâmentros e argumentos

function outraFunction(valor1){ // parâmetro
    console.log(' A soma e', valor1 + 5);
    
    }
    
    outraFunction(12); // Argumento
    
    // Podemos também passar um parâmentro sem valor definido para ser atribuido depois. 
    
    function secondFunction(numero1 = "", numero2 = 0){ // parâmetro sem atribuição de valor. 
        console.log(numero1, numero2);
    
    }
    
    secondFunction('novo numero', 4); // Atribuindo valor ao chamar a função. 
    