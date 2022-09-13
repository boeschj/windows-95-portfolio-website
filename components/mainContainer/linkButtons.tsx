import { links } from "../../config/ABOUT";
import LinkButton from "./linkButton";

const LinkButtons: React.FC = (): JSX.Element => {
    return (
        <div className="flex flex-row space-x-5 pt-5 justify-end">
            <LinkButton profileUrl={links.github} text={"Github"} />
            <LinkButton profileUrl={links.linkedIn} text={"LinkedIn"} />
            <div className="hidden md:flex">
                <LinkButton profileUrl={links.resume} text={"Resume"} isResume={true} />
            </div>
        </div>
    )
}

export default LinkButtons;