import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Poster } from '../Poster';

const mockData =
{
    Title: "Pokemon",
    Year: "1996",
    Poster: "/url/test",
    imdbID: "b15666"
}

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate
}));

test('render poster', async () => {
    const { rerender } = render(<Poster movie={mockData} />);
    expect(await screen.findByText(mockData.Title)).toBeInTheDocument();
    expect(await screen.findByText(mockData.Year)).toBeInTheDocument();
    expect(await screen.findByText(mockData.imdbID)).toBeInTheDocument();
    expect(await screen.findByRole("image")).toHaveStyle(`backgroundImage:url('` + mockData.Poster + `')`)
});
test('render poster without image', async () => {
    mockData.Poster = "";
    render(<Poster movie={mockData} />);
    expect(await screen.findByText(mockData.Title)).toBeInTheDocument();
    expect(await screen.findByText(mockData.Year)).toBeInTheDocument();
    expect(await screen.findByText(mockData.imdbID)).toBeInTheDocument();
    expect(await screen.findByRole("image")).toHaveStyle(`backgroundImage:url(https://via.placeholder.com/150)`)
});
test('render poster N/A', async () => {
    mockData.Poster = "N/A";
    render(<Poster movie={mockData} />);
    expect(await screen.findByText(mockData.Title)).toBeInTheDocument();
    expect(await screen.findByText(mockData.Year)).toBeInTheDocument();
    expect(await screen.findByText(mockData.imdbID)).toBeInTheDocument();
    expect(await screen.findByRole("image")).toHaveStyle(`backgroundImage:url(https://via.placeholder.com/150)`)
});
test('click poster navigate detail', async () => {
    const errorFn = jest.fn();
    render(<Poster movie={mockData} />);
    let posterBtn = await screen.findByRole("poster");
    userEvent.click(posterBtn);
    expect(mockedNavigate).toBeCalledTimes(1);
    expect(mockedNavigate).toHaveBeenCalledWith('/detail/' + mockData.imdbID)

});