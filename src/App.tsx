import FunctionalComponent from "./components/FunctionalComponent.tsx";
import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
import ClassComponent from "./components/ClassComponent.tsx";

import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
import Card from "./components/Card.tsx";

function App() {

    const title="Functional with Props"

  return (
    <>
      <h1 className="-bg-conic-60 ">HALLP</h1>
      <FunctionalComponent />
      <ArrowFunctionalComponent  />
        <ClassComponent />
        <ArrowFunctionalComponentWithProps  title={title }/>
        <Card  title={title }>
            <div><p>lorem300</p></div>
        </Card>
    </>
  )
}

export default App
