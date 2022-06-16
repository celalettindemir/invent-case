import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../../services/store';
import { HorizontalFilter } from '../HorizontalFilter';

test('render filter button', async () => {
    render(<Provider store={store}><HorizontalFilter /></Provider>);
    let filterButton = await screen.findByRole("button");
    expect(filterButton).toBeInTheDocument();
});

test('renders filter button options', async () => {
    render(<Provider store={store}><HorizontalFilter /></Provider>);
    let filterButton = await screen.findByRole("button");
    // const linkElement = screen.getByText("Invent");
    expect(filterButton).toBeInTheDocument();

    await userEvent.click(filterButton);
    let clearButton = await screen.findByText(/clear/i);
    let applyButton = await screen.findByText(/apply/i);
    expect(clearButton).toBeInTheDocument();
    expect(applyButton).toBeInTheDocument();
});
test('renders filter inputs', async () => {
    render(<Provider store={store}><HorizontalFilter /></Provider>);
    let filterButton = await screen.findByRole("button");
    // const linkElement = screen.getByText("Invent");
    expect(filterButton).toBeInTheDocument();

    await userEvent.click(filterButton);
    let filterOptions = await screen.findAllByRole("button");
    expect(filterOptions).toHaveLength(2);
});