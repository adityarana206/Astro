import React from 'react'
import { SafeAreaView ,StyleSheet, Text, TextInput, View} from 'react-native'
// import MaterialDesignIcons from 'react-native-vector-icons/MaterialDesignIcons'
const WelcomeScreen = () => {
  return (
   <SafeAreaView style={styles.container}>
<View style={styles.HeaderText}>

</View>
<View style={styles.LoadingBar}>

</View>

<View style={styles.WelcomePane}>
<Text>Welcome to Your Journey</Text>
<Text>Let's create your cosmic profile</Text>
<View>
   <Text> What's your name?</Text>
    {/* <MaterialDesignIcons></MaterialDesignIcons> */}
    <TextInput>
     

      
    </TextInput>
</View>
</View>
   </SafeAreaView>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a68bdd',
  },
  HeaderText:{

  },
  LoadingBar:{

  },
  WelcomePane:{
    backgroundColor: '#947070',
    
  }
  
}); 