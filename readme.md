## L'objectif de l'exercice est de mettre en place une interface graphique pour notre workshop calculatrice en console

Voici le code final, chaque commit réalisé correspond à une étape décrite ci dessus.
Tu peux t'amuser à reprendre step by step les étapes, et suivre la correction au fur et à mesure via l'historique

## Etapes
- 1/ Mise en place de l'interface HTML
- 2/ Mise en place du style
- 3/ Ajout du fichier script avec l'appel aux fonctions addValue et calcul directement avec des onclick sur les td
- 4/ Mise en place de la logique de calcul et affichage du resultat en console.logique
    - Création de plusieurs variables pour mémoriser les données et les étapes (valeur 1, valeur2, opérateur, step1)
    - addValue permet de concaténer le nouveau chiffre à la valeur 1 ou 2 selon le cas
    - ajout d'une fonction addOperator pour mémoriser l'opérateur et changer la valeur de step 1 (Cela nous permet de passer en mémorisation de la valuer 2)
    - Mise en place du switch de calcul
    !!! A cette étape, nous faisons entièrement confiance dans l'utilisateur qui entre les données correctement
- 5/ Mise en place de l'affiche du résult dans un td, 
- 6/ Mise en place du script pour la gestion de l'affichage du résulat
    - suppression des console.log et utilisation du getElementById pour mettre à jour le HTML
    - L'espace de résultat doit dans un premier temps afficher l'opération en cours (ex: 15 + 35)
    - Puis, uniquement le résultat.
    Ensuite, ajout d'un bouton de reset des valeurs et de l'affichage
    Gestion des erreurs du User (Pas de premier chiffre, pas d'opérateur....) avec une alerte window
- 7/ Mise en place d'un script avec une balise HTML pour l'affichage des alertes utilisateurs
