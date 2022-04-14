import menuItem from "./../data/menuItem.json";

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
                  <p>
                    {item.dec}
                  </p>
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
