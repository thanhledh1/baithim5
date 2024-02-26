
import { Route, Routes } from 'react-router-dom';
import NhanvienList from './pages/List';
import NhanvienCreate from './pages/Add';
import NhanvienEdit from './pages/Edit';
import NhanvienDelete from './pages/Delete';
import NhanvienDetail from './pages/Detail';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NhanvienList />} />
        <Route path="/create" element={<NhanvienCreate />} />
        <Route path="/edit/:id" element={<NhanvienEdit />} />
        <Route path="/delete/:id" element={<NhanvienDelete />} />
        <Route path="/details/:id" element={<NhanvienDetail />} />

      </Routes>
    </>
  );
}

export default App;