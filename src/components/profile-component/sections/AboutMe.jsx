import React, {useState, useCallback, memo} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import ProfileInfo from '../ProfileInfo';
import {globalStyles} from '../../../styles/globalStyles';
import {Button} from 'react-native-paper';

import CountryPicker from 'react-native-country-picker-modal';

const UserIcon = memo(() => (
  <Image source={require('../../../assets/user.png')} style={styles.icon} />
));
const PhoneIcon = memo(() => (
  <Image source={require('../../../assets/phone.png')} style={styles.icon} />
));
const LocationIcon = memo(() => (
  <Image
    source={require('../../../assets/location-pin.png')}
    style={styles.icon}
  />
));

const EditableField = memo(
  ({icon, value, onChange, placeholder, keyboardType, prefix, children}) => (
    <View style={styles.row}>
      {icon}
      {prefix && <Text style={styles.prefix}>{prefix}</Text>}
      {children ? (
        children
      ) : (
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChange}
          placeholder={placeholder}
          keyboardType={keyboardType}
        />
      )}
    </View>
  ),
);

const DisplayField = memo(({icon, text}) => (
  <View style={styles.row}>
    {icon}
    <Text style={styles.content}>{text}</Text>
  </View>
));

function AboutMe() {
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('John Doe');
  const [phone, setPhone] = useState('26537 26347');
  const [address, setAddress] = useState('123 Main Street, Dhaka, Bangladesh');

  const [countryCode, setCountryCode] = useState('GB');
  const [callingCode, setCallingCode] = useState('44');

  const handleSave = useCallback(() => {
    setEditMode(false);
  }, []);

  const onSelectCountry = useCallback(country => {
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode[0]);
  }, []);

  const onPressEdit = useCallback(() => setEditMode(true), []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.flex1}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled">
        <ProfileInfo />

        <View style={globalStyles.card}>
          {editMode ? (
            <>
              <EditableField
                icon={<UserIcon />}
                value={name}
                onChange={setName}
                placeholder="Name"
              />

              <View style={styles.phoneRow}>
                <PhoneIcon />
                <CountryPicker
                  countryCode={countryCode}
                  withFilter
                  withFlag
                  withCallingCode
                  withEmoji
                  withAlphaFilter
                  withCallingCodeButton
                  onSelect={onSelectCountry}
                  containerButtonStyle={styles.countryPicker}
                />
                <TextInput
                  style={[styles.input, styles.phoneInput]}
                  value={phone}
                  onChangeText={setPhone}
                  placeholder="Phone number"
                  keyboardType="phone-pad"
                />
              </View>

              <EditableField
                icon={<LocationIcon />}
                value={address}
                onChange={setAddress}
                placeholder="Address"
              />

              <Button
                onPress={handleSave}
                mode="contained"
                style={styles.button}>
                Save
              </Button>
            </>
          ) : (
            <>
              <DisplayField icon={<UserIcon />} text={name} />
              <DisplayField
                icon={<PhoneIcon />}
                text={`+${callingCode} ${phone}`}
              />
              <DisplayField icon={<LocationIcon />} text={address} />

              <Button
                onPress={onPressEdit}
                mode="contained"
                style={styles.button}>
                Edit Profile
              </Button>
            </>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
export default memo(AboutMe);

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  scrollContainer: {
    ...globalStyles.container,
    paddingHorizontal: 0,
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    gap: 10,
  },
  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
    resizeMode: 'contain',
  },
  content: {
    fontSize: 16,
    color: '#666',
  },
  input: {
    fontSize: 16,
    color: '#000',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    flex: 1,
    paddingVertical: 4,
  },
  phoneInput: {
    flex: 1,
  },
  prefix: {
    fontSize: 16,
    color: '#000',
    marginRight: 5,
    paddingVertical: 4,
  },
  button: {
    marginTop: 20,
  },
  countryPicker: {
    marginRight: 5,
  },
});
