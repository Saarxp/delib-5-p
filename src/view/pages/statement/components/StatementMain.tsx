import { FC, useEffect, useRef } from "react";

// Third Party Imports
import { Statement } from "delib-npm";

// Custom Components
import StatementChat from "./chat/StatementChat";
import StatementInput from "./StatementInput";
import ScreenFadeIn from "../../../components/animation/ScreenFadeIn";
import ScreenSlide from "../../../components/animation/ScreenSlide";
import useSlideAndSubStatement from "../../../../functions/hooks/useSlideAndSubStatement";

interface Props {
    statement: Statement;
    subStatements: Statement[];
    handleShowTalker: Function;
}

let firstTime = true;

const StatementMain: FC<Props> = ({
    statement,
    subStatements,
    handleShowTalker,
}) => {
    const messagesEndRef = useRef(null);

    const { toSlide, slideInOrOut } = useSlideAndSubStatement(
        statement.parentId
    );

    //scroll to bottom
    const scrollToBottom = () => {
        if (!messagesEndRef) return;
        if (!messagesEndRef.current) return;
        if (firstTime) {
            //@ts-ignore
            messagesEndRef.current.scrollIntoView({ behavior: "auto" });
            firstTime = false;
        } else {
            //@ts-ignore
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    //effects
    useEffect(() => {
        firstTime = true;
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [subStatements]);

    return !toSlide ? (
        <>
        <ScreenFadeIn className="page__main fade-in">
            <div className="wrapper wrapper--chat">
                {subStatements?.map((statementSub: Statement) => (
                    <div key={statementSub.statementId}>
                        <StatementChat
                            parentStatement={statement}
                            statement={statementSub}
                            showImage={handleShowTalker}
                        />
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
           
        </ScreenFadeIn>
        <div className="page__footer">
                {statement && <StatementInput statement={statement} />}
            </div>
        </>
    ) : (
        <>
        <ScreenSlide className={"page__main" + " " + slideInOrOut}>
            <div className="wrapper wrapper--chat">
                {subStatements?.map((statementSub: Statement) => (
                    <div key={statementSub.statementId}>
                        <StatementChat
                            statement={statementSub}
                            parentStatement={statement}
                            showImage={handleShowTalker}
                        />
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            
        </ScreenSlide>
        <div className="page__footer">
                {statement && <StatementInput statement={statement} />}
            </div>
        </>
       
    );
};

export default StatementMain;
