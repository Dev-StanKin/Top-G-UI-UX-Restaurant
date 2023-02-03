import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => {
  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits you palatte" />
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>
      <div className="app__specialMenu-menu">
        <div className="app__specialMenu_menu-wines">
          <p className="app__specialMenu_menu_heading">Wine and Beer</p>
          <div className="app__specialMenu_menu_items">
            {data.wines.map((wine, index) => (
              <MenuItem
                title={wine.title}
                tags={wine.tags}
                price={wine.price}
                key={wine.title + index}
              />
            ))}
          </div>
        </div>
        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menu" />
        </div>
        <div className="app__specialMenu_menu-cocktails">
          <p className="app__specialMenu_menu_heading">Cocktails</p>
          <div className="app__specialMenu_menu_items">
            {data.cocktails.map((cocktail, index) => (
              <MenuItem
                title={cocktail.title}
                tags={cocktail.tags}
                price={cocktail.price}
                key={cocktail.title + index}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <button
          type="button"
          style={{ marginTop: '15px' }}
          className="custom__button"
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;
