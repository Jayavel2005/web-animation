import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {useRef} from "react";
const GsapStagger = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from(containerRef.current.children, {
            x: -100,
            opacity: 0,
            scale : 2.5,
            stagger: {
                amount: 0.4,
                from : "end",
            },
            duration: 1,
            rotation: 360,
            borderRadius: "100%",
            ease: "elastic.inOut"
        });
    }, []);
    return (
        <>
            <div className="p-10 space-y-6  text-white">

                <h1 className="text-3xl font-bold">
                    Understanding{" "}
                    <span className="bg-yellow-500 px-3 py-1 rounded">
            GSAP Stagger
          </span>
                </h1>

                {/* Definition */}
                <div className="bg-blue-600 p-6 rounded-lg">
                    <h2 className="text-xl font-semibold mb-2">What is Stagger?</h2>
                    <p>
                        Stagger in GSAP allows multiple elements to animate one after
                        another instead of all at the same time.
                    </p>
                </div>

                {/* Why Use */}
                <div className="bg-purple-600 p-6 rounded-lg">
                    <h2 className="text-xl font-semibold mb-2">Why Use Stagger?</h2>
                    <p>
                        It creates a smooth sequence effect and makes animations look
                        more professional and dynamic.
                    </p>
                </div>

                {/* Syntax */}
                <div className="bg-green-600 p-6 rounded-lg">
                    <h2 className="text-xl font-semibold mb-2">Basic Syntax</h2>
                    <code className="block mt-2">
                        gsap.to(".box", {"{ x: 100, duration: 1, stagger: 0.2 }"})
                    </code>
                </div>

                {/* How it Works */}
                <div className="bg-red-600 p-6 rounded-lg">
                    <h2 className="text-xl font-semibold mb-2">How It Works</h2>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>stagger: 0.2 → 0.2 seconds delay between each element</li>
                        <li>Creates wave-like animation patterns</li>
                        <li>Best for lists, grids, and text reveals</li>
                    </ul>
                </div>


            {/*    animation*/}
                <div className="flex justify-center  p-5 gap-2" ref={containerRef}>
                    <div className="h-16 w-16 bg-purple-200 rounded-full box"></div>
                    <div className="h-16 w-16 bg-purple-300 rounded-full box"></div>
                    <div className="h-16 w-16 bg-purple-400 rounded-full box"></div>
                    <div className="h-16 w-16 bg-purple-500 rounded-full box"></div>
                    <div className="h-16 w-16 bg-purple-600 rounded-full box"></div>
                </div>


            </div>
        </>
    );
};

export default GsapStagger;
