import React from 'react';
import { StyleSheet, Text,TextInput, View, Button,Image} from 'react-native';


export default class AppKasir1 extends React.Component {
constructor(props) {
    super(props);
    this.state = {
    };
     }

  render() {
    return (
      <View style={styles.vMain} >

        <View style={styles.vHeader}>
          <Text style={styles.txtHeader1}>Aplikasi Penjualan</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}></View>
        <Image style={{ width: 250, height: 250 }} source={require('../images/kasir.png')}/>

        <View style={styles.vButton}>
          <View style={styles.vItemInput}>
            <View style={styles.vItemButton}>
            <Button
              onPress={() => this.props.navigation.navigate('Layar3')}
              title="Penjualan"
              color="#8FBC8F"
              accessibilityLabel="Penjualan"/>
            </View>
            <View style={styles.vItemButton}>
            <Button
              onPress={() => this.props.navigation.navigate('Layar2')}
              title="Data Barang"
              color="#8FBC8F"
              accessibilityLabel="Data Barang"/>
            </View>
          </View>
            <View style={styles.vItemButton}>
            <Button
              onPress={() => this.props.navigation.navigate('Layar1')}
              title="Stok Barang"
              color="#8FBC8F"
              accessibilityLabel="Stok Barang"/>
            </View>
        </View>

        <View style={styles.vFooter}>
          <Text style={styles.txtFooter1}>Menu Harga</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
 vMain: {
 flex:1,
 backgroundColor:'white',
 },

 vHeader: {
 flex:1,
 backgroundColor:'#0D47A1',
 alignItems:'center',
 justifyContent:'center',
 margin: 10
 },

 txtHeader1: {
 color:'#fff',
 fontSize:30,
 margin: 20
 
 },

 gambar: {
   flex: 2,
   backgroundColor: 'white',
   justifyContent:'center',
   alignItems: 'center',
 },

 vButton: {
 flex:2,
 backgroundColor:'gray',
 justifyContent:'center',
 alignItems:'center',
 },

 vItemInput: {
 flexDirection:'row',
 },

 vItemButton: {
 flex:1,
 margin: 30,
 },

 vFooter: {
 flex:1,
 backgroundColor:'#0D47A1',
 alignItems:'center',
 justifyContent:'center',
 margin: 10
 },

 txtFooter1: {
 color:'#fff',
 fontSize:20,
 margin: 10
 },

});
