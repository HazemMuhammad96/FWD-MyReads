import './App.css';
import { Route, Routes } from 'react-router';
import ShelfsPage from './components/ShelfsPage/ShelfsPage';
import SearchPage from './components/SearchPage/SearchPage';
import { useShelfs } from './hooks/ShelfsHooks';
import { ShelfsContext } from './contexts/ShelfsContext';

function App() {

  const [shelfsData, updateShelfs] = useShelfs({
    currentlyReading: {
      id: 'currentlyReading',
      name: "Currently Reading",
      books: [],
    },
    wantToRead: {
      id: 'wantToRead',
      name: "Want to Read",
      books: [],
    },
    read: {
      id: 'read',
      name: "Read",
      books: [],
    }
  });

  function onShelfChanged(book, shelf) {
    updateShelfs(book, shelf);
  }


  return (
    <ShelfsContext.Provider value={{ shelfsData, onShelfChanged }}>

      <div className="App">
        <Routes>
          <Route path="/" element={<ShelfsPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </div>
    </ShelfsContext.Provider>
  );
}

export default App;
