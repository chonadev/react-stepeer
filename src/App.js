import { Layout } from "./Layout";
import { DataProvider } from "./context/DataContext";


function App() {
  return (
    <DataProvider>
      <Layout />
    </DataProvider>
  );
}

export default App;
