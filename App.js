import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Button from './components/Button';

import ImageViewer from './components/ImageViewer';

const imageSource = require('./assets/images/background-image.png');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imageSource={imageSource} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58
  },
  introText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 50
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
