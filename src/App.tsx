import styles from "./App.module.scss";
import { useAppSelector } from "./app/hooks";
import { getCurrentTemplate } from "./app/store/TemplatesStore";
import EditorPage from "./pages/Editor/EditorPage";
import { Helmet } from "react-helmet";
import { getCurrentThemeMode } from "./app/store/ConfigStore";
import { TemplateRenderer } from "./core/TemplateRenderer";
import {useEffect, useState} from "react";

function App() {
    const [isMobile, setIsMobile] = useState(false);
    const currentTemplate = useAppSelector(getCurrentTemplate); //@todo pass current template to other child or find another way to get current template style
    const currentThemeMode = useAppSelector(getCurrentThemeMode);

  const style = new TemplateRenderer()
    .setTemplate(currentTemplate)
    .parse()
    .style();

    useEffect(() => {
        const handleWindowResize = () => {
            setIsMobile(window.innerWidth < 1000);
        };

        // Attach the resize event listener
        window.addEventListener('resize', handleWindowResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

  return (
      <>
          {isMobile ? (
              <div className={styles.warningOverlay}>
                  <p>Oops! This app is designed for tablets and larger screens. For the best experience, please switch to a tablet or desktop device.</p>
              </div>
          ) : (
              <div className={styles[currentThemeMode.handle]}>
                  <Helmet>
                      <style type="text/css">{style}</style>
                  </Helmet>
                  <div className={styles.mobileContainer}>
                      <EditorPage />
                  </div>
              </div>
          )}
      </>
  );
}

export default App;
