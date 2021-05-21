# Teknisk Test Frontend - Politiets IKT-Tjenester

Gratulerer! Du har kommet så langt i intervjuprosessen at du skal få vise oss dine tekniske ferdigheter litt nærmere. Din oppgave nå er å lage en webapplikasjon som viser en liste over profiler som Politiet vil ha oversikt over.

Vi ønsker at du skal legge mest vekt på funksjon/logikk/kode og heller holde styling relativt enkel.

### Funksjonelle krav
Brukerne har satt opp følgende ønsker:

 1. *"Jeg vil kunne se en liste over alle de tilgjengelige profilene."*
 2. *"Når jeg klikker på en profil, vil jeg se tilgjengelig informasjon om denne profilen."*
 3. *"De som er onde skal ha annen bakgrunn enn de snille!"*
 4. *"Enkeltprofilene skal være formet som et visittkort."*

### Tekniske krav

Arkitektene i PIT har kommet med følgende krav:

 - Oppgaven kan løses i enten TypeScript eller JavaScript.
 - Vi ønsker at du bruker et velkjent bibliotek/rammeverk som React.js eller Angular.
 - CSS-biblioteker som f.eks. Bootstrap, Material eller Tailwind skal ***ikke*** brukes. Benytt istedet CSS-funksjonalitet som er innebygd i nettleseren, som blant annet Flexbox, Grid og annen layout/styling. SASS/LESS eller tilsvarende er tillatt.

 ### Design
 
 Designerne har brukt den siste måneden på å jobbe frem et godt design, og har levert følgende wireframe:

 ![Wireframe for the Criminal Profile application](/designs.jpg "Wireframe")

 Hvor siden til venstre er en enkelt liste over de tilgjengelige profilene, mens skissen til høyre er en enkel skisse av profilen til hver enkelt.


## Serverdok: 
- Node-versjon benyttet: 15.10.0
- Vi har laget en node-server som du kan kjøre lokalt. Kjør start-scriptet som ligger i package.json: `npm start`. Da skal serveren startes på port 9090 ([`http://localhost:9090`](http://localhost:9090)). 
- Denne serveren fungerer som et rest-api med flere endepunkter, hvor du vil trenge to av dem for å utføre oppgaven: "/profile" og "/profile/:id".
  - `GET /profile` returnerer en liste over profiler som du vil trenge til krav 1.  
  - `GET /profile/:id` returnerer en spesifikk profil med mer informasjon som navn, alder, tittel, description som skal vises frem. Her må id sendes med for krav 2, 3 og 4. 
