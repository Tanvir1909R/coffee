import menuItem from "./../data/menuItem.json";
import item_img from "../data/item_img.json";
import {GoPlus} from 'react-icons/go'

function Menu() {
  return (
    <section className="menu_sec">
      <div className="menu_sec_Wrapper">
        <div className="title">
          <h1>Our Menu</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            blandit massa enim.az
          </p>
        </div>
        <div className="items">
          {menuItem.map((item, index) => {
            return (
              <div className="item" key={index}>
                <div className="item_title">
                  <h4> {item.item} </h4>
                  <div className="line"></div>
                  <h4> {item.price} </h4>
                </div>
                <div className="item_dec">
                  <p>{item.dec}</p>
                </div>
              </div>
            );
          })}
        </div>
        <button>WHERE WE ARE</button>
        <div className="items_img">
          {item_img.map((item, index) => {
            return (
              <div className="item_img" key={index}>
                <img src={item.img} alt="coffee" />
                <div className="plus">
                  <GoPlus />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Menu;
