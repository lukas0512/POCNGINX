import React, { useEffect, useState } from 'react';
import {Container} from './Journey.styled';
import ProgressBar from './components/ProgressBar';


/**
 * @export
 * @component
 * @name JourneyScreen
 *
 * @description
 * Responsável pelo wrapper da home page.
 */
export const JourneyScreen = (): JSX.Element => {
  const [valueProgress, setValueProgress] = useState(0);
  useEffect(()=>{
    setTimeout(()=> {
      if(valueProgress < 100){
        setValueProgress(valueProgress + 10);
      }else {
        setValueProgress(0);
      }
    }, 1500)
  })
  return(
  <>
    <Container>
      <img
          src="/images/logotipo.png"
          alt="Logotipo"
          width={250}
          height={250}
        />
        <h1>Admin </h1>
    </Container>
    <Container>
      <ProgressBar percent={valueProgress} />
    </Container>
  </>
);
}
