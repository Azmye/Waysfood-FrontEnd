import waysfoodIco from '/nav-Icon.svg';

const OrderHistoryItem = () => {
  return (
    <div className="p-2 w-4/5 bg-white shadow-lg flex justify-between">
      <div>
        <h4 className="font-bold text-lg">Geprek Bensu</h4>
        <p className="text-sm">
          <span className="font-bold">Sunday</span>, 12 September 2024
        </p>
        <p className="text-zinc-700 font-bold">Total : Rp. 45.000</p>
      </div>
      <div className="text-end">
        <img src={waysfoodIco} alt="" className="mb-2" />
        <div className="text-center bg-green-500/30 text-green-600 font-bold">
          <p>Finished</p>
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryItem;
