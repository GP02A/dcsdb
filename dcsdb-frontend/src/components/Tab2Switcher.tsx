// import QAvehicles from '../queries/QAvehicles';
import Tab2Default from '../components/Tab2Default';
import QCvehicles from '../queries/QCvehicles';

const Tab2Switcher = ({ searchTextPass }) => {
  if (searchTextPass) {
    return <QCvehicles searchText={searchTextPass} />;
  } else {
    // return <QAvehicles />;
    return <Tab2Default />
  }
};

export default Tab2Switcher;
