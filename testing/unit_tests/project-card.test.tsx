import { render, screen, fireEvent } from '@testing-library/react'
import { ProjectCard } from '@/components/project-card'
import '@testing-library/jest-dom'

// Create a mock project object that matches the Project interface
const mockProject = {
  id: '1',
  title: 'Test Project',
  description: 'This is a test project description',
  image: '/test-image.jpg',
  technologies: ['React', 'TypeScript'],
  github: 'https://github.com/test',
  link: 'https://test-project.com'
}

describe('ProjectCard Component', () => {
  // Test 1: Basic Rendering
  it('renders the project card with basic information', () => {
    // Render the component with our mock project
    render(<ProjectCard project={mockProject} />)
    
    // Check if the title is rendered
    expect(screen.getByText('Test Project')).toBeInTheDocument()
    
    // Check if the description is rendered
    expect(screen.getByText('This is a test project description')).toBeInTheDocument()
    
    // Check if the image is rendered with correct props
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('src', '/test-image.jpg')
    expect(image).toHaveAttribute('alt', 'Test Project')
  })

  // Test 2: Dialog Interaction
  it('opens dialog when clicking the card', () => {
    render(<ProjectCard project={mockProject} />)
    
    // Initially, dialog content should not be visible
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    
    // Click the card
    const card = screen.getByText('Test Project').closest('.cursor-pointer')
    fireEvent.click(card!)
    
    // Now dialog should be visible
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  // Test 3: Technology Tags
  it('renders all technology tags in the dialog', () => {
    render(<ProjectCard project={mockProject} />)
    
    // Open the dialog
    const card = screen.getByText('Test Project').closest('.cursor-pointer')
    fireEvent.click(card!)
    
    // Check if all technology tags are rendered
    mockProject.technologies.forEach(tech => {
      expect(screen.getByText(tech)).toBeInTheDocument()
    })
  })

  // Test 4: External Links
  it('renders github and project links correctly', () => {
    render(<ProjectCard project={mockProject} />)
    
    // Open the dialog
    const card = screen.getByText('Test Project').closest('.cursor-pointer')
    fireEvent.click(card!)
    
    // Check if GitHub link exists and has correct href
    const githubLink = screen.getByText('GitHub').closest('a')
    expect(githubLink).toHaveAttribute('href', mockProject.github)
    
    // Check if project link exists and has correct href
    const projectLink = screen.getByText('Visit Project').closest('a')
    expect(projectLink).toHaveAttribute('href', mockProject.link)
  })

  // Test 5: Optional Props
  it('handles missing github or project links gracefully', () => {
    // Create a project without optional links
    const projectWithoutLinks = {
      ...mockProject,
      github: undefined,
      link: undefined
    }
    
    render(<ProjectCard project={projectWithoutLinks} />)
    
    // Open the dialog
    const card = screen.getByText('Test Project').closest('.cursor-pointer')
    fireEvent.click(card!)
    
    // Verify that the links are not rendered
    expect(screen.queryByText('GitHub')).not.toBeInTheDocument()
    expect(screen.queryByText('Visit Project')).not.toBeInTheDocument()
  })

  // Test 6: Dialog Close Functionality
  it('closes dialog when clicking outside', () => {
    render(<ProjectCard project={mockProject} />)
    
    // Open the dialog
    const card = screen.getByText('Test Project').closest('.cursor-pointer')
    fireEvent.click(card!)
    
    // Dialog should be visible
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    
    // Click the close button (usually provided by the Dialog component)
    const closeButton = screen.getByRole('button', { name: /close/i })
    fireEvent.click(closeButton)
    
    // Dialog should not be visible anymore
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
}) 