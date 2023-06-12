import { Menu } from '@stories/Organisms/Menu';
import { useAppState } from './AppContext';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const appState = useAppState();

  return (
    <main className={appState.theme}>
      <Menu />
      {children}
    </main>
  );
};
