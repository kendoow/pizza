import { useState } from "react";
const Catigories = ({ items}) => {

  const [activeItem, setActiveItem] = useState(0);

  return (
    <div className="categories">
      <ul>
        {items.map((name, index) => (
          <li className = {activeItem === index ? 'active' : ''} onClick={() => setActiveItem(index)} key={index}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Catigories;
