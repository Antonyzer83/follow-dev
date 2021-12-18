# FollowDev

## Introduction

FollowDev est une application codée en Ionic avec le framework Vue.js 3. Cet outil a pour but de créer des performances suite à des exercices et des programmes entrés par les utilisateurs connectés de l'application. Les sportifs ont également l'occasion d'imprimer leurs performances au format PDF ou même des les partager par mail, SMS ou par les réseaux sociaux.

## Comment construire et lancer le projet sur Android 

- Générer le code Android 

```bash
ionic capacitor build android
```

- Générer les splash screens et les icônes

```bash
npm run resources
```

- Mettre à jour le fichier AndroidManifest.xml (pour le deep-link)

```bash
cp AndroidManifest.xml android/app/src/main/AndroidManifest.xml
```

- Lancer le projet généré précédemment sur votre appareil Android

```bash
ionic capacitor run android --target <your device>
```

## Liens utiles

- [Dépôt Github](https://github.com/Antonyzer83/follow-dev/)
- [Tableau de développement Github avec les tickets](https://github.com/Antonyzer83/follow-dev/projects/1)
- Ionic Native :
  - [Deep Link](https://capacitorjs.com/docs/guides/deep-links)
  - [Social Sharing](https://ionicframework.com/docs/native/social-sharing)
  - [PDF Generator](https://ionicframework.com/docs/native/pdf-generator)

## Wireframes

- Page de connexion

![Connexion](wireframes/Connexion.png)

- Foire aux questions

![FAQ](wireframes/FAQ.png)

- Liste des exercices

![Liste des exercices](wireframes/Liste%20des%20exercices.png)

- Affichage d'un exercice

![Affichage d'un exercice](wireframes/Affichage%20d'un%20exercice.png)

- Formulaire de création/MAJ d'un exercice

![Formulaire de création/MAJ d'un exercice](wireframes/Formulaire%20de%20création-MAJ%20d'un%20exercice.png)

- Liste des programmes

![Liste des programmes](wireframes/Liste%20des%20programmes.png)

- Affichage d'un programme

![Affichage d'un programme](wireframes/Affichage%20d'un%20programme%20%20enchainement.png)

- Formulaire de création/MAJ d'un programme

![Formulaire de création/MAJ d'un programme](wireframes/Formulaire%20de%20création-MAJ%20d'un%20programme.png)

- Liste des performances

![Liste des performances](wireframes/Liste%20des%20perfomances.png)

- Affichage d'une performance

![Affichage d'une performance](wireframes/Affichage%20d'une%20performance.png)

- Formulaire de création d'une performance

![Formulaire de création d'une performance](wireframes/Formulaire%20de%20création%20d'une%20performance.png)
