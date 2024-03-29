import {useState} from "react";
import './index.css'
import Header from "./components/Header.jsx";
import {ways, differences} from './data/data.js'
import WayToTeach from "./components/WayToTeach.jsx";
import Button from "./components/Button/Button.jsx";


function App() {
    var [content, setContent] = useState('Нажми на кнопку')

    console.log("App RENDER")
    function handleClick(type) {
        setContent(type)
        console.log(content)
    }

    return (
        <div>
            <Header/>
            <a href="https://youtu.be/kz23xxukY5s?t=4876">Lesson</a>
            <h1>ТУТ ПРОДОЛЖЕНИЕ</h1>
            <main>
                <section>
                    <h3>Наш подход к обучению</h3>
                    <ul>
                        <WayToTeach
                            title={ways[0].title}
                            description={ways[0].description}
                        />
                        <WayToTeach
                            {...ways[1]}
                        />
                        <WayToTeach
                            {...ways[2]}
                        />
                        <WayToTeach
                            {...ways[3]}
                        />
                    </ul>

                </section>
                <section>
                    <h3>Чем отличаемся от других</h3>
                    <Button onClick={() => handleClick('way')}>Подход</Button>
                    <Button onClick={() => handleClick('easy')}>Доступность</Button>
                    <Button onClick={() => handleClick('program')}>Концентрация</Button>

                    <p>{differences[content]}</p>
                </section>
            </main>
        </div>
    )
}

export default App
