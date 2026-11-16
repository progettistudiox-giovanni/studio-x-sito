# Sito dello studio (nome provvisorio: Studio X): regole di lavoro

Sito dello studio di architettura fondato a Roma da Alessandro Ghersi, Pietro Parroccini e Giovanni Telve.
Questo file è per chi modifica il codice (Claude compreso): leggerlo prima di toccare qualcosa.

## Regole sui contenuti
- Nessuno dei tre deve avere più valore o visibilità degli altri: stesso spazio, stesso tono, stessa quantità di materiale.
- Persone sempre in ordine alfabetico per cognome: Ghersi, Parroccini, Telve. Progetti nello stesso ordine, ripetuto.
- Nei testi visibili non si scrive "soci" (nel codice il campo si chiama così, va bene).
- Niente diciture professionali non verificate: nessun riferimento all'albo o all'abilitazione finché non è confermato con l'Ordine.
- Sempre italiano e inglese insieme. Mai il trattino lungo. Niente frasi a effetto.
- Immagini e foto solo con permesso e credito.

## Come è fatto
- `contenuti.js`: tutti i testi e i dati. Per aggiornare il sito si modifica solo questo file. Il nome dello studio sta nel campo `nome`
  e nei testi si scrive `{nome}`.
- Ciò che è tra [parentesi quadre] è un segnaposto: con `mostraSegnaposto: false` resta nascosto.
- `comune.js` e `sito.js`: il motore. `stile.css`: la grafica. `img/<cartella>/`: immagini in webp, con la versione `-480` e,
  dove serve, `-alta` (elencata nel campo `alta` del progetto).

## Pubblicazione
- Ogni push su `main` viene pubblicato da Cloudflare su `studio-x-sito.progetti-studiox.workers.dev`.
- Finché il nome è provvisorio il sito non deve comparire su Google: `noindex` in `index.html` e `robots.txt` restano.
- Dopo il push aspettare la fine della build e verificare la pagina pubblicata con un indirizzo nuovo (`?v=<commit>`).
- Tutto ciò che sta nel repository e non è in `.assetsignore` è pubblico.

## Quando si sceglie il nome e si pubblica
1. Verificare il nome su registri, Ordine e marchi; registrare dominio e profili social.
2. Sostituire il nome in `contenuti.js` (`nome`) e in `index.html`: titolo, descrizione, `og:title`, `og:url`, `og:image`.
3. Togliere la riga `noindex` da `index.html` e il file `robots.txt`.
4. Collegare il dominio in Cloudflare; valutare di rinominare repository e progetto.
5. Creare l'email dello studio e aggiungere i contatti (ora non c'è nessun recapito).
6. Scrivere l'approccio dello studio (3-5 righe), poi riattivare o togliere i segnaposto.
7. Aggiungere il nome del corso al progetto del Quadraro.
8. Sostituire `icona.svg` e rifare `anteprima.jpg`.
9. P.IVA e dati obbligatori nel piè di pagina; privacy se si aggiungono statistiche o moduli.
10. Controllo finale sul dominio vero: computer, telefono, pulsante "Copia link", inglese.

## Prima di dire "fatto"
- Guardare la pagina da computer e da telefono, in italiano e in inglese.
- Contare che i tre abbiano lo stesso numero di progetti e di righe.
- Dire con chiarezza che cosa non è stato verificato.
