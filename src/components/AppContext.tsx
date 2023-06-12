import { Button } from '@stories/Atoms/Button';
import { Modal } from '@stories/Atoms/Modal';
import { Paragraph } from '@stories/Atoms/Paragraph';
import { ReactNode, createContext, useContext, useState } from 'react';

type Themes = 'light' | 'dark';

type AppContextType = {
  theme: Themes;
  setTheme: (theme: Themes) => void;
  setShowNotInstagram: (show: boolean) => void;
  setShowKnots3d: (show: boolean) => void;
};

const AppContext = createContext<AppContextType>({} as AppContextType);

interface AppProvider {
  children: ReactNode;
}

const AppProvider: React.FC<AppProvider> = ({ children }) => {
  const [theme, setTheme] = useState<Themes>('light');
  const [showNotInstagram, setShowNotInstagram] = useState(false);
  const [showKnots3d, setShowKnots3d] = useState(false);

  return (
    <AppContext.Provider
      value={{ theme, setTheme, setShowNotInstagram, setShowKnots3d }}
    >
      {children}
      <Modal
        visible={showNotInstagram}
        close={() => setShowNotInstagram(false)}
      >
        <Paragraph>
          <>
            <b>Warning:</b> If you use a browser with fishing protection, the
            site is flagged as a scam. For example, with Chrome, you will need
            to click <i>&apos;Details&apos;</i> and then{' '}
            <i>&apos;visit this unsafe site&apos;</i>
          </>
        </Paragraph>
        <Paragraph>
          <>
            Please allow time for the free Heroku dyno to start, after that the
            page load will be much faster
          </>
        </Paragraph>
        <Button
          type="href"
          primary
          className="float-right"
          href={'https://not--instagram.herokuapp.com/'}
        >
          Continue
        </Button>
      </Modal>
      <Modal visible={showKnots3d} close={() => setShowKnots3d(false)}>
        <Paragraph>
          <>
            Please allow time for the free Heroku dyno to start, after that the
            page load will be much faster
          </>
        </Paragraph>
        <Button
          type="href"
          primary
          className="float-right"
          href={'https://sailing-knots-3d.herokuapp.com'}
        >
          Continue
        </Button>
      </Modal>
    </AppContext.Provider>
  );
};

const useAppState = () => useContext(AppContext);

export { AppProvider, useAppState };
