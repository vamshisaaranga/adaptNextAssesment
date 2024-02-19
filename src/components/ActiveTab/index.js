import { ParagraphElement } from "./styledComponents"

const Tab = (props) => {
    const {tabDetails, tabActive, clickedOnTab} = props
    const {tab} = tabDetails

    const clickedTab = () => {
        clickedOnTab(tab)
    }

    return (
        <div>
             <ParagraphElement tabcolorvalue={tabActive} onClick={clickedTab}>{tab}</ParagraphElement>
        </div>
    )
}

export default Tab