import {IGreetingsState} from './../Models/GreetingsModel';

export const init = {
    get state(): IGreetingsState {
        return {
            title: '¡Aloha!',
            home: {
                label: 'What the hell are u doin\'?',
                path: '/highway'
            }
        }
    }
}

export const GreetingsReducer = (state: IGreetingsState = init.state): IGreetingsState => {
    return state;
}
