import React from 'react';

import {
  ContainerProgressStyled,
  ProgressStyled,
  ContainerStyled,
  PercentStyled,
} from './styled';

type ProgressBarProps = {
  percent: number;
};

/**
 * @export
 * @component
 * @name ProgressBar
 *
 * @description
 * Componente responsável por montar o ProgressBar.
 */
export const ProgressBar = ({ percent }: ProgressBarProps): JSX.Element => {
  function progress() {
    if (percent < 0) {
      return 0;
    }
    if (percent > 100) {
      return 100;
    }
    return percent;
  }
  return (
    <ContainerStyled>
      <ContainerProgressStyled>
        <ProgressStyled percent={progress()} />
      </ContainerProgressStyled>
      <PercentStyled>{percent}%</PercentStyled>
    </ContainerStyled>
  );
};
