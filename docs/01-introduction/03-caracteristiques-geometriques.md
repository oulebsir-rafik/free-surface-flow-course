---
title: Vocabulaire — caractéristiques géométriques
sidebar_label: Caractéristiques géométriques
sidebar_position: 3
---

# Caractéristiques géométriques

## Section transversale

La **section transversale** d'un canal est la section plane normale à la
direction de l'écoulement.

- La **surface mouillée**, $S$, est la portion de la section occupée par le
  fluide dans la section du canal.
- Le **périmètre mouillé**, $P$, est formé par la longueur de la ligne de
  contact entre la surface mouillée et les parois de la section — la largeur
  de la surface libre **n'entre pas en compte**.

```text
        |<------------- B -------------->|
         \                               /
          \                             /
       Dh  \            S              /
        h   \                         /
             \_______________________/
                        P
```

## Grandeurs dérivées

Le **rayon hydraulique** est donné par :

$$
R_h = \frac{S}{P}
$$

La **largeur superficielle** ou largeur au miroir, $B$, est la largeur du
canal au niveau de la surface libre :

$$
B = \frac{\mathrm{d}S}{\mathrm{d}h}
$$

La **profondeur hydraulique** est donnée par :

$$
H_h = \frac{S}{B}
$$

Le **diamètre hydraulique** est :

$$
D_h = 4\,R_h = 4\,\frac{S}{P}
$$

:::note Pourquoi un facteur 4 ?
Le diamètre hydraulique est défini de façon à coïncider avec le diamètre réel
d'une conduite circulaire en charge : pour un cercle plein de diamètre $D$,
$D_h = 4\left(\pi D^2/4\right)/(\pi D) = D$.
:::

## Canal prismatique

Un canal dont la section, la pente et la rugosité ne varient pas suivant le
sens de l'écoulement est appelé **canal prismatique**.

:::warning Attention
Même dans un canal prismatique, les caractéristiques hydrauliques (profondeur,
vitesse…) peuvent tout à fait varier le long de l'écoulement : *prismatique*
qualifie la **géométrie** du canal, pas le régime de l'écoulement qui s'y
établit.
:::
