import { render, screen } from '@testing-library/react';
import { LoadingSpinner } from '../LoadingSpinner';

beforeEach(() => {
    render(<LoadingSpinner />);
})
test('render spinner', async () => {
    let progres = await screen.findByRole("progressbar");
    expect(progres).toBeInTheDocument();
});
