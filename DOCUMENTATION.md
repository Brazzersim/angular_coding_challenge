## ROOT

Ho suddiviso l'applicazione in 3 moduli differenti:

- Side Filters 
- Body
- Footer (barra di confronto)

## Modulo Side Filters

In questo modulo ho racchiuso tutti i filtri rappresentati nel mockup di riferimento. 
All'interno del file <code>side.component.html</code> si trova la struttura del primo parametro di filtraggio fondamentale, 
cioè quello di "Categorie", dopo di che viene innestato all'interno della pagina un ulteriore component <code>side-elements.component.ts</code> 
che racchiude la struttura di tutti gli altri filtri rappresentati nel mockup, ma riassunti in un unico template HTML iterato tante volte quanti sono i filtri da rappresentare.

I filtri dunque sono dati derivanti da un presunto back-end (<code>static-data.service.ts</code>) e il template è costruito dinamicamente.


## Modulo Body

All'interno di questo modulo vengono racchiusi:

- Meccanismo di ordinamento dei risultati (solo grafico)
- Prodotti 
- Paginazione (solo grafica)

All'interno del file <code>body.component.html</code> si trova come per il modulo precedente, lo scheletro del modulo in cui vengono
racchiusi il meccanismo di ordinamento dei risultati e un ulteriore sezione "Main" che riporta a <code>main.component.ts.</code>

All'interno di questo component (come per i filtri) viene reiterata la medesima struttura HTML per la rappresentazione di un prodotto in "Cards";
i dati quindi si presume vengano sempre da un back-end e popolino la sezione.
E' stato aggiunto un meccanismo per l'aggiunta di un prodotto ad una whishlist con salvataggio dei dati in localStorage.
All'interno di questo component si trova anche il meccanismo di paginazione adattato per lo stile del mockup ma senza alcuna logica implementata.


## Modulo Footer 

La barra di confronto è stato l'ultimo modulo sviluppato.
All'interno del component relativo <code>footer.component.html</code> si può notare un elemento supplementare rispetto agli altri component,
e cioè l'animazione. L'animazione per la transizione è stata implementata utilizzando il modulo <code>BrowserModuleAnimations</code> ed è stata applicata all'intero footer.

L'animazione avviene quando, all'ascolto di un <code>Observable</code> salvato nel service <code>static-data.service.ts</code>, il cui dato viene settato direttamente al click su "Confronta" all'interno di
<code>main.component.ts</code>, allora dopo un banale controllo matematico si aggiornerà il conteggio dei prodotti necessari
per effettuare il confronto, e,  una volta arrivati al numero, abilitare il pulsante "Confronta" che se cliccato aprirà una modale di esempio.



## Changelogs

Mi dispiace per non aver implementato correttamente il meccanismo di conventional commits, non l'ho mai usato precedentemente e credo di aver installato una libreria un po' buggata.
