import { useContext } from 'react';
import { Context } from '../../context/Context';
import styled from 'styled-components';
import cloud from '../../image/kisspng-cloud-strife-final-fantasy-vii-remake-dissidia-fin-tetsuya-naito-5ad27870e8cb98.8300417915237428329535.png';
import barret from '../../image/PngItem_4480426.png';

const StyledStarter = styled.div`
    position: relative;
    z-index: 10;
    width: 100%;
    height: 100%;
    padding: 20vh;

    div {
        width: 100%;
        height: 100%;
        padding: 8px;
        border: 5px solid black;
        border-radius: 16px;
        background-color: rgba(51, 86, 255, 0.6);
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        header {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
        }

        section {
            display: flex;
            justify-content: space-evenly;

            aside {
                display: flex;
                flex-direction: column;
                gap: 8px;
                justify-content: center;
                align-items: center;

                img {
                    height: 30vh;
                }

                button {
                    width: 200px;
                    height: 32px;
                    color: whitesmoke;
                    border: 2px solid whitesmoke;
                    border-radius: 9999px;
                    background-color: rgb(51, 86, 255);
                    cursor: pointer;
                    transition: all 300ms;
                    font-size: 18px;

                    :hover {
                        color: rgb(51, 86, 255);
                        border-color: rgb(51, 86, 255);
                        background-color: whitesmoke;
                        transform: scale(1.2);
                    }
                }
            }
        }
    }
`;

const Starter = () => {
    const context = useContext(Context)

    return (
        <StyledStarter>
            <div>
                <header>
                    <h1>VIDEO GAME TRIVIA with Final Fantasy VII look</h1>
                    <h2>Answer to 10 random videogames questions, see your score at the end!</h2>
                    <h3>Choose to play as Cloud or Barret from FF7 franchise!</h3>
                </header>
                <section>
                    <aside>
                        <h4>Limit: OMNISLASH</h4>
                        <p>Skip current question, get full points!</p>
                        <p>1 charge</p>
                        <img src={cloud} alt="Cloud" />
                        <button onClick={() => context.cloudToggler()}>Play</button>
                    </aside>
                    <aside>
                        <h4>Limit: CATASTROPHE</h4>
                        <p>Remove 2 wrong answers from current question!</p>
                        <p>2 charges</p>
                        <img src={barret} alt="Barret" />
                        <button onClick={() => context.barretToggler()}>Play</button>
                    </aside>
                </section>
            </div>
        </StyledStarter>
    )
};

export default Starter;