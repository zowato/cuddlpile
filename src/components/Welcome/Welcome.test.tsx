import { render, screen } from '@test-utils';
import { Welcome } from './Welcome';

describe('Welcome component', () => {
  it('shows the party title', () => {
    render(<Welcome />);
    expect(screen.getByText('Willkommen zur CuddlPile Party')).toBeInTheDocument();
  });
});
