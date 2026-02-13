import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useRef } from "react";

const ScrollTriggers = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Title Animation
        gsap.from(".title", {
            opacity: 0,
            x: 100,
            ease: "none",
            scrollTrigger: {
                trigger: ".title",
                start: "top 85%",
                end: "top 50%",
                scrub: 1,
                // markers: true,
            },
        });

        // Content Boxes Animation
        gsap.from(containerRef.current.children, {
            y: 80,
            opacity: 0,
            stagger: 0.3,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
                end: "bottom 60%",
                scrub: 1,
                // markers: true,
            },
        });

    }, []);

    return (
        <>
            <div className="bg-black text-white min-h-screen p-10 space-y-10">

                <h1 className="text-3xl font-bold">
                    Understanding{" "}
                    <span className="bg-yellow-500 px-3 py-1 rounded title">
            GSAP ScrollTrigger
          </span>
                </h1>

                {/* Content Container */}
                <div className="flex flex-col gap-1" ref={containerRef}>

                    <div className="bg-blue-600 p-6 rounded-lg">
                        <h2 className="text-xl font-semibold mb-2">
                            What is ScrollTrigger?
                        </h2>
                        <p>
                            ScrollTrigger is a powerful GSAP plugin that allows animations
                            to be triggered and controlled based on the user's scroll position.
                            It connects animation progress directly to scrolling.
                        </p>
                    </div>

                    <div className="bg-purple-600 p-6 rounded-lg">
                        <h2 className="text-xl font-semibold mb-2">
                            Why Use ScrollTrigger?
                        </h2>
                        <p>
                            It helps create interactive and dynamic web experiences.
                            You can start animations when elements enter the viewport,
                            sync animations with scroll movement, or pin sections while scrolling.
                        </p>
                    </div>

                    <div className="bg-green-600 p-6 rounded-lg">
                        <h2 className="text-xl font-semibold mb-2">
                            Basic Concept
                        </h2>
                        <p>
                            ScrollTrigger watches the scroll position of the page and
                            activates animations when a specified element reaches a
                            defined position in the viewport.
                        </p>
                    </div>

                    <div className="bg-red-600 p-6 rounded-lg">
                        <h2 className="text-xl font-semibold mb-2">
                            Key Features
                        </h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Trigger animations on scroll</li>
                            <li>Control start and end points</li>
                            <li>Sync animation progress with scroll (scrub)</li>
                            <li>Pin elements during scroll</li>
                            <li>Create advanced scroll-based storytelling effects</li>
                        </ul>
                    </div>

                </div>

            </div>

            {/* Extra Scroll Space */}
            <div className="h-screen bg-black"></div>
        </>
    );
};

export default ScrollTriggers;
