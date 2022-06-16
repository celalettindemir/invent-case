import { SelectChangeEvent } from '@mui/material';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../services/store';
import { FilterElement } from '../FilterElement';
import { HorizontalFilter } from '../HorizontalFilter';

const mockData =
{
    title: 'Type',
    handleChange: jest.fn(),
    selected: '',
    selectList: [{ value: "movie", label: "Film" }, { value: "series", label: "Dizi" }, { value: "episode", label: "Sezon" }],
}

beforeEach(() => {
    let type = '';
    render(<FilterElement selectValue={mockData} />);
})
test('render filter button', async () => {
    let filterButton = await screen.findByRole("button");
    expect(filterButton).toBeInTheDocument();
});
test('render filter options', async () => {

    let filterButton = await screen.findByRole("button");
    expect(filterButton).toBeInTheDocument();
    userEvent.click(filterButton);
    let filterOption = await screen.findAllByRole("option");
    expect(filterOption).toHaveLength(3);
});

test('rselect option', async () => {
    let selectIndex = 1;
    let filterButton = await screen.findByRole("button");
    expect(filterButton).toBeInTheDocument();
    userEvent.click(filterButton);
    await userEvent.click(await screen.getByRole('option', { name: mockData.selectList[selectIndex].label }));
    expect(mockData.handleChange).toBeCalledTimes(1);
    //Mock function parameters
    expect((mockData.handleChange.mock.calls[0][0] as SelectChangeEvent).target.value).toBe(mockData.selectList[selectIndex].value)

});
