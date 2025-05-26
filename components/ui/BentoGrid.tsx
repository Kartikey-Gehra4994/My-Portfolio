"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { IoCodeOutline } from "react-icons/io5";
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import MagicButton from "./MagicButton";

const ConfettiLottie = dynamic(() => import("./ConfettiLottie"), { ssr: false });

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    id,
    img,
    imgClassName,
    titleClassName,
    spareImg,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    id?: number;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard
            .writeText("kartikgehra@gmail.com")
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            })
            .catch((err) => {
                console.error("Failed to copy:", err);
                alert("Copy failed. Try again.");
            });
    };

    return (
        <div
            className={cn(
                "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
                className
            )}
            style={{
                backgroundColor: "rgba(4,7,29,1)",
                background: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
        >
            <div className={`${id === 6 ? "flex justify-center" : ""} h-full`}>
                {/* Background image */}
                {img && (
                    <img
                        src={img}
                        alt="background"
                        className={cn(
                            imgClassName,
                            "absolute z-0 object-cover object-center pointer-events-none w-full h-full"
                        )}
                    />
                )}

                {/* Spare image */}
                {spareImg && (
                    <div className={`absolute right-0 -bottom-5 ${id === 5 ? "w-full opacity-80" : ""}`}>
                        <img
                            src={spareImg}
                            alt="overlay"
                            className="object-cover object-center w-full h-full pointer-events-none"
                        />
                    </div>
                )}

                {/* Gradient Animation */}
                {id === 6 && <BackgroundGradientAnimation />}

                {/* Content */}
                <div
                    className={cn(
                        titleClassName,
                        "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
                    )}
                >
                    <div className="font-sans text-sm font-extralight text-[#c1c2d3] md:text-xs lg:text-base z-10">
                        {description}
                    </div>
                    <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">{title}</div>

                    {/* Custom Content by ID */}
                    <div>
                        {id === 2 && <GlobeDemo />}

                        {id === 3 && (
                            <div className="flex gap-1 lg:gap-5 w-fit absolute right-3 top-0 lg:-right-2">
                                <div className="flex flex-col gap-3 lg:gap-6">
                                    {["React.js", "Next.js", "JavaScript"].map((item) => (
                                        <span
                                            key={item}
                                            className="py-2 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                    <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                                </div>
                                <div className="flex flex-col gap-3 lg:gap-6">
                                    <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                                    {["Node.js", "Express.js", "Mongodb"].map((item) => (
                                        <span
                                            key={item}
                                            className="py-2 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {id === 6 && (
                            <div className="mt-5 relative z-40 pointer-events-auto">
                                {copied && (
                                    <div className="flex justify-center">
                                        <div className="absolute top-[-200px] w-full">
                                            <ConfettiLottie copied={copied} />
                                        </div>
                                    </div>
                                )}
                                <div className="z-50">
                                    <MagicButton
                                        title={copied ? "Email copied" : "Copy my email"}
                                        icon={<IoCodeOutline />}
                                        position="left"
                                        otherClasses="bg-[#161a31]"
                                        handleClick={handleCopy}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
