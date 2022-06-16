import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PosterPagination } from '../PosterPagination';

const mockData = {
    totalResults: 50,
    page: 1,
    pageChange: jest.fn()
}
describe('group', function () {
    beforeEach(() => {
        render(<PosterPagination list={mockData} />);
    })
    test('render page numbers', async () => {
        let pagination = await screen.findByLabelText(/pagination/i);
        expect(pagination).toBeInTheDocument();
        expect(await screen.findByText(1)).toHaveAttribute("aria-current", "true")
    });
    test('check page count', async () => {
        let maxPage = Math.floor(mockData.totalResults / 10);
        let endPage = await screen.findByText(maxPage.toString());
        expect(endPage).toBeInTheDocument();
    });
    test('click nextpage page', async () => {
        let nextPageBtn = await screen.findByLabelText(/Go to next page/i);
        fireEvent.click(nextPageBtn);
        expect(mockData.pageChange).toBeCalled();
        expect(mockData.pageChange.mock.calls[0][1]).toBe(2);
    });

    test('click jump two page', async () => {
        let pageBtn = await screen.findByText(3);
        fireEvent.click(pageBtn);
        expect(mockData.pageChange).toBeCalled();
        expect(mockData.pageChange.mock.calls[0][1]).toBe(3);
    });
});

test('check page zero status', async () => {
    mockData.totalResults = 0;
    render(<PosterPagination list={mockData} />);
    expect(await screen.queryByText("1")).toBeNull();
});
test('start different page ', async () => {
    mockData.page = 3;
    mockData.totalResults = 50;
    render(<PosterPagination list={mockData} />);
    expect(await screen.findByText(3)).toHaveAttribute("aria-current", "true")
});