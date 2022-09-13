import { Dispatch, SetStateAction } from "react";
import About from "../about/about";
import { modalGradientBorders, coverTabGradientBorders } from "../gradients/gradientStyles";
import Experience from "../experience/experience";
import Skills from "../skills/skills";
import Tab from "./tab";
import GradientWrapper from "../gradients/gradientWrapper";

interface ITabsProps {
    tabSelected: number,
    setTabSelected: Dispatch<SetStateAction<number>>
}

const Tabs: React.FC<ITabsProps> = ({ tabSelected, setTabSelected }: ITabsProps): JSX.Element => {

    const tabComponents: JSX.Element[] = [
        <About />,
        <Experience />,
        <Skills />
    ];

    const tabCovers: JSX.Element =
        (
            <GradientWrapper style={'w-full'} gradientBorders={modalGradientBorders}>
                <div>
                    <div className="flex flex-row">
                        <GradientWrapper style={`bg-windows-gray h-[10px] w-[97px] -mt-[9px] -ml-[4px] ${tabSelected === 0 ? '' : 'bg-opacity-0'}`} gradientBorders={coverTabGradientBorders} children={
                            < div className={'h-[10px] w-[95px]'} />
                        }
                        />
                        <div className={`bg-windows-gray h-[10px] w-[100px] border border-windows-gray ml-[3px] ${tabSelected === 1 ? '-mt-[5px]' : 'mt-[5px]'}`} />
                        <div className={`bg-windows-gray h-[10px] w-[100px] border border-windows-gray ${tabSelected === 2 ? '-mt-[5px]' : 'mt-[5px]'}`} />
                    </div>
                    <div className="h-full">
                        {tabComponents[tabSelected]}
                    </div>
                </div>
            </GradientWrapper>
        )
    return (
        <>
            <div className="flex flex-row">
                <Tab tabSelected={tabSelected} setTabSelected={setTabSelected} text={"About Me"} tabNumber={0} />
                <Tab tabSelected={tabSelected} setTabSelected={setTabSelected} text={"Experience"} tabNumber={1} />
                <Tab tabSelected={tabSelected} setTabSelected={setTabSelected} text={"Skills"} tabNumber={2} />
            </div>
            {tabCovers}
        </>
    )
}

export default Tabs;