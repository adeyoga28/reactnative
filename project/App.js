import { View } from 'react-native';
import Cat from './components/Cat';
import FirstApp from './components/FirstApp';
import HungryCat from './components/HungryCat';

const App = () => {
  return (
    // <FirstApp />
    <View>
      <Cat firstName="Maru" lastName="Tom"/>
      <Cat firstName="Jelly" lastName="lorum"/>
      <HungryCat name="Munkus"/>
      <HungryCat name="Nin"/>
    </View>
  );
}

export default App;
