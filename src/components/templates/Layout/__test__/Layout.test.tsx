import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../../services/store';
import { Layout } from '../Layout';



beforeEach(() => {
    render(<Provider store={store}><Layout><h1>hello-word</h1></Layout></Provider>);
})
test('render Layout', async () => {
    expect(await screen.findByText("hello-word")).toBeInTheDocument();
});