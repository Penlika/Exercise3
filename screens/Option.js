import { View, StyleSheet } from 'react-native';
import DetailListItem from '../components/DetailListItem';

const Option = () => {
  return (
    <View style={styles.container}>
      <DetailListItem label="Update Profile" />
      <DetailListItem label="Change Language" />
      <DetailListItem label="Sign Out" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
})

export default Option;
