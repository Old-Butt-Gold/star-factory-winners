import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Header from "./components/header/header.tsx";
import Main from "./pages/Main.tsx";
import About from "./pages/About.tsx";
import Winner from "./pages/Winner.tsx";
import Contacts from './pages/Contacts.tsx';
import Footer from './components/footer/footer.tsx';
import WinnerPage from './pages/WinnerPage/WinnerPage.tsx';

export default function App() {
    return (
        <BrowserRouter>
            <Header/>
            <main>
                <Routes>
                    <Route path="/star-factory-winners/" element={<Main />} />
                    <Route path="/star-factory-winners/about" element={<About />} />
                    <Route path="/star-factory-winners/winners" element={<Winner />} />
                    <Route path="/star-factory-winners/winners/:id" element={<WinnerPage />} />
                    <Route path="/star-factory-winners/contacts" element={<Contacts />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    )
}