import React from 'react';
import { AppProps } from 'next/app';


/**
 * @export
 * @component
 * @name Application
 *
 * @description
 * Responsável por conter os estilos gerais e o state management.
 */
const Application = ({ Component, pageProps }: AppProps) => (
    <Component {...pageProps} />
);

export default Application;
