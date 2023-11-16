import React, { useContext, useState } from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import { AppContext } from '../context';

function Subscription() {
  const { state, setState } = useContext<any>(AppContext);

  const [page, setPage] = useState('page1');
  const onNextClick = () => {
    // Go to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });

    switch (page) {
      case 'page1':
        setPage('page2');
        setState({ ...state, prompt: 'generic' })
        break;
      case 'page2':
        setPage('page3');
        setState({ ...state, prompt: 'generic' })
        break;
      case 'page3':
        setPage('page4');
        setState({ ...state, prompt: 'darjeeling' })
        break;
      case 'page4':
        setPage('page5');
        setState({ ...state, prompt: 'darjeeling' })
        break;
      case 'page5':
        setPage('page1');
        setState({ ...state, prompt: 'generic' })
        break;

      default:
        setPage('page1');
        setState({ ...state, prompt: 'generic' })
        break;
    }
  }
  const onPrevClick = () => {
    // Go to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
    switch (page) {
      case 'page1':
        setPage('page5');
        setState({ ...state, prompt: 'darjeeling' })
        break;
      case 'page2':
        setPage('page1');
        setState({ ...state, prompt: 'generic' })
        break;
      case 'page3':
        setPage('page2');
        setState({ ...state, prompt: 'generic' })
        break;
      case 'page4':
        setPage('page3');
        setState({ ...state, prompt: 'generic' })
        break;
      case 'page5':
        setPage('page4');
        setState({ ...state, prompt: 'darjeeling' })
        break;

      default:
        setPage('page1');
        setState({ ...state, prompt: 'generic' })
        break;
    }
  }

  const onTips = (tip: string) => {
    setState({ ...state, tip: tip })
  }

  switch (page) {
    case 'page1':
      return <Page1 onPrevClick={onPrevClick} onNextClick={onNextClick} />;
    case 'page2':
      return <Page2 onPrevClick={onPrevClick} onNextClick={onNextClick} onTips={onTips} />;
    case 'page3':
      return <Page3 onPrevClick={onPrevClick} onNextClick={onNextClick} />;
    case 'page4':
      return <Page4 onPrevClick={onPrevClick} onNextClick={onNextClick} />;
    case 'page5':
      return <Page5 onPrevClick={onPrevClick} onNextClick={onNextClick} />;
    default:
      return <div>No page found</div>;
  }
}

export default Subscription;