import React, {
    useState,
    useEffect,
    useContext,
    createContext,
    FunctionComponent,
    ReactNode,
} from "react";
import ReactDOM from "react-dom";

export enum Theme {
    Light = "light",
    Dark = "dark",
}
type ThemeContextProps = {
    theme: Theme;
    toggleTheme: () => void;
};
/*** CONTEXT ***/
export const ThemeContext = createContext<
    ThemeContextProps | undefined
>(undefined);

type ThemeProviderProps = {
    children: ReactNode;
};
/*** PROVIDER ***/
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
    children,
}) => {
    const [theme, setTheme] = useState<Theme>(Theme.Light);

    // Check current system theme
    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme");
        if (localTheme) {
            setTheme(localTheme as Theme);
        } else if (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            setTheme(Theme.Dark);
        }
    }, []);

    const toggleTheme = () => {
        setTheme(theme => {
            const newTheme =
                theme === Theme.Light ? Theme.Dark : Theme.Light;
            window.localStorage.setItem("theme", newTheme);
            return newTheme;
        });
    };

    useEffect(() => {
        document.body.dataset.theme = theme;
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

/*** CUSTOM HOOK ***/
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error(
            "useTheme() must be used within a ThemeProvider",
        );
    }
    return context;
};

/*** APP ***/
const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
);

/*** BUTTON ***/
export const MyComponent: FunctionComponent = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div>
            <p>The current theme is {theme}.</p>
            <button onClick={toggleTheme}>Toggle theme</button>
        </div>
    );
};
