# PictureGalleryClient

## Server:

[PhotoGaleryServer](https://github.com/VPeterB/PhotoGaleryServer) git repo

## Deployments:

- server + databse: Openshift: https://photo-galery-server-git-vida-peter1127-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com,
- api endpoint: https://photo-galery-server-git-vida-peter1127-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/api
- client: Heroku: [https://picture-gallery-client-1e22d88a023f.herokuapp.com/home](https://picture-gallery-client-1e22d88a023f.herokuapp.com/home)

## Structure:

- DB-Server-Client
- PostgreSQL database connected to Java spring rest API server in Openshift and this Angular cilent application calls the deployed server, and the client is deployed too but on Heroku.

## Task:

### Cél
Megismerkedni egy PaaS környezettel felhasználói szinten és segítségével létrehozni egy fényképalbum alkalmazást.

### Eszközök, feltételek
- A megoldásnak valamilyen publikusan elérhető PaaS környezetben (OpenShift/AppEngine/Heroku/...) kell műkködnie. 
- A végleges alkalmazásváltozatnak skálázhatónak és többrétegűnek kell lennie.
- Tetszőleges nyelv, tetszőleges keretrendszer használható.
- GitHub-ra feltöltve a build induljon el automatikusan.
### Funkcionális követelmények:
- Fényképek feltöltése/törlése.
- Miden fényképnek legyen neve (min. 40 karakter), és feltöltési dátuma (év-hó-nap óra:perc)
- Fényképek nevének és dátumának listázása név szerint/dátum szerint rendezve.
- Lista egy elemére kattintva mutassa meg a név mögötti képet.
- Felhasználókezelés (regisztráció, belépés, kilépés).
- Feltöltés, törlés csak bejelentkezett felhasználónak engedélyezett
### Benyújtandó
- Rövid dokumentáció a végleges megoldásról (választott környezet, rétegek, kapcsolatok).
- A megoldás forrásfájljai GitHub-on. (linket kell megadni).
- Működó alkalmazás bemutatása a PaaS környezetben. 
- Aki már bemutatta a végleges változatot korábban, annak csak a dokumentációt kell feltöltenie, akár ugyanazt újra.
