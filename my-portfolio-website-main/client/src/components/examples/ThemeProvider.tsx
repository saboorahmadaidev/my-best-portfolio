import { ThemeProvider } from "../ThemeProvider";

export default function ThemeProviderExample() {
  return (
    <ThemeProvider>
      <div className="p-8 min-h-screen">
        <p className="text-foreground">Theme provider is active</p>
      </div>
    </ThemeProvider>
  );
}
