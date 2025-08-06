'use client';
import { useState, useCallback, useRef, useEffect } from 'react';
import { fetchGifs } from '@/services/api';
import type { GiphyGif } from '@/interfaces/giphy';

const LIMIT = 25;

export function useGiphy(initialSearch = '') {
  const [gifs, setGifs] = useState<GiphyGif[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [hasMore, setHasMore] = useState(true);

  const offsetRef = useRef(0);
  const didFetch = useRef(false);

  const load = useCallback(async (term: string, reset = false) => {
    setLoading(true);
    try {
      const { data } = await fetchGifs(term, offsetRef.current);
      setGifs(prev => (reset ? data : [...prev, ...data]));
      setHasMore(data.length === LIMIT);
    } catch (error) {
      console.error('Fetch error:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const doSearch = useCallback((term: string) => {
    offsetRef.current = 0;
    setSearchTerm(term);
    setGifs([]);
    load(term, true);
  },[load]);

  const loadMore = useCallback(() => {
    if (loading || !hasMore) return;
    offsetRef.current += LIMIT;
    load(searchTerm);
  }, [loading, hasMore, load, searchTerm]);

  useEffect(() => {
    if (!didFetch.current) {
      didFetch.current = true;
      doSearch(initialSearch);
    }
  }, [doSearch, initialSearch]);

  return { gifs, loading, searchTerm, hasMore, setSearchTerm, doSearch, loadMore };
}