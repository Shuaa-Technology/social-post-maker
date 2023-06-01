import styles from "./App.module.scss";
import { useAppSelector } from "./app/hooks";
import { getCurrentTemplate } from "./app/store/TemplatesStore";
import EditorPage from "./pages/Editor/EditorPage";
import { Helmet } from "react-helmet";
import { getCurrentThemeMode } from "./app/store/ConfigStore";
import { TemplateRenderer } from "./core/TemplateRenderer";

function App() {
  const currentTemplate = useAppSelector(getCurrentTemplate); //@todo pass current template to other child or find another way to get current template style
  const currentThemeMode = useAppSelector(getCurrentThemeMode);

  const style = new TemplateRenderer()
    .setTemplate(currentTemplate)
    .parse()
    .style();

  return (
    <div className={styles[currentThemeMode.handle]}>
      <Helmet>
        <style type="text/css">{style}</style>
      </Helmet>
      <EditorPage />
    </div>
  );
}

export default App;
