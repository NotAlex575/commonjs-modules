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

/*______________________________________________________________________________________________________________________________________________________________________________________________________________________*/

come strutturiamo l'esercizio? 

START

1) iniziamo col creare inanzitutto dentro al folder modules names.js
2) creiamo al suo interno una function che accetta i due parametri: firstName, lastName
3) fatto ciò eseguiamo al suo interno un return delle 2 firstName e lastName
4) rendiamo possibile l'export della function
5) creiamo una constante person in scripts.js, che riprende l'export all'interno di names.js
6) creiamo una constante persona, che conterrà quello che ci verrà returnato dalla function in names.js (passandogli 2 valori)
7) eseguo il console.log della constante persona
8) creiamo dentro al folder module hobbies.js
9) facciamo tutti i passaggi precedentemente elencati (ma con la differenza che anzichè passare un oggetto, gli passiamo un'array con 3 parametri: hobbyOne, hobbyTwo, hobbyThree)
10) ottenuti names.js e hobbies.js, creiamo in script.js una function senza parametri (chiamata getSubjectInfo)
11) al suo interno recuperiamo tutte le informazioni dentro ai 2 moduli precedentemente creati (fullName -> l'oggetto che si trova in names.js, hobbies -> l'array che si trova in hobbies.js)

END
