import React from 'react';

const TransactionTable = () => {
  return (
    <React.Fragment>
      <div className="px-36 pt-48 mx-auto container">
        <h2 className="text-3xl font-bold mb-3">Income Transactions</h2>
        <div className="relative overflow-x-auto font-sans">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-black font-bold uppercase bg-yellow-300">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b text-black">
                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap ">
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
              </tr>
              <tr className="bg-white border-b text-black">
                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap ">
                  Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">White</td>
                <td className="px-6 py-4">Laptop PC</td>
                <td className="px-6 py-4">$1999</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TransactionTable;
