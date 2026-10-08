---
title: Charge hydraulique d'un écoulement uniforme
sidebar_label: Charge en écoulement uniforme
sidebar_position: 3
---

import UniformFlowProfile from '@site/src/components/UniformFlowProfile';

# Charge hydraulique d'un écoulement uniforme

## Description

Un écoulement uniforme peut être décrit de plusieurs façons équivalentes :

- hauteur d'eau constante : $h_1 = h_2$ ;
- vitesse moyenne sur la section constante : $U_1 = U_2$ ;
- surface libre parallèle au fond ;
- égalité entre la pente énergétique $J = -\mathrm{d}H/\mathrm{d}x$, la pente
  de la surface libre et la pente du canal $i = -\mathrm{d}z/\mathrm{d}x$.

<UniformFlowProfile />

## Conditions nécessaires

Pour qu'un écoulement uniforme se produise, un certain nombre de conditions
doivent être nécessairement rencontrées :

- pente $i$ du fond constante ;
- rugosité des parois constante ;
- débit constant, à la fois dans le temps et dans l'espace ;
- section **prismatique** : la section en travers ne varie pas le long du
  canal ;
- canal (ou canalisation) droit : pas de coudes ;
- loin des conditions aux limites (entrée, sortie, singularités) ;
- pression constante au-dessus de la surface libre.

## Application du théorème de Bernoulli

Si l'on applique l'équation de Bernoulli entre les sections $S_1$ et $S_2$, on
obtient :

$$
H_1 = z_1 + y_1 + \frac{v_1^2}{2g} = H_2 + J = z_2 + y_2 + \frac{v_2^2}{2g} + J
$$

$J$ étant la perte de charge, puisque l'on considère un liquide réel. Comme on
ne rencontre aucun obstacle entre les deux sections, la perte de charge se
réduit à la **perte de charge linéaire**.

On en déduit :

$$
j = \frac{\mathrm{d}H}{\mathrm{d}x} = \frac{\mathrm{d}}{\mathrm{d}x}\left(z + y + \frac{v^2}{2g}\right) = \frac{\mathrm{d}z}{\mathrm{d}x} = i
$$

:::important À retenir
L'écoulement uniforme et permanent se caractérise par une **constance des
paramètres hydrauliques** : la vitesse moyenne, le tirant d'eau et donc le
débit restent invariables dans les différentes sections du canal le long de
l'écoulement. Les lignes de courant sont rectilignes et parallèles, et la
pression peut donc être considérée comme hydrostatique.

**La pente de fond, la pente de la surface libre et la pente de la ligne
d'énergie sont parallèles.**
:::

## Un régime asymptotique

L'écoulement uniforme est un phénomène **asymptotique** qui ne pourra
s'établir qu'après une longueur d'écoulement « suffisamment » importante
(Hager, 1999). Autrement dit, l'écoulement uniforme ne peut s'établir qu'à une
distance suffisamment grande d'une section de contrôle.

```text
  réservoir |  non uniforme  |     uniforme     |  non uniforme | chute
            |________________|__________________|_______________|
```

En amont (sortie de réservoir) comme en aval (approche d'une chute), la ligne
d'eau s'écarte de la profondeur normale : l'uniformité ne s'observe que dans
le tronçon central, loin de ces deux sections de contrôle.
