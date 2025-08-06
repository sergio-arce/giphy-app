import { Header } from '@/components/Header';
import { GifGrid } from '@/components/GifGrid';
import { Loader } from '@/components/Loader';
import { useGiphy } from '@/hooks/useGiphy';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';

export default function GiphyPage() {
  const { gifs, loading, hasMore, searchTerm, setSearchTerm, doSearch, loadMore } = useGiphy();
  const { lastRef } = useInfiniteScroll(loadMore, hasMore, loading);

  return (
    <div className="min-h-screen bg-secondary">
      <Header
        value={searchTerm}
        onTermChange={setSearchTerm}
        onSearch={() => doSearch(searchTerm)}
        onClear={() => doSearch('')}
        onTagSelect={tag => doSearch(tag)}
      />
      <main className="max-w-6xl mx-auto px-4 py-8">
        {gifs.length === 0 && !loading ? (
          <p className="text-center text-gray-500 py-12">
            No GIFs found. Try a different search term.
          </p>
        ) : (
          <GifGrid gifs={gifs} lastRef={lastRef} />
        )}
        {loading && <Loader />}
      </main>
    </div>
  );
}