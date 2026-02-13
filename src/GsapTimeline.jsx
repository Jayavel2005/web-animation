import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GsapTimeline = () => {
    const containerRef = useRef(null);
    const timelineRef = useRef(null);

    useGSAP(() => {
        const boxes = containerRef.current.children;

        timelineRef.current = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=2000", // controls scroll length
                scrub: 1,
                pin: true,
                markers: true,
            },
        });

        timelineRef.current
            .to(boxes, {
                y: -100,
                stagger: 0.3,
                ease: "none",
            })
            .to(
                boxes,
                {
                    x: 100,
                    borderRadius: "0%",
                    stagger: { amount: 0.3, from: "end" },
                    ease: "none",
                },
                "-=0.2"
            )
            .to(
                boxes,
                {
                    rotate: 270,
                    borderRadius: "100%",
                    stagger: 0.3,
                    ease: "none",
                },
                "-=0.4"
            )
            .to(
                boxes,
                {
                    scale: 2,
                    stagger: 0.3,
                    ease: "none",
                },
                "-=0.4"
            )
            .to(
                boxes,
                {
                    x: -100,
                    stagger: 0.3,
                    ease: "none",
                },
                "-=0.4"
            )
            .to(
                boxes,
                {
                    scale: 1,
                    stagger: 0.3,
                    ease: "none",
                },
                "-=0.4"
            )
            .to(
                boxes,
                {
                    x: 0,
                    ease: "none",
                },
                "-=0.4"
            )
            .to(
                boxes,
                {
                    y: 0,
                    stagger: { amount: 0.3, from: "center" },
                    ease: "none",
                },
                "-=0.6"
            );
    }, []);

    return (
        <div className="text-white">
            {/* Top Spacer (important for smooth scroll entry) */}
            <div className="h-screen flex items-center justify-center bg-gray-900">
                <h1 className="text-4xl font-bold">
                    Scroll Down to See Timeline Animation
                </h1>
            </div>

            {/* Pinned Section */}
            <div
                ref={containerRef}
                className="flex justify-center items-center h-screen gap-4 bg-black"
            >
                <div className="h-16 w-16 bg-orange-200 rounded-full"></div>
                <div className="h-16 w-16 bg-orange-300 rounded-full"></div>
                <div className="h-16 w-16 bg-orange-400 rounded-full"></div>
                <div className="h-16 w-16 bg-orange-500 rounded-full"></div>
                <div className="h-16 w-16 bg-orange-600 rounded-full"></div>
            </div>

            {/* Bottom Spacer */}
            <div className="h-screen bg-gray-900"></div>
        </div>
    );
};

export default GsapTimeline;
