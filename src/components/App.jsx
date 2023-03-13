import { Searchbar } from './searchbar/Searchbar';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>App</h1>
      <Searchbar />
    </div>
  );
};
