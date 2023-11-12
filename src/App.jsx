import { useGlobalContext } from './context';

const App = () => {
  const { isSidebarOpen } = useGlobalContext();
  return <h2>Strapi Starter</h2>;
};
export default App;
