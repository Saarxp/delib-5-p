import React from "react"

// Third party imports
import { Link, useParams } from "react-router-dom"

// Custom components
import { StatementSettings } from "../admin/StatementSettings"
import ArrowBackIosIcon from "../../../../icons/ArrowBackIosIcon"
import ScreenSlide from "../../../../components/animation/ScreenSlide"

export const SetStatement = () => {
    const { statementId } = useParams()
    return (
        <ScreenSlide>
            <div className="setStatement">
                <div className="setStatement__header">
                    <span></span>
                    <h1>{statementId ? "עדכון" : "הוספת קבוצה חדשה"}</h1>
                    <Link to={"/home"} className="setStatement__back">
                        {" "}
                        <ArrowBackIosIcon />
                    </Link>
                </div>
                <div className="page__main">
                    <StatementSettings />
                </div>
            </div>
        </ScreenSlide>
    )
}

export default SetStatement
