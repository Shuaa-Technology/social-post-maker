import styles from "./App.module.scss";
import { useAppSelector } from "./app/hooks";
import { getTemplatesStore } from "./app/store/TemplatesStore";
import EditorPage from "./pages/Editor/EditorPage";
import { Helmet } from "react-helmet";
import {getCurrentThemeMode} from "./app/store/ConfigStore";

function App() {
  const templatesLoader = useAppSelector(getTemplatesStore); //@todo pass current template to other child or find another way to get current template style
  const currentThemeMode = useAppSelector(getCurrentThemeMode);
    return (
      <div className={styles[currentThemeMode.handle]}>
        <Helmet>
          <style type="text/css">
            {templatesLoader.currentTemplate.style}
          </style>
        </Helmet>
        <EditorPage />
      </div>
  );
}

export default App;
