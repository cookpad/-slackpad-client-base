import { KeepAwake, registerRootComponent } from 'expo';
import SampleScreen from './src/screen/SampleScreen';
// import App from './src/App'

if (__DEV__) {
  KeepAwake.activate();
}
registerRootComponent(SampleScreen);
// registerRootComponent(App);
