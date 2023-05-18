import style from "./App.module.scss";
import { useAppSelector } from "./app/hooks";
import { getTemplatesStore } from "./app/store/TemplatesStore";
import EditorPage from "./pages/Editor/EditorPage";
import { Helmet } from "react-helmet";

/*todo: didnt like this way,better way*/
import './styles/themes/dark.css';
import './styles/themes/light.css';

function App() {
  const templatesLoader = useAppSelector(getTemplatesStore); //@todo pass current template to other child or find another way to get current template style
  const themeMode = useAppSelector((state) => state.appearance.themeMode);

    return (
        /*todo: didnt like this way,better way*/
        <div className={`${style.app} ${themeMode}-theme`}>

      {/*
      <Helmet>
        todo: improve this themeMode style
      </Helmet>*/}
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
