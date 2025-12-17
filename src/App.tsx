import FunctionalComponent from "./components/FunctionalComponent.tsx";
import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
import ClassComponent from "./components/ClassComponent.tsx";

function App() {


  return (
    <>
      <h1 className="-bg-conic-60 ">HALLP</h1>
      <FunctionalComponent />
      <ArrowFunctionalComponent  />
        <ClassComponent />
    </>
  )
}

export default App
