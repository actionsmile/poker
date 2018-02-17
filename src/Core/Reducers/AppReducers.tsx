import { combineReducers } from 'redux';
import {IAppState} from 'Core/Models/CoreModels';

import {GreetingsReducer as greetings} from './GreetingsReducer';

export const appReducers = combineReducers<IAppState>({
    greetings
});
