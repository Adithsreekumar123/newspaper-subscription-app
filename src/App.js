import logo from './logo.svg';
import './App.css';
import AddSubscribersPage from './components/AddSubscribersPage';
import SearchSubscribersPage from './components/SearchSubscribersPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DeleteSubscribersPage from './components/DeleteSubscribersPage';
import ViewSubscribersPage from './components/ViewSubscribersPage';

function App() {
  return (

    <BrowserRouter>
      <Routes>


        <Route path='/' element={<AddSubscribersPage />} />
        <Route path='/view' element={<ViewSubscribersPage />} />
        <Route path='/search' element={<SearchSubscribersPage />} />
        <Route path='/delete' element={<DeleteSubscribersPage />} />
       


      </Routes>
    </BrowserRouter>

  );
}

export default App;
