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
                    <Route path="star/" element={<Main />} />
                    <Route path="star/about" element={<About />} />
                    <Route path="star/winners" element={<Winner />} />
                    <Route path="star/winners/:id" element={<WinnerPage />} />
                    <Route path="star/contacts" element={<Contacts />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    )
}