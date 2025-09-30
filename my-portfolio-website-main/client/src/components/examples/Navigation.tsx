import Navigation from "../Navigation";
import { ThemeProvider } from "../ThemeProvider";

export default function NavigationExample() {
  return (
    <ThemeProvider>
      <Navigation />
      <div className="pt-20 p-8">
        <p>Navigation component preview</p>
      </div>
    </ThemeProvider>
  );
}
