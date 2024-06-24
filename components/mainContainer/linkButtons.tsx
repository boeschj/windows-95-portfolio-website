import { links } from '../../config/aboutMe';
import LinkButton from './linkButton';

interface LinkButtonProps {
    style?: string;
}

const LinkButtons: React.FC<LinkButtonProps> = ({ style }): JSX.Element => {
    return (
        <div
            className={`flex flex-row space-x-5 items-center h-fit justify-end ${
                style || ''
            }`}
        >
            <LinkButton profileUrl={links.github} text={'Github'} />
            <LinkButton profileUrl={links.linkedIn} text={'LinkedIn'} />
            <LinkButton
                profileUrl={links.resume}
                text={'Resume'}
                isResume={true}
            />
        </div>
    );
};

export default LinkButtons;
