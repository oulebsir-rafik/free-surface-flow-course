---
title: Formule de Manning-Strickler
sidebar_label: Manning-Strickler
sidebar_position: 5
---

# Formule de Manning-Strickler

Quand l'écoulement est turbulent — ce qui est le cas le plus courant en
hydraulique — de nombreuses formules expérimentales ont été proposées pour
tenir compte de l'écoulement turbulent dans des canaux rugueux.

La formule de **Manning-Strickler** est considérée comme une bonne
approximation de la réalité, valable en régime turbulent rugueux :

$$
C = K_s\, R_h^{1/6}
\qquad\Longrightarrow\qquad
\boxed{\,i = \frac{U^2}{K_s^2\, R_h^{4/3}}\,}
$$

$K_s$ est le **coefficient de Strickler**. Il est relié au **coefficient de
Manning** $n$ par la relation :

$$
\boxed{\,n \cdot K_s = 1\,} \qquad\text{soit}\qquad n = \frac{1}{K_s}
$$

:::note Vérification
Pour un béton courant, $n \approx 0{,}014\ \mathrm{s/m^{1/3}}$ et
$K_s \approx 71\ \mathrm{m^{1/3}/s}$ : on vérifie bien
$n \times K_s \approx 0{,}014 \times 71 \approx 1$ — c'est un **produit**, pas
un quotient.
:::

En combinant avec $U = C\sqrt{R_h i}$, on retrouve la forme la plus utilisée
du cours :

$$
U = \frac{1}{n}\,R_h^{2/3}\,i^{1/2} = K_s\,R_h^{2/3}\,i^{1/2}
$$

## Domaine de validité

Cette relation est valable pour une rugosité relative $\varepsilon$ :

$$
7\times10^{-4} < \varepsilon < 7\times10^{-2}
\quad\Longrightarrow\quad
31{,}8 < K_s\,R_h^{1/6} < 68{,}4
$$

## Coefficient de Strickler pour les rivières naturelles

Pour les cours d'eau à section suffisamment constante :

### Petit cours d'eau de largeur inférieure à 30 m

| Description | $K_s$ |
|---|---|
| **Cours d'eau de plaine** | |
| net, droit, niveau d'eau élevé, peu de variation de la section mouillée | 30 à 40 |
| idem, mais pierres et mauvaises herbes plus nombreuses | 30 |
| net, sinueux, avec seuils et mouilles | 25 |
| idem, mais avec pierres et mauvaises herbes | 20 |
| idem, mais niveau bas | 20 |
| cours paresseux, mauvaises herbes, trous d'eau profonds | 15 |
| nombreuses mauvaises herbes et nombreux trous d'eau | 10 |
| pentes et fond irréguliers, nombreuses souches, arbres et buissons, arbres tombés dans la rivière | 5 à 7 |
| **Cours d'eau de montagne** | |
| pas de végétation dans le lit, rives escarpées, arbres et broussailles pour les niveaux élevés | 25 |
| fond en gravier et cailloux, peu de gros galets | 20 |
| fond avec gros graviers | *non lisible dans le document source* |

### Plaines d'inondation

| Description | $K_s$ |
|---|---|
| pâturages sous broussailles | 30 à 35 |
| zones cultivées, absence de récoltes | 35 |
| zones cultivées, récoltes sur pied | 25 à 30 |
| broussailles dispersées et mauvaises herbes, ou broussailles et quelques arbres en hiver | 20 |
| quelques arbres et broussailles en été ; broussaille moyenne ou dense en hiver | 15 |
| broussaille moyenne ou dense en été | 10 |
| souches d'arbres sans rejet | 25 |
| souches d'arbres avec rejets durs | 16 |
| forêt de hautes futaies, peu de broussailles | 10 |
| forêt de hautes futaies, peu de broussailles, niveau d'eau atteignant les branches | 8 |
| souches denses | 7 |

:::caution Valeur manquante
La valeur de $K_s$ pour « fond avec gros graviers » n'est pas lisible sur le
document source fourni. À compléter à partir de l'original (diaporama) avant
diffusion aux étudiants.
:::
