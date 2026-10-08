---
title: Régime d'écoulement et nombre de Froude
sidebar_label: Régime d'écoulement
sidebar_position: 1
---

# Régime d'écoulement

## Mise en évidence : propagation d'une perturbation

Supposons un canal à section constante, à pente constante, parcouru par un
débit $Q$ constant sous une hauteur $h$. On crée une perturbation grâce à une
vanne que l'on ferme puis que l'on ouvre très rapidement.

Au niveau de la surface libre, cette perturbation crée deux **ondes de
gravité** qui se propagent à partir du point d'origine :

- l'une se propage **toujours vers l'aval** ;
- l'autre se propage **vers l'amont** si la vitesse $U$ dans le canal est
  inférieure à la célérité $c$ de l'onde de gravité ; elle s'oriente vers
  l'aval dans le cas contraire.

On distingue ainsi trois régimes :

| Régime | Condition | Comportement de l'onde amont |
|---|---|---|
| **Fluvial** | $U < c$ | $c' < 0$ : remonte vers l'amont |
| **Critique** | $U = c$ | $c' = 0$ : reste immobile |
| **Torrentiel** | $U > c$ | $c' > 0$ : entraînée vers l'aval |

:::tip Influence aval
Dans le cas où la vitesse du fluide est **supérieure** à la célérité de l'onde
$c$, l'amont n'est pas influencé par les conditions hydrauliques à l'aval
(**régime torrentiel**). Dans le cas contraire, on a une remontée de l'onde qui
vient perturber l'amont (**régime fluvial**) : ce phénomène est appelé
**influence aval**.
:::

### Simulation interactive

La scène 3D ci-dessous illustre la propagation des deux ondes de gravité à
partir d'une perturbation, pour les trois régimes (fluvial, critique,
torrentiel). Faites varier la vitesse de l'écoulement dans le panneau de
droite pour observer le changement de régime en direct.

<iframe
  src="/interactifs/froude-ondes-gravite.html"
  title="Ondes de gravité et nombre de Froude — simulation interactive"
  height="600"
  loading="lazy">
</iframe>

[Ouvrir la simulation en plein écran ↗](pathname:///interactifs/froude-ondes-gravite.html)

## Nombre de Froude

Afin de déterminer le régime d'écoulement, on utilise le **nombre de
Froude**, défini comme le rapport de la vitesse de l'écoulement sur la
célérité des ondes de surface :

$$
\mathrm{Fr} = \frac{U}{c}, \qquad c^2 = g\,H_h, \qquad
\boxed{\;\mathrm{Fr} = \dfrac{U}{\sqrt{g\,H_h}}\;}
$$

où $H_h = S/B$ est la **profondeur hydraulique** définie au chapitre
précédent — c'est elle, et non le diamètre hydraulique $D_h$, qui gouverne la
célérité des ondes de gravité : $c$ dépend de la largeur au miroir $B$ au
travers de $H_h$, pas du périmètre mouillé $P$ dont dépend $D_h = 4R_h = 4S/P$.

| | $\mathrm{Fr} < 1$ | $\mathrm{Fr} = 1$ | $\mathrm{Fr} > 1$ |
|---|---|---|---|
| Régime | fluvial (sous-critique) | critique | torrentiel (supercritique) |
| Onde amont | remonte | immobile | emportée vers l'aval |

:::caution Attention — ne pas confondre Froude et Reynolds
Le nombre de Reynolds caractérise, quant à lui, la **turbulence** : c'est le
rapport entre les forces d'inertie et les forces de viscosité. Dans les
écoulements à surface libre, sa formulation utilise le rayon hydraulique :

$$
\mathrm{Re} = \frac{R_h\,U}{\nu}
$$

| Régime | Condition |
|---|---|
| Laminaire | $\mathrm{Re} < 500$ |
| Transition | $500 < \mathrm{Re} < 1000$ |
| Turbulent | $\mathrm{Re} > 1000$ |

Ces seuils (exprimés avec $R_h$) varient selon les ouvrages de référence —
certains auteurs retiennent un seuil turbulent plus élevé. À utiliser avec la
même convention que le reste du cours.
:::
