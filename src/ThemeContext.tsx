import React, {createContext, ReactNode, useContext, useState} from 'react';

type ThemeContexType = {
    theme: string;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContexType>({
    theme: 'light',
    toggleTheme: () => {},
});

export const ThemeProvider = ({children} : {children: ReactNode}) => {
    const [theme, setTheme] = useState<string>('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    }

    // Apply theme styles to body
    React.useEffect(() => {
        if (theme === 'light') {
            document.body.style.backgroundColor = '#ffffff';
            document.body.style.color = '#000000';
        } else {
            document.body.style.backgroundColor = '#000000';
            document.body.style.color = '#ffffff';
        }
        document.body.style.transition = 'all 0.3s ease';
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
