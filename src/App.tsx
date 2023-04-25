import style from "./App.module.scss";
import EditorPage from "./pages/Editor/EditorPage";

function App() {
  return (
      <div className={style.app}>
        <EditorPage />
      </div>
  );
}

export default App;
