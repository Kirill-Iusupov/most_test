import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import {
  BeanDetail,
  BeansPage,
  CombinationsPage,
  FactsPage,
  HistoryPage,
  RecipeDetailPage,
  RecipesPage,
} from "./pages";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<BeansPage />} />
          <Route path="/bean/:id" element={<BeanDetail />} />
          <Route path="/facts" element={<FactsPage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/recipe/:id" element={<RecipeDetailPage />} />
          <Route path="/combinations" element={<CombinationsPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
