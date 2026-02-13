import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {useRef} from "react";


const GsapTimeline = () => {

    const containerRef = useRef(null);
    const timelineRef = useRef(null);
    useGSAP(()=>{
        timelineRef.current = gsap.timeline({paused : true});
        timelineRef.current.to(containerRef.current.children, {
            y : -100,
            duration : 1,
            ease : "power3.inOut",
            stagger : 0.3,
        }).to(containerRef.current.children, {
            x : 100,
            duration : 1,
            ease : "power3.in",
            borderRadius : "0%",
            stagger : {
                amount : 0.3,
                from : "end",
            },

        },"-=0.1").to(containerRef.current.children, {
            rotate : 270,
            duration : 1,
            stagger : 0.3,
            borderRadius : "100%",
            ease : "circ.inOut",
        },"-=0.5").to(containerRef.current.children, {
            scale : 2,
            duration : 1,
            stagger : 0.3,
            borderRadius : "100%",
            ease : "circ.inOut",
        },"-=0.5").to(containerRef.current.children, {
            x  : -100,
            duration : 1,
            stagger : 0.3,
            borderRadius : "100%",
            ease : "circ.inOut",
        },"-=0.5").to(containerRef.current.children, {
            scale : 1,
            duration : 1,
            stagger : 0.3,
            borderRadius : "100%",
            ease : "circ.inOut",
        },"-=0.5").to(containerRef.current.children, {
            x : 0,
            duration : 1,

            borderRadius : "100%",
            ease : "circ.inOut",
        },"-=0.5").to(containerRef.current.children, {
            y : 0,
            duration : 1,
            stagger : {
                amount : 0.3,
                from : "center",
            },
            borderRadius : "100%",
            ease : "circ.inOut",

        },"-=0.7").to(containerRef.current.children, {
            y : -100,
            duration : 1,
            stagger : {
                amount : 0.3,
                from : "center",
            },

            ease : "power2.inOut",

        },"-=0.5").to(containerRef.current.children, {
            y : 0,
            duration : 1,
            stagger : {
                amount : 0.3,
                from : "center",
            },
            borderRadius : "100%",
            ease : "circ.inOut",

        },"-=0.7")
    },[])
    return (
        <>
            <div className="text-white p-10 space-y-6">

                <h1 className="text-3xl font-bold">
                    Understanding{" "}
                    <span className="bg-orange-500 px-3 py-1 rounded">
            GSAP Timeline
          </span>
                </h1>

                {/* What is Timeline */}
                <div className="bg-blue-600 p-6 rounded-lg">
                    <h2 className="text-xl font-semibold mb-2">
                        What is GSAP Timeline?
                    </h2>
                    <p>
                        A Timeline in GSAP allows you to control multiple animations
                        in sequence. Instead of writing separate animations, you can
                        organize them inside a single timeline.
                    </p>
                </div>

                {/* Why Use Timeline */}
                <div className="bg-purple-600 p-6 rounded-lg">
                    <h2 className="text-xl font-semibold mb-2">
                        Why Use Timeline?
                    </h2>
                    <p>
                        Timelines help you manage complex animations easily.
                        You can control order, delays, overlaps, and even replay
                        or reverse the entire animation.
                    </p>
                </div>

                {/* Basic Syntax */}
                <div className="bg-green-600 p-6 rounded-lg">
                    <h2 className="text-xl font-semibold mb-2">
                        Basic Syntax
                    </h2>
                    <code className="block mt-2">
                        const tl = gsap.timeline();
                        <br />
                        tl.to(".box1", {"{ x: 100 }"})
                        <br />
                        &nbsp;&nbsp;.to(".box2", {"{ y: 100 }"})
                        <br />
                        &nbsp;&nbsp;.to(".box3", {"{ opacity: 0 }"});
                    </code>
                </div>

                {/* Key Features */}
                <div className="bg-red-600 p-6 rounded-lg">
                    <h2 className="text-xl font-semibold mb-2">
                        Key Features
                    </h2>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Controls multiple animations in order</li>
                        <li>Supports delays and overlapping animations</li>
                        <li>Can be paused, played, reversed, or restarted</li>
                        <li>Makes complex animations clean and structured</li>
                    </ul>
                </div>

                <div className="gap-10 flex">
                    <button className="p-2 px-3 rounded-sm bg-purple-500" onClick={() => {timelineRef.current.play()}}>Play</button>
                    <button className="p-2 px-3 rounded-sm bg-yellow-500" onClick={()=>{timelineRef.current.pause()}}>Pause</button>
                    <button className="p-2 px-3 rounded-sm bg-teal-500" onClick={()=>{timelineRef.current.reverse()}}>Reverse</button>
                    <button className="p-2 px-3 rounded-sm bg-pink-500" onClick={()=>{timelineRef.current.restart()}}>Restart</button>
                    <button className="p-2 px-5 rounded-sm bg-cyan-400" onClick={() => timelineRef.current.timeScale(0.5)}>
                        Slow Motion
                    </button>

                    <button className="p-2 px-5 rounded-sm bg-blue-400" onClick={() => timelineRef.current.timeScale(2)}>
                        Fast Forward
                    </button>

                </div>

                <div className="flex justify-center h-100 items-center p-5 gap-2" ref={containerRef}>
                    <div className="h-16 w-16 bg-orange-200 rounded-full box"></div>
                    <div className="h-16 w-16 bg-orange-300 rounded-full box"></div>
                    <div className="h-16 w-16 bg-orange-400 rounded-full box"></div>
                    <div className="h-16 w-16 bg-orange-500 rounded-full box"></div>
                    <div className="h-16 w-16 bg-orange-600 rounded-full box"></div>
                </div>

            </div>
        </>
    );
};

export default GsapTimeline;
