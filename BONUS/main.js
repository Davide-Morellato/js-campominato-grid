// RICHIAMO IL BOTTONE PER CREARE POI LA GRIGLIA [document.querySelector()]

const createGridButton = document.querySelector('.btn') ;


// CREO L'EVENTO SUL BOTTONE PER GENERARE LA GRIGLIA [.addEventListener()]

createGridButton.addEventListener('click', function(){

    // CREO UNA VARIABILE PER RICHIAMARMI LA GRIGLIA

    const grid = document.querySelector('.grid') ;
    

    // RICHIAMO IL SELETTORE DI DIFFICOLTA' [document.getElementById()]

    const selectLevel = document.getElementById('difficult') ;


    // CREO UNA VARIABILE PER PRENDERE IL VALORE DEL SELETTORE (.value)

    let selectLevelValue = selectLevel.value ;


    // CREO UNA VARIABILE cellRow CON SCOPE GLOBALE PER INDICARE QUANTE CELLE VOGLIO SU UNA RIGA

    let cellRow ;


    // SE IL VALORE DEL SELETTORE E' EASY
        // ALLORA GENERA UNA GRIGLIA DI 10*10
        // AGGIUNGI LA CLASSE grid-easy PER LA DISPOSIZIONE DELLE CELLE
    // ALTRIMENTI SE IL VALORE DEL SELETTORE E' MEDIUM
        // ALLORA GENERA UNA GRIGLIA DI 8*8
        // AGGIUNGI LA CLASSE grid-medium PER LA DISPOSIZIONE DELLE CELLE
    // ALTRIMENTI IL VALORE DEL SELETTORE E' HARD
        // ALLORA GENERA UNA GRIGLIA DI 5*5
        // AGGIUNGI LA CLASSE grid-hard PER LA DISPOSIZIONE DELLE CELLE

    if (selectLevelValue === 'easy'){

        cellRow = 10 ;

        grid.classList.add('grid-easy') ;

    } else if(selectLevelValue === 'medium'){

        cellRow = 9 ;

        grid.classList.add('grid-medium') ;

    } else {

        cellRow = 7 ;

        grid.classList.add('grid-hard') ;
    }
    

    // CREO UNA VARIABILE gridCells PER INDICARE QUANTE CELLE TOTALI VOGLIO PER LA GRIGLIA

    const gridCells = cellRow * cellRow ;


    // CREO UN CICLO for PER AGGIUNGERE LE CELLE AL DOM

    for(let i = 0; i < gridCells; i++){

        // CREO UNA VARIABILE PER AGGIUNGERNE UNA ALLE CELLE GENERATE [(da 0 a 99) + 1]

        const cells = i + 1 ;


        // CREO LA SINGOLA CELLA [document.createElement()]
        
        const singleCell = document.createElement('div') ;


        // ASSEGNO LA CLASSE cell ALLA SINGOLA CELLA (.className)

        singleCell.className = 'cell' ;


        // GENERO LE CELLE NELLA GRIGLIA AGGIUNGENDOLE AL DOM (.innerHTML)

        singleCell.innerHTML = cells ;


        // APPENDO LE CELLE CREATE singleCell ALLA GRIGLIA grid (.append)

        grid.append(singleCell) ;



        // CREO L'EVENTO SULLA CELLA PER CAMBIARE LO SFONDO AL CLICK (.addEventListener)

        singleCell.addEventListener('click', function(){

            // ASSEGNO LA CLASSE bg-sand (.classList) ALLA CELLA AL CLICK (.toggle)

            singleCell.classList.toggle('bg-sand')
            console.log(cells)

        })


    }

})