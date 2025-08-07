import { GifGrid } from "@/components/GifGrid"
import type { GiphyGif } from "@/interfaces/giphy"
import { render, screen } from "@testing-library/react"

// Mock Masonry
vi.mock("react-masonry-css", () => ({
  default: ({ children, breakpointCols }: {
    children: React.ReactNode
    breakpointCols: Record<string, number>
  }) => (
    <div 
      data-testid="masonry-mock"
      data-breakpoints={JSON.stringify(breakpointCols)}
    >
      {children}
    </div>
  )
}))

describe('<GifGrid />', () => {

  const mockGifs: GiphyGif[] = [
    { id: 'gif1', title: 'Gif 1', images: { fixed_height: { url: 'url', width: '123', height: '123' } } },
    { id: 'gif2', title: 'Gif 2', images: { fixed_height: { url: 'url2', width: '1234', height: '123' } } },
  ]

  const mockLastRef = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should render Masonry component', () => {
    render(<GifGrid gifs={mockGifs} lastRef={mockLastRef} />)
    
    const masonry = screen.getByTestId('masonry-mock')
    expect(masonry).toBeInTheDocument()
  })

  it('should render correct number of gifs', () => {
    render(<GifGrid gifs={mockGifs} lastRef={mockLastRef} />)
    
    // Verifica que se rendericen todos los gifs
    const gifElements = screen.getAllByRole('img')
    expect(gifElements).toHaveLength(mockGifs.length)
  })
}) 