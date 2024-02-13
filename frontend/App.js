import { StatusBar } from 'expo-status-bar';

//React navigation stack
import RootStack from './navigators/RootStack';
import AuthProvider from './components/AuthProvider';
export default function App() {
  return(<AuthProvider>
   <RootStack/>
  </AuthProvider> )
}