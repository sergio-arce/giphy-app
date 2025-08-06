import Masonry from 'react-masonry-css';
import type { GiphyGif } from '../interfaces/giphy';
import { GifCard } from './GiftCard';

// Configuración de puntos de ruptura para Tailwind
const breakpointCols = {
  default: 4,     // ≥1280px
  1024: 4,        // ≥1024px
  768: 3,         // ≥ 768px
  640: 2,         // ≥ 640px
  400: 1,           // < 640px
};

export function GifGrid({
  gifs,
  lastRef,
}: {
  gifs: GiphyGif[];
  lastRef: (node: HTMLDivElement) => void;
}) {
  return (
    <Masonry
      breakpointCols={breakpointCols}
      className="flex w-auto gap-2"
      columnClassName="flex flex-col gap-2"
    >
      {gifs.map((gif, index) => (
        <div
          key={gif.id + index}
          ref={index === gifs.length - 1 ? lastRef : null}
        >
          <GifCard gif={gif} />
        </div>
      ))}
    </Masonry>
  );
}
