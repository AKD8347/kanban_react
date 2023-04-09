import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';
import {Provider} from "react-redux";
import store from "./store";
import React from "react";

render(
    <Provider store={store}>
        <App/>
    </Provider>
);

test('contain Backlog-input', () => {
    const clickEvent = new MouseEvent('click')

    const btn = screen.getByTestId('Backlog-btn')
    fireEvent(btn, clickEvent)

    const input = screen.getByTestId('Backlog-input')

    expect(input).toBeInTheDocument()
    expect(btn).toBeInTheDocument()
});
