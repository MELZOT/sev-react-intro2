// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ClassComponent from "./components/ClassComponent.tsx";
//
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import Card from "./components/Card.tsx";

import Layout from "./components/layout/Layout.tsx";
//import Counter from "./components/Counter.tsx";
//import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
//import CounterAdvanced from "./components/CounterAdvanced.tsx";
//import NameChanger from "./components/NameChanger.tsx";
// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import NameChangerWithUseEffect from "./components/NameChangerWithUseEffect.tsx";
import {useEffect} from "react";
import NameChangerWithUseEffect from "./components/NameChangerWithUseEffect.tsx";

function App() {

    useEffect(() => {
        console.log("name" );
    }, []);
    // const title="Functional with Props"

  return (
    <>

            <Layout>
                {/*/!* MAIN CONTENT*!/*/}
                {/*<main className="container mx-auto p-8">*/}
                {/*    <h2>Main content</h2>*/}
                {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, tempora!</p>*/}
                {/*    <FunctionalComponent />*/}
                {/*</main>*/}
                {/*<CounterWithMoreStates  ></CounterWithMoreStates >*/}
                {/*<CounterAdvanced ></CounterAdvanced>*/}
                {/*<NameChangerWithUseEffect  ></NameChangerWithUseEffect>*/}
                {/*<CounterWithCustomHook></CounterWithCustomHook>*/}
                loremIpsum200
                <NameChangerWithUseEffect></NameChangerWithUseEffect>
            </Layout>


      {/*<h1 className="-bg-conic-60 ">HALLP</h1>*/}
      {/*<FunctionalComponent />*/}
      {/*<ArrowFunctionalComponent  />*/}
      {/*  <ClassComponent />*/}
      {/*  <ArrowFunctionalComponentWithProps  title={title }/>*/}
      {/*  <Card  title={title }>*/}
      {/*      <div><p>lorem300</p></div>*/}
      {/*  </Card>*/}
    </>
  )
}

export default App
