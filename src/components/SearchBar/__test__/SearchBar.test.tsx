
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../../services/store';
import { SearchBar } from '../SearchBar';

const mockData = {
    searchText: "Test",
    filterAction: jest.fn()
}

jest.mock('../../../services', () => ({
    ...jest.requireActual('../../../services'),
    useAppDispatch: () => jest.fn()
}));
beforeEach(() => {
    render(<Provider store={store}><SearchBar filter={mockData} /></Provider>);
})
test('render search text', async () => {
    let searchInput = await screen.getByLabelText("search");
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveValue(mockData.searchText);
});
test('enter search text', async () => {
    let searchInput = await screen.getByLabelText("search");
    userEvent.clear(searchInput);
    userEvent.type(searchInput, "Pokemon{enter}");
    expect(searchInput).toBeInTheDocument();
    expect(mockData.filterAction).toBeCalled();
    expect(mockData.filterAction).toBeCalledWith({ "s": "Pokemon" });
});