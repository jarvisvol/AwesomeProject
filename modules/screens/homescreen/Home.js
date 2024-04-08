import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Avatar, Button, Card, Icon, MD2Colors, Text } from 'react-native-paper';
import IconButton from '../../common/IconButton';

export default function Home() {

  return (
    <View style={{ backgroundColor: MD2Colors.white, height: "100%" }}>
      <Text style={style.heading}>Welcome, User</Text>
      <View style={style.companyView}>
        <Card.Title
          style={{ border: style.border }}
          title="Total Employement"
          subtitle="My showe Company"
          // left={(props) => <Avatar.Icon {...props} /* size ={64} */ icon="folder" />}
          right={(props) => <IconButton
            iconSource={require('../../images/add-user.png')}
            iconStyle={{ height: 20, width: 20, resizeMode: 'contain', marginRight: 15 }}
          />
          }
        />
      </View>

      <View style={style.sampleBlock}>
        <Text style={style.subHeading}>
          Employee
        </Text>
        <Button>See all <IconButton icon="arrow-right"></IconButton>  </Button>
      </View>

    </View>
  )
}

const style = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontWeight: "800",
    marginLeft: 10,
    marginTop: 10
  },
  border: {
    borderWidth: 1,
    borderColor: MD2Colors.black
  },
  companyView: {
    height: 100,
    width: "90%",
    // borderWidth:2,
    borderColor: MD2Colors.black,
    margin: 15,
    borderRadius: 20,
    backgroundColor: MD2Colors.lightBlue100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 4, // This is for Android
  },
  sampleBlock: {
    height: 100,
    width: "90%",
    borderWidth: 1,
    borderColor: MD2Colors.black,
    marginTop: 40,
    margin: 10,
    marginLeft: 17,

  },
  subHeading: {
    fontSize: 20,
    fontWeight: 800,
    padding: 5,
    color: MD2Colors.black
  }
})
