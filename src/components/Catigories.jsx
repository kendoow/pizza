import { useState } from "react";
const Catigories = ({ items}) => {

  const [activeItem, setActiveItem] = useState(0);

  const onSelectedItem = (index) => {
    setActiveItem(index)
}
  return (
    <div className="categories">
      <ul>
        {items && items.map((name, index) => (
          <li className = {activeItem === index ? 'active' : ''} onClick={() => onSelectedItem(index)} key={index}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Catigories;
