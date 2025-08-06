import { SearchBar } from './SearchBar';
import { TagList } from './TagList';

interface HeaderProps {
  value: string;
  onTermChange: (term: string) => void;
  onSearch: () => void;
  onClear: () => void;
  onTagSelect: (tag: string) => void;
}

const tags = ['Fail', 'Dog what', 'Excited', 'Salsa', 'Funny cat', 'Reaction', 'Excited Dance', 'Laughing' ]

export function Header({ value, onTermChange, onSearch, onClear, onTagSelect }: HeaderProps) {

  return (
    <header className="sticky top-0 z-10 bg-secondary text-white">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <h1 className="text-5xl font-bold text-center mb-6 text-primary animate-bounce">GIPHY</h1>
        <SearchBar
          value={value}
          onTermChange={onTermChange}
          onSearch={onSearch}
          onClear={onClear}
        />
        <TagList tags={tags} onSelect={onTagSelect} />
      </div>
    </header>
  )
}