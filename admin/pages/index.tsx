import React from 'react';
import { NextPage } from 'next';

import JourneysScreens from '@screens/Journeys';

/**
 * @export
 * @component
 * @name IndexPage
 *
 * @description
 * Responsável pelo boot inicial.
 * https://github.com/celfinn/reactjs-template/blob/master/src/store/ducks/user.ts
 */
const IndexPage: NextPage = () => <JourneysScreens />;

export default IndexPage;
