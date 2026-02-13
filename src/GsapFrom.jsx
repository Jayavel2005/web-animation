import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import { useRef} from "react";

const GsapFrom = () => {
    const orangeBox = useRef(null);
    useGSAP(()=>{

        gsap.to(orangeBox.current,
            {
                x : 300,
                rotation : 180,
                scale : 1.2,
                duration : 1.5,
                borderRadius : "50%",
                ease : "power1.inOut",
                yoyo : true,
                repeat : -1,
            })

    },[])

    return (
        <>
            <div className="p-10 space-y-6">
                <h1 className="text-2xl font-bold text-white">
                    Here We are working on{" "}
                    <span className="bg-amber-600 p-2 rounded-sm  text-white">
            gsap.from()
          </span>
                </h1>

                <p className="text-white">
                    <strong>gsap.from()</strong> is a method in GSAP that animates an
                    element from a specific starting state to its default state.
                </p>

                <p className="text-white">
                    It means you define how the element should look at the beginning,
                    and GSAP smoothly transitions it to its original CSS position and values.
                </p>

                <div className="bg-gray-100 p-4 rounded">
                    <h2 className="font-semibold mb-2">Basic Syntax:</h2>
                    <code>
                        gsap.from(target, {"{ property: value, duration: 1 }"})
                    </code>
                </div>

                <div className="bg-gray-100 p-4 rounded">
                    <h2 className="font-semibold mb-2">Common Properties:</h2>
                    <ul className="list-disc pl-5 space-y-1">
                        <li><strong>x / y</strong> – Move element horizontally or vertically</li>
                        <li><strong>opacity</strong> – Control transparency</li>
                        <li><strong>scale</strong> – Resize element</li>
                        <li><strong>rotation</strong> – Rotate element</li>
                        <li><strong>duration</strong> – Time taken for animation</li>
                        <li><strong>delay</strong> – Wait time before animation starts</li>
                    </ul>
                </div>

                <p className="text-white">
                    It is mainly used for entry animations like fade-in effects,
                    sliding elements into view, or scaling elements when a page loads.
                </p>

                <div className="h-30 w-30 bg-orange-500" ref={orangeBox}></div>
            </div>
        </>
    );
};

export default GsapFrom;
