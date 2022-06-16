# Integration de la nouvelle page programme sur la plateforme learnylib
(lire attentivement le readme pour récupérer certaines infos)

Les données de cette page sont totalement indépendantes du reste de l'application.

À chaque formation mise en ligne, il va falloir importer manuellement les datas dans le dossier "data" :wink:, pour alimenter la "page programme".

## Résultat

![](src/assets/resultat-1.png)
![](src/assets/resultat-2.png)
![](src/assets/resultat-3.png)
![](src/assets/resultat-4.png)

## Récupérer l'id du teaser 

![id-teaser](/src/assets/id-teaser.png)

1 - Se connecter sur vimeo (pour des raisons de sécurité évidente je n'ai pas mis les codes à dispo sur ce readme). Pour les récupérer s'adresser à manu.

2 - Cliquez sur l'onglet "vidéos" à gauche de l'écran :

![vimeo-1](/src/assets/vimeo-1.png)

3 - Sélectionner une filière. Pour l'exemple nous allons prendre "santé visuelle" => puis aller dans le dossier "teaser"

![vimeo-3](/src/assets/vimeo-3.png)

4 - Vous cliquez sur un teaser et récupérez son id dans la barre de navigation. 

![vimeo-5](/src/assets/vimeo-5.png)


Remarque :

L'URL de l'api utilisé pour récupérer les photos dans le composant Teachers ne fonctionne plus.