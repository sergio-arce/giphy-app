import { TagList } from '@/components/TagList'
import { fireEvent, render, screen } from '@testing-library/react'
import { vi } from 'vitest'

describe('<TagList />', () => {
  const mockTags = ['react', 'typescript', 'testing']
  const mockOnSelect = vi.fn()

  it('should renders all tags', () => {
    render(<TagList tags={mockTags} onSelect={mockOnSelect}/>)
    mockTags.forEach(tag => {
      expect(screen.getByText(tag)).toBeInTheDocument()
    })
  }) 

  it('shoud call onSelect when is clicked', () => {
    render(<TagList tags={mockTags} onSelect={mockOnSelect}/>)

    fireEvent.click(screen.getByText('react'))
    expect(mockOnSelect).toHaveBeenCalledWith('react')
  })
})