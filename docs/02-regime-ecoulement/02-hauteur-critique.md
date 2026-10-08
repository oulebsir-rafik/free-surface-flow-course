---
title: Hauteur critique et section de contrôle
sidebar_label: Hauteur critique
sidebar_position: 2
---

# Hauteur critique et section de contrôle

## Définition de la hauteur critique

On parle d'écoulement **critique** lorsque la vitesse de l'écoulement est
égale à la célérité des ondes de surface. On parle alors de **hauteur
critique** $h_c$.

La détermination de $h_c$ s'effectue en imposant un nombre de Froude égal à 1 :

$$
\mathrm{Fr}(Q, h_c, \text{caractéristiques de la section}) = 1
\quad\Longleftrightarrow\quad
\frac{Q^2}{S(h_c)^2\, g\, H_h(h_c)} = 1
$$

Cette équation est **implicite** en toute généralité, mais elle se résout de
façon simple pour les sections classiques (rectangulaire, triangulaire,
trapézoïdale), comme on le verra au prochain chapitre.

## Section de contrôle double

Une **section de contrôle double** est une section dans laquelle l'écoulement
est critique : la vitesse de l'écoulement y est égale à la célérité des ondes.

$$
U = \sqrt{g\,H_h}, \qquad Q = S\sqrt{g\,H_h}
$$

La surface $S$ et la profondeur hydraulique $H_h$ étant toutes deux des
fonctions croissantes de la hauteur d'eau $h$, il apparaît un **lien bijectif**
entre la hauteur d'eau et le débit au régime critique.

:::tip Conséquence pratique
Le débit, au régime critique, ne dépend **que de la hauteur** : cela facilite
grandement la mesure du débit en ces points. C'est le principe de tous les
ouvrages de mesure (déversoirs, canaux Venturi) qui imposent volontairement le
passage par le régime critique.
:::

## Récapitulatif

| | Hauteur | Froude | Régime |
|---|---|---|---|
| | $h < h_c$ | $\mathrm{Fr} > 1$ | **torrentiel** : l'écoulement est trop rapide pour que les ondes de gravité remontent vers l'amont ; les ondes ne sont générées que vers l'aval |
| | $h > h_c$ | $\mathrm{Fr} < 1$ | **fluvial** (ou sous-critique) : les ondes de gravité se déplacent aussi bien vers l'aval que vers l'amont |
