import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../services/store";
import { Home } from "../Home";

const mockedNavigate = jest.fn();

jest.mock('../../../services/selectors', () => ({
    ...jest.requireActual('../../../services/selectors'),
    selectSearch: () => {
        return mockData
    }
}));

const mockData = {
    data: {
        Search: [{
            Title: "Pokemon",
            Year: "1996",
            Poster: "/usr/url",
            imdbID: "b18654"
        }, {
            Title: "Hades",
            Year: "1886",
            Poster: "/usr/url1",
            imdbID: "b128654"
        }],
        totalResults: 5
    },
    errorMessage: false,
    isLoading: false
}
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate
}));

test('render page', async () => {
    render(<Provider store={store}><Home /></Provider>);
    expect(await screen.findAllByRole("posterItem")).toHaveLength(2);
    expect(await screen.queryByText(/Film Bulunamadı/i)).toBeNull();
});

test('check loading status', async () => {
    mockData.isLoading = true;
    render(<Provider store={store}><Home /></Provider>);
    expect(await screen.findByRole("progressbar")).toBeInTheDocument();
});
test('render no data', async () => {
    mockData.isLoading = false;
    mockData.data.Search = [];
    render(<Provider store={store}><Home /></Provider>);
    expect(await screen.queryByText("posterItem")).toBeNull();
    expect(await screen.queryByText(/Film Bulunamadı/i)).toBeNull();
});
test('check error status', async () => {
    mockData.isLoading = false;
    mockData.errorMessage = true;
    mockData.data.Search = [];
    render(<Provider store={store}><Home /></Provider>);
    expect(await screen.findByText(/Film Bulunamadı/i)).toBeInTheDocument();
});