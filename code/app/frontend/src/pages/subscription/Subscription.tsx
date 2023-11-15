import React, { useState } from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';

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
        setPage('page4');
        break;
      case 'page4':
        setPage('page5');
        break;
      case 'page5':
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
    case 'page4':
      return <Page4 onNextClick={onNextClick} />;
    case 'page5':
      return <Page5 onNextClick={onNextClick} />;
    default:
      return <div>No page found</div>;
  }
}

export default Subscription;