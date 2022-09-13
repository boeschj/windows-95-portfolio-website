import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import Link from "next/link";
import { modalGradientBorders } from "../gradients/gradientStyles";
import GradientWrapper from "../gradients/gradientWrapper";

interface IFooterProps {
    setShowNavMenu: Dispatch<SetStateAction<boolean>>,
    showNavMenu: boolean,
    setTabSelected: Dispatch<SetStateAction<number>>,
    links: links
}

interface links {
    github: string,
    linkedIn: string,
    resume: string,
}

const NavMenu: React.FC<IFooterProps> = ({ setShowNavMenu, showNavMenu, setTabSelected, links }: IFooterProps): JSX.Element => {

    //listen for click outside of nav menu to close
    const impactRef = useRef<HTMLDivElement>(null);
    const useOutsideClick = (ref: React.RefObject<HTMLDivElement>, callback: { (): void; }) => {
        useEffect(() => {
            const handleClickOutside = (event: any) => {
                if (ref.current && !ref.current.contains(event.target)) {
                    callback();
                }
            };
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        });
    };
    useOutsideClick(impactRef, () => setShowNavMenu(false));

    return (
        <div className={`${showNavMenu ? `display-flex` : `hidden`} divide-y-2 divide-windows-gray bg-windows-gray flex flex-col w-72 h-fit absolute bottom-10 left-1`} ref={impactRef}>
            <GradientWrapper
                children={
                    <ul className="divide-y-2 divide-windows-gray bg-windows-gray h-fit">
                        <li
                            onClick={() => {
                                setTabSelected(0);
                                setShowNavMenu(!showNavMenu)
                            }
                            }
                            className="hover:bg-windows-blue hover:text-white h-10 text-xl h-full flex w-full justify-center py-1 cursor-pointer">
                            About Me
                        </li>
                        <li
                            onClick={() => {
                                setTabSelected(1);
                                setShowNavMenu(!showNavMenu);
                            }
                            }
                            className="hover:bg-windows-blue hover:text-white h-10 text-xl h-full flex w-full justify-center py-1 cursor-pointer">
                            Experience
                        </li>
                        <li
                            onClick={() => {
                                setTabSelected(2);
                                setShowNavMenu(!showNavMenu);
                            }
                            }
                            className="hover:bg-windows-blue hover:text-white h-10 text-xl h-full flex w-full justify-center py-1 cursor-pointer">
                            Skills
                        </li>
                        <li
                            onClick={() => {
                                window.open(links.github, '_blank', 'noopener,noreferrer')
                                setShowNavMenu(!showNavMenu);
                            }} className="hover:bg-windows-blue hover:text-white h-10 text-xl h-full flex w-full justify-center py-1 cursor-pointer">
                            Github
                        </li>
                        <li
                            onClick={() => {
                                window.open(links.linkedIn, '_blank', 'noopener,noreferrer')
                                setShowNavMenu(!showNavMenu);
                            }}
                            className="hover:bg-windows-blue hover:text-white h-10 text-xl h-full flex w-full justify-center py-1 cursor-pointer">
                            LinkedIn
                        </li>
                        <Link href={links.resume} target="_blank" download>
                            <li onClick={() => setShowNavMenu(!showNavMenu)} className="hover:bg-windows-blue hover:text-white h-10 text-xl h-full flex w-full justify-center py-1 cursor-pointer">
                                Resume
                            </li>
                        </Link>
                    </ul>
                }
                gradientBorders={modalGradientBorders}
            />
        </div>
    )
}

export default NavMenu