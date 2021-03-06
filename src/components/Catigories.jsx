import { memo } from "react";
import PropTypes from "prop-types";
const Catigories = memo(function Categories({ activeCategory, items, onClickCategory }){

  return (
    <div className="categories">
    <ul>
      <li
        className={activeCategory === null ? 'active' : ''}
        onClick={() => onClickCategory(null)}>
        Все
      </li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeCategory === index ? "active" : ""}
              onClick={() => onClickCategory(index)}
              key={index}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
});

Catigories.propTypes = {
  // activeCategory: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickCategory:PropTypes.func

};

Catigories.defaultProps = {
  activeCategory: null,
  items:[],
};
export default Catigories;
