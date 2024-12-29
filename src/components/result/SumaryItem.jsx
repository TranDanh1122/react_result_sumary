import "./SummaryItem.css"
import PropTypes from "prop-types";

const SummaryItem = ({ category, score, icon }) => {

    return (
        <div className={`summary__item ${category.toLowerCase()}`}>
            <i className="summary__icon" style={{
                mask: `url(${icon}) center / cover no-repeat`,
                WebkitMask: `url(${icon}) center / cover no-repeat`
            }}></i>
            <span className="summary__category">{category}</span>
            <span className="summary__core">{score}<span>/100</span></span>
        </div>
    )
}
SummaryItem.propTypes = {
    category: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
};
export default SummaryItem