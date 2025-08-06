
interface Props {
  tags: string[]
  onSelect: (tag: string) => void
}

export function TagList({ tags, onSelect }: Props) {
  return (
    <div className="mt-4 overflow-x-auto">
      <div className="flex space-x-2 px-4">
        {tags.map(tag => (
          <button
            key={tag}
            onClick={() => onSelect(tag)}
            className="px-3.5 py-0.5 text-white bg-gray-700 whitespace-nowrap transition-colors duration-300 ease-out hover:bg-gray-700/80 hover:cursor-pointer"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}