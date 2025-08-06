import type { GiphyResponse } from "@/interfaces/giphy";

const LIMIT = 25;
const { VITE_GIF_API_KEY, VITE_GIF_URL } = import.meta.env

export async function fetchGifs(search = '', offset = 0): Promise<GiphyResponse> {
  const endpoint = search ? `${VITE_GIF_URL}search` : `${VITE_GIF_URL}trending`

  const params = new URLSearchParams({
    api_key: VITE_GIF_API_KEY,
    limit: LIMIT.toString(),
    offset: offset.toString(),
    ...(search && { q: search }),
  });

  const res = await fetch(`${endpoint}?${params}`);
  if (!res.ok) throw new Error('Error fetching GIFs');
  return res.json();
}