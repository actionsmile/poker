export interface IGreetingsState {
    title: string;
    home?: ILink;
}

export interface ILink {
    label: string;
    path: string;
}
