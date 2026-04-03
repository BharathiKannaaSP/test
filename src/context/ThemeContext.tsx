import { useState, type ReactNode } from 'react';
import { createContext } from 'react';

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState('light');
	const toggleTheme = (theme) => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
