import logo from './logo.svg';
import './App.css';
import { Routes,BrowserRouter,Route } from 'react-router-dom';
import NavBar from './component/navbar'
import Home from './pages/Home'
import About from './pages/about'
import ArticlesListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import Bot from './component/dialog';

function App() {
  return (
    <div className=' min-h-screen'>
    <BrowserRouter>
    <NavBar/>
    <Bot/>
    <Routes>

<Route path='/' element={<Home/>} />
<Route path='/about' element={<About/>} />
<Route path="/articles" element={<ArticlesListPage />} />
 <Route path="/articles/:articleId" element={<ArticlePage />} />

</Routes>
    </BrowserRouter>
    </div>
   
  );
}

export default App;
