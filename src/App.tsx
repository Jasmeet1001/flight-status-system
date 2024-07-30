import AppRoutes from "./Routes";
import { cn } from "./utils/cn";

function App() {
  return (
    <div className={cn("antialiased", "font-heading", "font-body")}>
      <AppRoutes />
    </div>
  );
}

export default App;
