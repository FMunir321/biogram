import { BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from "./routes";
import { SocketProvider } from "./context/SocketContext";

function App() {
  return (
    <Router>
      <SocketProvider>
        <RoutesComponent />
      </SocketProvider>
    </Router>
  );
}

export default App;
