import { useContext } from 'react';
import { Context } from '../../context/Context';
import styled from 'styled-components';

const StyledFinal = styled.div`
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
            align-items: center;
            gap: 8px;

            button {
                width: 200px;
                min-height: 50px;
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

            section {
                height: 100%;
                overflow: auto;

                aside {
                    padding: 16px;

                    h3, h4 {
                        margin-bottom: 8px;
                    }

                    h5 {
                        margin-top: 8px;
                    }
                }
            }
        }

`;

const Final = () => {
    const context = useContext(Context)

    return (
        <StyledFinal>
            <div>
                <h1>Thank you for playing!</h1>
                <p>Total points: {context.points}</p>
                <button onClick={() => context.refreshPage()}>PLAY AGAIN</button>
                <section>
                    {
                        context.questions.map((question, index) =>
                            <aside key={index}>
                                <h3>Question n° {index}</h3>
                                <h4>{question.question}</h4>
                                <p>{question.incorrect_answers[0]}</p>
                                <p>{question.incorrect_answers[1]}</p>
                                <p>{question.incorrect_answers[2]}</p>
                                <p>{question.correct_answer}</p>
                                <h5>Your answer: <span>{context.answers[index]}</span></h5>
                                {
                                    context.answers[index] === question.correct_answer
                                        ? <h5>CORRECT</h5>
                                        : <h5>WRONG</h5>
                                }
                            </aside>
                        )
                    }
                </section>
            </div>
        </StyledFinal>
    )
};

export default Final;