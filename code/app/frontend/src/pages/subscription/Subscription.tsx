import React, { useState } from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

function Subscription() {
  const [page, setPage] = useState('page1');
  const onNextClick = () => {
    switch (page) {
      case 'page1':
        setPage('page2');
        break;
      case 'page2':
        setPage('page3');
        break;
      case 'page3':
        setPage('page1');
        break;
      default:
        setPage('page1');
        break;
    }
  }

  switch (page) {
    case 'page1':
      return <Page1 onNextClick={onNextClick} />;
    case 'page2':
      return <Page2 onNextClick={onNextClick} />;
    case 'page3':
      return <Page3 onNextClick={onNextClick} />;
    default:
      return <div>No page found</div>;
  }
}

export default Subscription;