import { useContext } from 'react';
import { Context } from '../../context/Context';
import styled from 'styled-components';

const StyledQuestion = styled.div`
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

        button {
            width: 200px;
            height: 50px;
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

    header {
            display: flex;
            justify-content: space-evenly;
            height: 100%;
            flex-direction: column;
            align-items: center;
            gap: 8px;

            aside{
                display: flex;
                flex-direction: column;
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

            }

            section {
                width: 100%;
                display: flex;
                gap: 8px;
                justify-content: space-between;

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

                    :nth-of-type(1) {
                        order: 1;
                    }
                    
                    :nth-of-type(2) {
                        order: 2;
                    }

                     :nth-of-type(3) {
                        order: 3;
                    }

                    :nth-of-type(4) {
                        order: ${({ random }) =>
        random === 0
            ? '0'
            : random === 1
                ? '1'
                : random === 2
                    ? '2'
                    : '3'
    };
                    }
                }

            
            }
    }
`;

const Question = ({ random }) => {
    const context = useContext(Context)

    return (
            <StyledQuestion random={random}>
                <div>
                    {
                        context.nextQuestion === 11
                            ? <header>
                                <h1>Good job!</h1>
                                <button onClick={() => context.pointsCounter()}>Show Score</button>
                            </header>
                            : <header>
                                <aside>
                                    <h1>Question n° {context.nextQuestion}</h1>
                                    <h2>{context.questionsList[0].question}</h2>
                                </aside>
                                <section>
                                    <button
                                        onClick={(e) => context.nextQuestionToggler(e)}
                                        value={context.questionsList[0].incorrect_answers[0]}>
                                        {context.questionsList[0].incorrect_answers[0]}
                                    </button>
                                    <button
                                        onClick={(e) => context.nextQuestionToggler(e)}
                                        value={context.questionsList[0].incorrect_answers[0]}>
                                        {context.questionsList[0].incorrect_answers[1]}
                                    </button>
                                    <button
                                        onClick={(e) => context.nextQuestionToggler(e)}
                                        value={context.questionsList[0].incorrect_answers[0]}>
                                        {context.questionsList[0].incorrect_answers[2]}
                                    </button>
                                    <button
                                        onClick={(e) => context.nextQuestionToggler(e)}
                                        value={context.questionsList[0].correct_answer}
                                    >
                                        {context.questionsList[0].correct_answer}
                                    </button>
                                </section>
                                {
                                    context.cloudLimit &&
                                    <aside>
                                        <p>Skip current question, get full points! (1 charge)</p>
                                        <button onClick={() => context.omnislash()} >OMNISLASH</button>
                                    </aside>
                                }
                                {
                                    context.barretLimit >= 1 &&
                                    <aside>
                                        <p>Remove 2 wrong answers from current question! (charges remaining {context.barretLimit})</p>
                                        <button onClick={() => context.catastrophe()} >CATASTROPHE</button>
                                    </aside>
                                }
                            </header>
                    }
                </div>
            </StyledQuestion>
    )
};

export default Question;