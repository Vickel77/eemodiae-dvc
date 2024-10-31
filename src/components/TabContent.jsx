import React from 'react';


const TabContent = ({ tab }) => {
  return (
    <div className="pt-6 ">
      <h2 className="text-green-500 text-[24px] font-[800] quicksand mb-4">{tab.title}</h2>
      <ul className='space-y-11'>
  {tab.content?.map((item, index) => (
    <li key={index} className="mb-4 max-w-[80%]">
      <p className='quicksand text-[24px] '>{item.text}</p>
      <p className="text-green-400 text-[20px] quicksand mt-2">{item.reference}</p>
    </li>
  )) || <li></li>}
</ul>

<h2 className="text-green-500 mt-[10%] text-[24px] font-[800] quicksand mb-4">{tab.title2}</h2>
<ul>
  {tab.update?.map((item2, index2) => (
    <li key={index2} className="mb-4 max-w-[80%]">
      <p className='quicksand text-[24px] '>{item2.text2}</p>
      <p className="text-green-400 text-[20px] quicksand mt-2">{item2.reference2}</p>
    </li>
  )) || <li></li>}
</ul>
    </div>
  );
};

export default TabContent;
