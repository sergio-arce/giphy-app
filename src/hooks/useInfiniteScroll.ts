import { useEffect, useRef, useCallback } from 'react';

export function useInfiniteScroll(
  callback: () => void,
  hasMore: boolean,
  loading: boolean
) {
  const observer = useRef<IntersectionObserver | null>(null);
  const scrolled = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      scrolled.current = true;
      window.removeEventListener('scroll', handleScroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const lastRef = useCallback((node: HTMLDivElement) => {
    if (loading) return;
    observer.current?.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (!scrolled.current) return;
      if (entries[0].isIntersecting && hasMore) callback();
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore, callback])

  useEffect(() => () => observer.current?.disconnect(), []);

  return { lastRef };
}