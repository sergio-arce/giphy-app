import type { GiphyGif } from '@/interfaces/giphy';

export function GifCard({ gif }: { gif: GiphyGif }) {
  return (
    <div 
      className="group relative overflow-hidden bg-gray-500 hover:shadow-lg transition-shadow"
      // Ratio de aspecto para evitar CLS (se ajusta según el formato de los GIFs)
      style={{ aspectRatio: `${gif.images.fixed_height.width}/${gif.images.fixed_height.height}` }}
    >
      <img
        src={gif.images.fixed_height.url}
        alt={gif.title || "GIF sin título"} // Fallback para accesibilidad
        width={gif.images.fixed_height.width}
        height={gif.images.fixed_height.height}
        className="w-full h-full object-cover"
        loading="lazy"
        decoding="async" // Mejora el rendimiento de carga
        crossOrigin="anonymous" // hace que los recursos de terceros no carguen cookies innecesarias
      />
      
      {/* Overlay con contraste accesible (negro/20 en hover) */}
      <div 
        className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"
        aria-hidden="true" // Oculta el div de los lectores de pantalla
      />
    </div>
  );
}
