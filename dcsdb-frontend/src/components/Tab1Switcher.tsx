// import QAmods from '../queries/QAmods';
import Tab1Default from '../components/Tab1Default';
import QCmods from '../queries/QCmods';

const Tab1Switcher = ({ searchTextPass }) => {
  if (searchTextPass) {
    return <QCmods searchText={searchTextPass} />;
  } else {
    // return <QAmods />;
    return <Tab1Default />
  }
};

export default Tab1Switcher;
