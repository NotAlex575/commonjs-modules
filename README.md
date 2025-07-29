esercizio di oggi: commonjs-modules
nome repo: commonjs-modules

Lavoriamo con i moduli commonjs esportando e importando valori e funzioni. Segui questi tre step creando i rispettivi files:

1 - names.js
Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.,
Esporta la funzione dal file.,

2 - hobbies.js
Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. La funzione dovrebbe restituire  un array di stringhe contenenti gli hobby.,
Esporta la funzione dal file.,

3 - people.js
Importa la tua funzione da names.js,
Importa la tua funzione da hobbies.js,
Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.


cone strutturiamo l'esercizio? 

1) iniziamo col creare inanzitutto dentro al folder modules il names.js
2) creiamo al suo interno una function che accetta i due parametri: firstName, lastName
3) fatto ciò eseguiamo al suo interno un return delle 2 firstName e lastName
4) rendiamo possibile l'export della function
5) creiamo una constante person in scripts.js, che riprende l'export all'interno di names.js
6) creiamo una constante persona, che conterrà quello che ci verrà returnato dalla function in names.js (passandogli 2 valori)
7) eseguo il console.log della constante persona