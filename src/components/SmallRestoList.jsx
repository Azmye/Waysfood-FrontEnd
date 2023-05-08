import SmallRestoListItem from './SmallRestoListItem';
import burgerKing from '../assets/img/burger-king-item.png';
import jco from '../assets/img/jco.png';
import kfc from '../assets/img/kfc.png';
import starbuck from '../assets/img/starbuck-icon.png';

const SmallRestoList = () => {
  return (
    <div className="pt-10">
      <div className="container mx-auto px-44">
        <h2 className="px-2 text-3xl font-bold">Popular Restaurant</h2>
        <div className="flex flex-wrap">
          <SmallRestoListItem image={starbuck} title={'Starbucks'} />
          <SmallRestoListItem image={jco} title={'JCO'} />
          <SmallRestoListItem image={kfc} title={'KFC'} />
          <SmallRestoListItem image={burgerKing} title={'Burger King'} />
        </div>
      </div>
    </div>
  );
};

export default SmallRestoList;
