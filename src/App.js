import React, { useContext, useEffect } from 'react'
import { Context } from './context/Context'
import styled from 'styled-components';
import Home from './components/pages/Home'

const Styledbg = styled.div`
    background-color: black;
    z-index: -1;
`;

const App = () => {
  const context = useContext(Context)

  useEffect(() => {
    context.apiCall()
      .then(answer => {
        context.setQuestions(answer.results)
      })
  }, []);

  return (
    <Styledbg>
      <Home />
    </Styledbg>
  )
}

export default App;