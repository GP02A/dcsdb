import QAvehicles from '../queries/QAvehicles';
import QCvehicles from '../queries/QCvehicles';

const Tab2Switcher = ({ searchTextPass }) => {
  if (searchTextPass) {
    return <QCvehicles searchText={searchTextPass} />;
  } else {
    return <QAvehicles />;
  }
};

export default Tab2Switcher;
