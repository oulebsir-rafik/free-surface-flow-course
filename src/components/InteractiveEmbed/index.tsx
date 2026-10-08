import type {ReactNode} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

type Props = {
  /** Chemin de la ressource statique, relatif à static/ (ex. "/interactifs/foo.html"). */
  src: string;
  title: string;
  height?: number;
};

/**
 * Intègre une page HTML statique (simulation, visualisation…) dans une leçon,
 * en résolvant correctement le baseUrl du site (nécessaire sur GitHub Pages,
 * où le site est servi sous un sous-chemin comme /nom-du-depot/).
 *
 * Un <iframe src="/..."> brut ignore le baseUrl et pointe vers la racine du
 * domaine : useBaseUrl() corrige ce chemin pour qu'il reste valide une fois
 * déployé.
 */
export default function InteractiveEmbed({
  src,
  title,
  height = 600,
}: Props): ReactNode {
  const resolvedSrc = useBaseUrl(src);
  return (
    <div>
      <iframe src={resolvedSrc} title={title} height={height} loading="lazy" />
      <p>
        <a href={resolvedSrc} target="_blank" rel="noopener noreferrer">
          Ouvrir la simulation en plein écran ↗
        </a>
      </p>
    </div>
  );
}
