
import { Image, View } from 'react-native';

const SplashScreen =() => {

    return (
      <View >
         <Image source={require('./assets/milk.png' )}  style={{width: 250, height: 250,marginVertical:50}}  />
      </View>
    );
  
};
export default SplashScreen