// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


// RICHIAMO IL BOTTONE PER CREARE POI LA GRIGLIA [document.querySelector()]

const createGridButton = document.querySelector('.btn')


// CREO L'EVENTO SUL BOTTONE PER GENERARE LA GRIGLIA [.addEventListener()]

createGridButton.addEventListener('click', function(){

    // CREO UNA VARIABILE PER RICHIAMARMI LA GRIGLIA

    const grid = document.querySelector('.grid')


    // CREO UNA VARIABILE cell PER INDICARE QUANTE CELLE VOGLIO SU UNA RIGA

    const cellRow = 10 ;


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