---
title: Charge hydraulique
sidebar_label: Charge hydraulique
sidebar_position: 2
---

# Charge hydraulique

## Charge hydraulique en un point liquide en mouvement

Par définition, la charge hydraulique en un point $P$ d'une ligne de courant
est :

$$
H = z + \frac{p}{\gamma_w} + \frac{v^2}{2g}
$$

$\Delta z$ désigne la différence d'altitude entre la surface libre et le point
$P$. La pression relative en $P$ est égale à :

$$
p = \gamma_w\,\Delta z = \gamma_w\, y_P \cos\alpha
$$

où $\alpha$ est l'angle que fait le fond avec l'horizontale, et $y_P$ la
profondeur du point $P$ mesurée perpendiculairement au fond.

## Approximation des faibles pentes

Dans les problèmes courants de rivières ou de canaux, la pente est très
faible, ce qui implique :

$$
\cos\alpha \approx 1 \quad\Longrightarrow\quad p = \gamma_w\, y_P
$$

Donc, en hydraulique à surface libre et pour une pente faible, la charge
hydraulique s'écrit :

$$
\boxed{\,H = z + y_P + \frac{v^2}{2g}\,}
$$

Pour un point pris au fond du canal, $y_P$ coïncide avec le tirant d'eau $h$,
d'où la forme la plus courante $H = z + h + v^2/2g$ utilisée dans la suite du
cours.

## Charge spécifique

La **charge spécifique** est la charge moyenne mesurée par rapport au fond du
chenal :

$$
H_s = H - z = \frac{p}{\gamma_w} + \frac{v^2}{2g} = y_P + \frac{v^2}{2g}
$$

Elle élimine l'altitude $z$ du fond et ne conserve que ce qui est disponible
localement : c'est la grandeur centrale du chapitre suivant (énergie
spécifique et régime critique).
