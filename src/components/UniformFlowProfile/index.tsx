import type {ReactNode} from 'react';
import styles from './styles.module.css';

/**
 * Profil en long d'un écoulement permanent et uniforme : fond, surface libre
 * et ligne de charge sont trois droites parallèles, décalées respectivement
 * de h (tirant d'eau) et de U²/2g (hauteur cinétique), tous deux constants
 * entre les sections 1 et 2.
 */
export default function UniformFlowProfile(): ReactNode {
  // Géométrie du profil (unités SVG arbitraires).
  const xLeft = 40;
  const xRight = 600;
  const yBase = 290;

  const bedLeft = 150;
  const bedRight = 190;
  const depth = 60; // h, constant
  const headVel = 40; // U²/2g, constant

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
  const atX = (x: number) => (x - xLeft) / (xRight - xLeft);

  const bed = (x: number) => lerp(bedLeft, bedRight, atX(x));
  const surface = (x: number) => bed(x) - depth;
  const energy = (x: number) => surface(x) - headVel;

  const x1 = 180;
  const x2 = 460;
  const hOffset = 56; // décalage horizontal de la ligne H par rapport à la section

  const section = (x: number, index: 1 | 2) => {
    const zTop = bed(x);
    const sTop = surface(x);
    const eTop = energy(x);
    const xH = x + hOffset;
    return (
      <g key={index}>
        {/* z : du fond au niveau de référence */}
        <line
          className={styles.zLine}
          x1={x}
          y1={yBase}
          x2={x}
          y2={zTop}
          markerStart="url(#arrow-z-start)"
          markerEnd="url(#arrow-z-end)"
        />
        <text className={styles.zLabel} x={x - 10} y={(yBase + zTop) / 2} textAnchor="end">
          z<tspan baselineShift="sub" fontSize="0.7em">{index}</tspan>
        </text>

        {/* h : du fond à la surface libre */}
        <line
          className={styles.hLine}
          x1={x}
          y1={zTop}
          x2={x}
          y2={sTop}
          markerStart="url(#arrow-h-start)"
          markerEnd="url(#arrow-h-end)"
        />
        <text className={styles.hLabel} x={x + 10} y={(zTop + sTop) / 2} textAnchor="start">
          h<tspan baselineShift="sub" fontSize="0.7em">{index}</tspan>
        </text>

        {/* U²/2g : de la surface libre à la ligne de charge */}
        <line
          className={styles.vLine}
          x1={x}
          y1={sTop}
          x2={x}
          y2={eTop}
          markerEnd="url(#arrow-v-end)"
        />
        <text className={styles.vLabel} x={x + 8} y={(sTop + eTop) / 2} textAnchor="start" dominantBaseline="middle">
          U<tspan baselineShift="sub" fontSize="0.7em">{index}</tspan>
          <tspan baselineShift="super" fontSize="0.7em">2</tspan>/2g
        </text>

        {/* H : du niveau de référence à la ligne de charge */}
        <line
          className={styles.HLine}
          x1={xH}
          y1={yBase}
          x2={xH}
          y2={eTop}
        />
        <text className={styles.HLabel} x={xH + 10} y={eTop + 18} textAnchor="start">
          H<tspan baselineShift="sub" fontSize="0.7em">{index}</tspan>
        </text>
      </g>
    );
  };

  return (
    <figure className={styles.figure}>
      <svg viewBox="0 0 660 320" className={styles.svg} role="img" aria-label="Profil en long d'un écoulement uniforme : fond, surface libre et ligne de charge sont trois droites parallèles.">
        <defs>
          <marker id="arrow-z-end" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 Z" className={styles.zFill} />
          </marker>
          <marker id="arrow-z-start" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M10,0 L0,5 L10,10 Z" className={styles.zFill} />
          </marker>
          <marker id="arrow-h-end" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 Z" className={styles.hFill} />
          </marker>
          <marker id="arrow-h-start" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M10,0 L0,5 L10,10 Z" className={styles.hFill} />
          </marker>
          <marker id="arrow-v-end" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 Z" className={styles.vFill} />
          </marker>
        </defs>

        {/* Ligne horizontale de référence (pointillée) */}
        <line
          className={styles.refLine}
          x1={xLeft}
          y1={energy(xLeft) - 18}
          x2={xRight}
          y2={energy(xLeft) - 18}
        />

        {/* Ligne de charge */}
        <line className={styles.energyLine} x1={xLeft} y1={energy(xLeft)} x2={xRight} y2={energy(xRight)} />
        <text className={styles.lineLabel} x={xRight + 6} y={energy(xRight)} fill="var(--uf-energy)">
          ligne de charge
        </text>

        {/* Surface libre */}
        <line className={styles.surfaceLine} x1={xLeft} y1={surface(xLeft)} x2={xRight} y2={surface(xRight)} />
        <text className={styles.lineLabel} x={xRight + 6} y={surface(xRight)} fill="var(--uf-surface)">
          surface libre
        </text>

        {/* Fond du canal, avec hachures */}
        <line className={styles.bedLine} x1={xLeft} y1={bed(xLeft)} x2={xRight} y2={bed(xRight)} />
        {Array.from({length: 19}).map((_, i) => {
          const x = xLeft + ((xRight - xLeft) / 18) * i;
          const y = bed(x);
          return (
            <line
              key={i}
              className={styles.hatch}
              x1={x - 6}
              y1={y + 12}
              x2={x + 6}
              y2={y}
            />
          );
        })}
        <text className={styles.lineLabel} x={xRight + 6} y={bed(xRight)}>
          fond
        </text>

        {/* Ligne de base (référence horizontale basse, z = 0) */}
        <line className={styles.baseLine} x1={xLeft - 20} y1={yBase} x2={xRight} y2={yBase} />

        {section(x1, 1)}
        {section(x2, 2)}
      </svg>
      <figcaption className={styles.caption}>
        Profil en long d'un écoulement uniforme : entre les sections 1 et 2, le
        tirant d'eau <em>h</em> et la hauteur cinétique <em>U²/2g</em> restent
        constants — fond, surface libre et ligne de charge sont trois droites
        parallèles.
      </figcaption>
    </figure>
  );
}
