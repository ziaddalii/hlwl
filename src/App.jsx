import './App.css'
import MenuTabs from './components/Menu.jsx'
import { QueryClient, QueryClientProvider } from 'react-query';

// ==============================|| APP - THEME, ROUTER, LOCAL ||============================== //
const queryClient = new QueryClient();
function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <MenuTabs/>
    </QueryClientProvider>
  )
}

export default App
