import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsDataType = {
    id: number
    name:string
}

export type MessagesDataType = {
    id: number
    message:string
}


let posts:Array<PostType> = [
    {id: 1, message: "Hi", likesCount: 15},
    {id: 2, message: "How is your it-kamasutra", likesCount: 14},
    {id: 3, message: "yo", likesCount: 9},
    {id: 4, message: "полный пипец", likesCount: 10},
    {id: 5, message: "Hi", likesCount: 25},
]

let dialogs:Array<DialogsDataType> = [
    {id:1, name: "Stanislav"},
    {id:1, name: "Egor"},
    {id:1, name: "Sofia"},
    {id:1, name: "Natalia"},
    {id:1, name: "Alexey"},
    {id:1, name: "Artur"},
]

let messages:Array<MessagesDataType> = [
    {id:1, message: "Hi"},
    {id:2, message: "How is your it-kamasutra"},
    {id:3, message: "yo"},
    {id:4, message: "полный пипец"},
    {id:5, message: "Hi"},
]



ReactDOM.render(<App posts={posts} dialogsData={dialogs} messagesData={messages}/>,document.getElementById('root'));