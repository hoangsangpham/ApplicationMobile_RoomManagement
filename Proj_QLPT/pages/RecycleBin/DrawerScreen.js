import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import TabScreen from '../TabScreen';
// import DetailsScreen from './DetailsScreen';
import DangKy from './DangKy';
import DsNguoidung from './DsNguoidung';

const Drawer = createDrawerNavigator();

function DrawerScreen() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabScreen} />
      {/* <Drawer.Screen name="Detail" component={DetailsScreen} /> */}
      <Drawer.Screen name="DangKy" component={DangKy} />
      <Drawer.Screen name="DsNguoidung" component={DsNguoidung} />
    </Drawer.Navigator>
  );
}

export default DrawerScreen;