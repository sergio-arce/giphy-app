import { Search, X } from 'lucide-react';
import type { FormEvent } from 'react';

interface SearchBarProps {
  value: string;
  onTermChange: (value: string) => void;
  onSearch: () => void;
  onClear: () => void;
}

export function SearchBar({ value, onTermChange, onSearch, onClear }: SearchBarProps) {

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    onSearch(); 
  }
  return (
    <form
      onSubmit={handleSearch}
      className="flex gap-2 max-w-md mx-auto relative"
    >
      <Search className="absolute z-10 left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-primary"/>
      <input 
        type="text"
        placeholder="Search GIFs..."
        value={value}
        onChange={e => onTermChange(e.target.value)}
        className="block w-full p-2 ps-12 text-sm text-gray-900 border focus:outline dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      
      />
      {value && (
        <button type="button" onClick={onClear} className="absolute right-28 top-1/2 -translate-y-1/2 text-gray-400 hover:cursor-pointer">
          <X className="w-4 h-4 text-primary" />
        </button>
      )}
      <button 
        type="submit"
        className='bg-primary text-white transition-colors duration-300 ease-out hover:bg-primary/80 px-4 hover:cursor-pointer'   
      >
        Search
      </button>
    </form>
  )
}