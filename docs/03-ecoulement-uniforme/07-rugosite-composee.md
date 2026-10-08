---
title: Sections de rugosité composées
sidebar_label: Rugosité composée
sidebar_position: 7
---

import InteractiveEmbed from '@site/src/components/InteractiveEmbed';

# Sections de rugosité composées

Les coefficients de frottement vus jusqu'ici sont valables à condition que
tout le périmètre mouillé ait la **même rugosité** ; on dit alors que la
section mouillée est **homogène**.

Pour des sections à périmètre mouillé **non homogène** (berges en terre et
radier bétonné, par exemple), il faut calculer un coefficient de frottement
**équivalent**.

## Méthode d'Einstein

Selon Einstein, on divise de manière raisonnable la surface mouillée $S$ en
$N$ parties, chacune ayant son propre périmètre mouillé $P_1, P_2, \dots, P_N$
et son propre coefficient de frottement $n_1, n_2, \dots, n_N$. On admet que la
vitesse moyenne de chaque section partielle reste la même, égale à $U$.

En utilisant la formule de Manning sur chaque partie :

$$
U = \frac{1}{n}\left(\frac{S}{P}\right)^{2/3} i^{1/2}
  = \frac{1}{n_1}\left(\frac{S_1}{P_1}\right)^{2/3} i^{1/2}
  = \frac{1}{n_2}\left(\frac{S_2}{P_2}\right)^{2/3} i^{1/2}
  = \dots
$$

Le coefficient de frottement **équivalent** d'une rugosité composée se calcule
alors par :

$$
\boxed{\,n = \left[\frac{\displaystyle\sum_{i=1}^{N} P_i\, n_i^{3/2}}{P}\right]^{2/3}\,}
$$

### Simulation interactive

La scène 3D ci-dessous illustre un canal dont le périmètre mouillé traverse
trois parois différentes — talus végétalisé, fond en gravier, mur en béton —
avec le partage de la section mouillée au sens d'Einstein. Faites varier la
hauteur d'eau, la géométrie du canal, la pente ou la rugosité de chaque paroi
dans le panneau de droite pour observer en direct l'effet sur le coefficient
équivalent $n$, le rayon hydraulique $R_h$, la vitesse $U$ et le débit $Q$.

<InteractiveEmbed
  src="/interactifs/canal-rugosite-composee.html"
  title="Canal à rugosité composée — simulation interactive"
  height={650}
/>
