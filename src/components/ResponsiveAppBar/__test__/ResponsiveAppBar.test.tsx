import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../services/store';
import { ResponsiveAppBar } from '../ResponsiveAppBar';



beforeEach(() => {
    render(<Provider store={store}><ResponsiveAppBar /></Provider>);
})
test('render header', async () => {
    let filterButton = await screen.findByText("Invent");
    expect(filterButton).toBeInTheDocument();
});