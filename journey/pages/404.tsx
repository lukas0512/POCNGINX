import React, { MouseEvent, useCallback } from 'react';
import { NextPage, NextPageContext } from 'next';


/**
 * @export
 * @component
 * @name Error
 *
 * @description
 * Responsável pelo pagina de erro da aplicação.
 *
 */
const Error: NextPage = () => {
  const handleRedirect = useCallback((event: MouseEvent) => {
    event.preventDefault();
  }, []);

  return (
    <h1> Erro !</h1>
  );
};

export default Error;
