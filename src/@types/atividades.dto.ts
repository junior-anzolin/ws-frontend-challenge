import { ReactElement } from 'react';

export interface IAtividade {
    labelFilter: string;
    titleType: string;
    color: string;
    items: IItem[];
}

export interface IItem {
    icon: ReactElement;
    title: string;
    autor: string;
    data: string;
}
