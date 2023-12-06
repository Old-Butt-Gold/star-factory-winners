import About from '../components/about/about.tsx'
import Authors from '../components/authors/authors.tsx'
import Intro from '../components/intro/intro.tsx'
import WinnerOfTheDay from "../components/winnerOfTheDay/winnerOfTheDay.tsx";

export default function Main() {
    return (
        <div>
            <Intro />
            <About/>
            <WinnerOfTheDay />
            <Authors />
        </div>
    )
}