import { useColorTheme } from "./useColorTheme";
import "./App.css";

export default function App() {
  const { colorTheme, toggleColorTheme } = useColorTheme();

  const onChangeTheme = () => {
    toggleColorTheme();
  };

  return (
    <div className="wrapper">
      <p className="text">Hello world</p>
      <button onClick={onChangeTheme}>Change</button>
    </div>
  );
}