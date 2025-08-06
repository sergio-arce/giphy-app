import { Loader2 } from 'lucide-react';

export function Loader() {
  return (
    <div className="flex justify-center items-center py-8">
      <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
      <span className="ml-2 text-gray-500">Loading more GIFs...</span>
    </div>
  );
}