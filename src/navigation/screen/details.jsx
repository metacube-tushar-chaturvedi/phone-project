import  {React,useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Switch} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

//component
import DetailAppBar from '../../components/detailsCom/detailAppbar';
import UserAvatar from '../../components/usersAvatar';
import ContactInfo from '../../components/detailsCom/contactInfo';
import IconCard from '../../components/detailsCom/iconCard';
import Divider from '../../components/detailsCom/divider';
import ConSection from '../../components/detailsCom/conSection';
import Footer from '../../components/detailsCom/footer';


export default function DetailsScreen({navigation, route}) {
  const item = route.params.item;
  console.log(item);
  const [toggle, setToggle] = useState(false);
  const setTogglefunctoin = () => {
    if (toggle == 'false') {
      setToggle(true);
    } else {
    }
  };
  return (
    <>
    <View style={styles.screenBox}>
    <DetailAppBar item={item}/>
    </View>
      <ScrollView>
      <View style={styles.screenBox}>
      <View style={styles.startCon}>
        <UserAvatar
          name={item.name}
          size={170}
          fontSize={100}
          background={item.background}
        />
        <Text style={styles.itemName}>{item.name} </Text>
      </View>
     
      <View
        stickyHeaderIndices={[1]}
 style={styles.iconCon}>
      
        <IconCard
          icon="call"
          name="Call"
          backgroundColor="#fedcd0"
          height={60}
          borderRadius={30}
        />
        <IconCard
          icon="chat"
          name="Text"
          backgroundColor="#fedcd0"
          height={60}
          borderRadius={30}
        />
        <IconCard
          icon="videocam"
          name="Video"
          backgroundColor="#fedcd0"
          height={60}
          borderRadius={30}
        />
      </View>
      <ContactInfo details={item}/>
      <View style={styles.dividerLine}>
        <Divider />
      </View>
      <View style={styles.contatctSetting}>
        <Text style={[styles.screenBox, styles.settingHeader]}>
          Contact Settings
        </Text>
        <View style={styles.ringToneCard}>
          <MaterialIcon name="music-note" size={30} />
          <View style={styles.ringToneContent}>
            <Text style={styles.ringTonetitle}>{item.name}</Text>
            <Text style={styles.ringToneDes}>
              Default (krishnaflu-pa2luqdy-37180.mp3)
            </Text>
          </View>
        </View>

        <ConSection iconName="backup-table" name="Remainders" />

        <View>
          <Divider />
        </View>
        <ConSection iconName="check-circle" name="Set defaults" />
        <ConSection iconName="share" name="Share contact" />
        <ConSection iconName="category" name="Add to home" />
        <View style={styles.voiceCard}>
          <ConSection iconName="voicemail" name="Send to voice" />
          <Switch  onValueChange={setTogglefunctoin} value={toggle} />
        </View>

        <ConSection
          iconName="block"
          name="Block numbers"
          iconCol="#9f2d27"
          textCol="#9f2d27"
        />
        <ConSection
          iconName="delete"
          name="Delete"
          iconCol="#9f2d27"
          textCol="#9f2d27"
        />
      </View>
      <View style={styles.dividerLine}>
        <Divider />
      </View>
      <Footer/>
      </View>
    </ScrollView>
    </>

  );
}

const styles = StyleSheet.create({
  screenBox: {
    paddingHorizontal: 10,
    backgroundColor:'#fff8f6',
  },
  startCon: {
    alignItems: 'center',
  },
  iconCon: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position:'static',
    top:0
  },
  itemName: {
    paddingVertical: 20,
    fontSize: 26,
    fontWeight: 400,
  },
  dividerLine: {
    marginVertical: 15,
    paddingVertical: 10,
  },
  settingHeader: {
    fontSize: 18,
    color: '#000',
    fontWeight: '500',
  },
  contatctSetting: {
    marginHorizontal: 10,
  },
  ringToneCard: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor:'#666'
  },
  ringToneContent: {
    marginHorizontal: 10,
  },
  ringToneIcon: {},
  ringTonetitle: {
    fontSize: 18,
    color: '#4c413d',
  },
  ringToneDes: {
    color: '#4c413d',
  },

  voiceCard:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },

  
});
