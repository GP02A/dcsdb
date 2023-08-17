import QAmods from '../queries/QAmods';
import QCmods from '../queries/QCmods';

const Tab1Switcher = ({ searchTextPass }) => {
  if (searchTextPass) {
    return <QCmods searchText={searchTextPass} />;
  } else {
    return <QAmods />;
  }
};

export default Tab1Switcher;
