import GsapFrom from "./GsapFrom.jsx";
import GsapStagger from "./GsapStagger.jsx";
import GsapTimeline from "./GsapTimeline.jsx";
import ScrollTriggers from "./ScrollTriggers.jsx";


const App = () =>{
    return(
      <>
        <main className="bg-slate-900 min-h-screen lg:px-24 xl:px-48 overflow-hidden">
            <GsapFrom/>
            <GsapStagger/>
            <GsapTimeline/>
            <ScrollTriggers/>
        </main>
      </>
  )
}

export default App;