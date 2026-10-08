---
title: Perte de charge et formule de Chézy
sidebar_label: Perte de charge & Chézy
sidebar_position: 4
---

# Perte de charge d'un écoulement uniforme

## Analyse dimensionnelle

On détermine la perte de charge à partir de l'analyse dimensionnelle, en
supposant que la relation est un produit de puissance :

$$
\frac{\Delta p}{\Delta l} = \xi \cdot R_h^{\,a} \cdot U^{\,b} \cdot \rho^{\,c}
$$

où $\xi$ est une constante adimensionnelle. La relation dimensionnelle
s'écrit :

$$
ML^{-2}T^{-2} = (L)^a\,(LT^{-1})^b\,(ML^{-3})^c
$$

ce qui donne :

$$
\frac{\Delta p}{\Delta l} = \xi \cdot \frac{\rho\,U^2}{R_h}
$$

En régime uniforme, $J = i$, et :

$$
J = i = \left(\frac{\Delta p}{\Delta l}\right)\cdot\frac{1}{\rho g}
\quad\Longrightarrow\quad
\boxed{\,J = i = \frac{\xi}{g}\cdot\frac{U^2}{R_h}\,}
$$

# Formule de Chézy

Cette expression, développée par l'ingénieur français **Antoine Chézy** en
1769 (Chow, 1959), fait le lien entre l'hydrodynamique — à travers la vitesse
moyenne $U$ de l'écoulement — et les caractéristiques géométriques du canal :
son rayon hydraulique $R_h$ et sa pente $i$. Elle provient directement de
l'analyse dimensionnelle précédente :

$$
i = J = \frac{\xi}{g}\left(\frac{U^2}{R_h}\right) = C^{-2}\left(\frac{U^2}{R_h}\right)
\quad\Longrightarrow\quad
\boxed{\,U = C\sqrt{R_h\, i}\,}
$$

$C$ est un coefficient, appelé **coefficient de Chézy**, devant être déterminé
par l'expérience. Plusieurs auteurs ont proposé des quantifications de $C$,
parmi lesquels Kutter, Bazin, Manning-Strickler, etc. (Chow, 1959).

## Formules de Bazin et de Kutter

$$
C_{\text{Bazin}} = \frac{87\sqrt{R_h}}{K_B + \sqrt{R_h}}, \qquad
C_{\text{Kutter}} = \frac{100\sqrt{R_h}}{K_K + \sqrt{R_h}}
$$

Ces relations ne sont valables qu'en régime **turbulent rugueux**. $K_B$ et
$K_K$ dépendent de la rugosité des parois et sont donnés par les tableaux
suivants.

### Coefficient $K_B$ (Bazin)

| N° | Caractéristiques | $K_B\ (\mathrm{m^{1/2}})$ |
|---|---|---|
| 1 | Canaux en béton bien lissé ; canaux en bois raboté, avec la plus grande dimension des planches selon la direction du courant ; parois métalliques sans rouille et décrochements dans les joints *(plan du canal en tronçons longs raccordés par des courbes à grand rayon ; eau claire)* | 0,06 |
| 2 | Canaux en béton, revêtus mais non complètement lissés, avec des décrochements peu importants dans les joints ; canaux en bois raboté aux joints réguliers sans décrochements ; canaux en maçonnerie régulière de pierre de taille | 0,16 |
| 3 | Canaux en béton, partiellement revêtus, avec des joints saillants, eau peu claire, végétation et mousse ; canaux revêtus en pierres sèches | 0,46 |
| 4 | Canaux en terre de section régulière, végétation peu haute sur le fond, sans végétation, courbes amples ; canaux en maçonnerie régulière, fond lisse par dépôt de vase | 0,85 |
| 5 | Canaux en terre de section régulière, végétation peu haute sur le fond, végétation courte sur les berges ; cours d'eau naturels réguliers, sans végétation ni grands dépôts | 1,30 |
| 6 | Canaux en terre mal entretenus, végétation sur le fond et les berges ; canaux en terre exécutés par excavateurs mécaniques, mal entretenus | 1,75 |

### Coefficient $K_K$ (Kutter)

| N° | Caractéristiques | $K_K\ (\mathrm{m^{1/2}})$ |
|---|---|---|
| 1 | Parois en béton bien lissé, section demi-circulaire | 0,12 |
| 2 | Idem, section rectangulaire | 0,15 |
| 3 | Parois en bois raboté, section rectangulaire | 0,20 |
| 4 | Parois en bois non raboté, section trapézoïdale ou rectangulaire ; maçonnerie très régulière avec pierres de taille | 0,25 |
| 5 | Parois en maçonnerie ordinaire, construction soignée | 0,35 |
| 6 | Parois en maçonnerie ayant déjà subi des réparations | 0,45 |
| 7 | Parois revêtues en pierres ordinaires | 0,55 |
| 8 | Parois en maçonnerie, fond vaseux | 0,75 |
| 9 | Parois en maçonnerie, à l'abandon | 1,00 |
| 10 | Petits canaux creusés dans le rocher ; canaux en terre bien réguliers, sans végétation | 1,25 à 1,50 |
| 11 | Canaux en terre, mal entretenus avec de la végétation ; cours d'eau naturels avec lit en terre | 1,75 à 2,00 |
| 12 | Canaux en terre complètement à l'abandon ; cours d'eau naturels avec lit en galets | 2,50 |
