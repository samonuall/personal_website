import '@testing-library/jest-dom' 

// Mock the next/image component since it doesn't work in test environment
jest.mock('next/image', () => ({
    __esModule: true,
    default: (props) => {
      // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
      return <img {...props} />
    },
  }))