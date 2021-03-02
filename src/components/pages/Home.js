import { useContext } from 'react';
import { Context } from '../../context/Context';
import styled from 'styled-components';
// import bgVideo from '../../video/bg.mp4';

// pieces
import Starter from '../pieces/Starter';
import Question from '../pieces/Question';
import Final from '../pieces/Final';

const StyledHome = styled.div`
    width: 100vw;
    height: 100vh;
    color: whitesmoke;
`;

const StyledBgVideo = styled.video`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: 0.5;
`;

const Home = () => {
    const context = useContext(Context)

    return (
        <StyledHome>
            <StyledBgVideo autoPlay loop muted>
                {/* <source src={bgVideo} type='video/mp4' /> */}
            </StyledBgVideo>
            {
                context.play
                    ? <>
                        {
                            context.nextQuestion <= 11
                                ? <Question random={context.rollDice}/>
                                : <Final />
                        }
                    </>
                    : <Starter />
            }
        </StyledHome>
    )
};

export default Home;
