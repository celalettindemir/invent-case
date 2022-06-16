
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../services/store";
import { Detail } from "../Detail";

const mockedDetail = jest.fn();
jest.mock('../../../services', () => ({
    ...jest.requireActual('../../../services'),
    detailAction: () => mockedDetail
}));


jest.mock('../../../services/selectors', () => ({
    ...jest.requireActual('../../../services/selectors'),
    selectDetail: () => {
        return mockData
    }
}));
type Props = {
    data: {
        Poster?: string,
        Title?: string,
        Runtime?: string,
        Genre?: string,
        Director?: string,
        Actors?: string,
        imdbRating?: string,
        imdbID?: string
    },
    errorMessage: boolean,
    isLoading: boolean
};
const mockData: Props = {
    data: {
        Poster: "/usr/image",
        Title: "Pokemon",
        Runtime: "1996",
        Genre: "/usr/url",
        Director: "/usr/url",
        Actors: "/usr/url",
        imdbRating: "b18654",
        imdbID: "b18654"

    },
    errorMessage: false,
    isLoading: false
}
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => { return ({ imdbId: "b1459" }) }
}));
test('render page', async () => {
    render(<Provider store={store}><Detail /></Provider>);
    expect(await screen.findByRole("Title")).toHaveTextContent(mockData.data.Title);
    expect(await screen.findByRole("Runtime")).toHaveTextContent(mockData.data.Runtime);
    expect(await screen.findByRole("Genre")).toHaveTextContent(mockData.data.Genre);
    expect(await screen.findByRole("Director")).toHaveTextContent(mockData.data.Director);
    expect(await screen.findByRole("Actors")).toHaveTextContent(mockData.data.Actors);
    expect(await screen.findByRole("imdbRating")).toHaveTextContent(mockData.data.imdbRating);
    expect(await screen.findByAltText("poster")).toHaveAttribute('src', mockData.data.Poster);
});
test('render page without image', async () => {
    mockData.data.Poster = "";
    render(<Provider store={store}><Detail /></Provider>);
    expect(await screen.findByRole("Title")).toHaveTextContent(mockData.data.Title);
    expect(await screen.findByRole("Runtime")).toHaveTextContent(mockData.data.Runtime);
    expect(await screen.findByRole("Genre")).toHaveTextContent(mockData.data.Genre);
    expect(await screen.findByRole("Director")).toHaveTextContent(mockData.data.Director);
    expect(await screen.findByRole("Actors")).toHaveTextContent(mockData.data.Actors);
    expect(await screen.findByRole("imdbRating")).toHaveTextContent(mockData.data.imdbRating);
    expect(await screen.findByAltText("poster")).toHaveAttribute('src', "https://via.placeholder.com/150");
});
test('check isloading status', async () => {
    mockData.isLoading = true;
    render(<Provider store={store}><Detail /></Provider>);
    let progres = await screen.findByRole("progressbar");
    expect(progres).toBeInTheDocument();
});

test('check no data action', async () => {
    mockData.isLoading = false;
    mockData.data = {};
    render(<Provider store={store}><Detail /></Provider>);
    let progres = await screen.findByRole("progressbar");
    expect(progres).toBeInTheDocument();
    expect(mockedDetail).toBeCalled();
});