import { ThemeProvider } from "./context/ThemeContext";

import Form from "./components/Form";
import ToggleTheme from "./components/ToggleTheme";

import "./App.css";

export default function MyApp() {
  return (
    <ThemeProvider>
      <div>
        <Form />
        <ToggleTheme />
      </div>
    </ThemeProvider>
  );
}
