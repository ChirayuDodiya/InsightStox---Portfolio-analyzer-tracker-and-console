import React from 'react'
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";

// Mocking the components
jest.mock("../../components/BotSidebar", () => () => <div data-testid="bot-sidebar">BotSidebar</div>);
jest.mock("../../components/ChatWindow", () => () => <div data-testid="chat-window">ChatWindow</div>);
jest.mock("../../components/Navbar", () => ({ darkMode, pageType, profileData }) => (
  <div data-testid="navbar">
    Navbar - {darkMode ? 'Dark' : 'Light'} Mode - {pageType} - {profileData.name}
  </div>
));

// Mocking the useAppContext hook
jest.mock("../../context/AppContext", () => ({
  useAppContext: () => ({
    darkMode: false,
    setDarkMode: jest.fn(),
  }),
}));

describe('Home() Home method', () => {
  // Happy Path Tests
  describe('Happy Paths', () => {
    it('should render the Home component with all child components', () => {
      // Render the Home component
      render(<AiInsight />);

      // Assert that all child components are rendered
      expect(screen.getByTestId('navbar')).toBeInTheDocument();
      expect(screen.getByTestId('bot-sidebar')).toBeInTheDocument();
      expect(screen.getByTestId('chat-window')).toBeInTheDocument();
    });

    it('should pass the correct props to Navbar component', () => {
      // Render the Home component
      render(<AiInsight />);

      // Assert that Navbar receives the correct props
      const navbar = screen.getByTestId('navbar');
      expect(navbar).toHaveTextContent('Light Mode');
      expect(navbar).toHaveTextContent('ai-insight');
      expect(navbar).toHaveTextContent('Ayush Dhamecha');
    });
  });

  // Edge Case Tests
  describe('Edge Cases', () => {
    it('should handle dark mode correctly', () => {
      // Mock the useAppContext hook to return darkMode as true
      jest.mock("../../context/AppContext", () => ({
        useAppContext: () => ({
          darkMode: true,
          setDarkMode: jest.fn(),
        }),
      }));

      // Render the Home component
      render(<AiInsight />);

      // Assert that Navbar displays dark mode
      const navbar = screen.getByTestId('navbar');
      expect(navbar).toHaveTextContent('Dark Mode');
    });

    it('should handle missing profile data gracefully', () => {
      // Mock the Navbar component to handle missing profile data
      jest.mock("../../components/Navbar", () => ({ darkMode, pageType, profileData }) => (
        <div data-testid="navbar">
          Navbar - {darkMode ? 'Dark' : 'Light'} Mode - {pageType} - {profileData?.name || 'No Name'}
        </div>
      ));

      // Render the Home component
      render(<AiInsight />);

      // Assert that Navbar handles missing profile data
      const navbar = screen.getByTestId('navbar');
      expect(navbar).toHaveTextContent('No Name');
    });
  });
});