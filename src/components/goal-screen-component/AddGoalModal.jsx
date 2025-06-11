import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import * as ImagePicker from 'react-native-image-picker';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function AddGoalModal({setModalVisible}) {
  const [image, setImage] = useState(null);
  const [goalName, setGoalName] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  const onChangeStartTime = (event, selectedDate) => {
    setShowStartPicker(false);
    if (selectedDate) {
      setStartTime(selectedDate);
    }
  };

  const onChangeEndTime = (event, selectedDate) => {
    setShowEndPicker(false);
    if (selectedDate) {
      setEndTime(selectedDate);
    }
  };
  const pickImage = () => {
    ImagePicker.launchImageLibrary({mediaType: 'photo', quality: 0.8}, res => {
      if (res.assets?.[0]?.uri) {
        setImage(res.assets[0].uri);
      } else if (res.errorCode) {
        Alert.alert('Error', res.errorMessage || 'Image selection failed');
      }
    });
  };

  const onSubmit = data => {
    console.log(data);
  };

  const handleSubmit = () => {
    const formattedStart = startTime.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    const formattedEnd = endTime.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    const goalData = {
      goalName,
      selectedTime,
      startTime: formattedStart,
      endTime: formattedEnd,
      image,
    };
    onSubmit(goalData);
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>+ Add Goal</Text>

      {/* Image Upload Section */}
      <View style={styles.imageRow}>
        {image ? (
          <View style={styles.previewContainer}>
            <TouchableOpacity
              onPress={() => setImage(null)}
              style={styles.closeButton}>
              <Text style={styles.closeButtonText}>×</Text>
            </TouchableOpacity>
            <Image source={{uri: image}} style={styles.previewImage} />
          </View>
        ) : (
          <TouchableOpacity style={styles.uploadBox} onPress={pickImage}>
            <Text style={styles.plus}>＋</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Goal Name */}
      <Text style={styles.label}>Goal Name</Text>
      <TextInput
        placeholder="Enter your goal"
        value={goalName}
        onChangeText={setGoalName}
        style={styles.input}
      />

      {/* Time Picker */}
      <Text style={styles.label}>Select time</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={selectedTime}
          onValueChange={itemValue => setSelectedTime(itemValue)}>
          <Picker.Item label="Select your time" value="" />
          <Picker.Item label="Morning" value="morning" />
          <Picker.Item label="Afternoon" value="afternoon" />
          <Picker.Item label="Evening" value="evening" />
        </Picker>
      </View>

      {/* Time Duration */}
      <Text style={styles.label}>Time duration</Text>
      <View style={styles.timeRow}>
        <TouchableOpacity
          onPress={() => setShowStartPicker(true)}
          style={styles.timeInput}>
          <Text>
            {startTime.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setShowEndPicker(true)}
          style={styles.timeInput}>
          <Text>
            {endTime.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </Text>
        </TouchableOpacity>
      </View>

      {showStartPicker && (
        <DateTimePicker
          value={startTime}
          mode="time"
          is24Hour={false}
          display="default"
          onChange={onChangeStartTime}
        />
      )}

      {showEndPicker && (
        <DateTimePicker
          value={endTime}
          mode="time"
          is24Hour={false}
          display="default"
          onChange={onChangeEndTime}
        />
      )}

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => setModalVisible(false)}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imageRow: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 10,
  },
  uploadBox: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: '#aaa',
    borderStyle: 'dashed',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus: {
    fontSize: 30,
    color: '#555',
  },
  previewContainer: {
    position: 'relative',
    width: 80,
    height: 80,
  },
  previewImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  closeButton: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: '#f00',
    borderRadius: 12,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  label: {
    marginBottom: 5,
    fontSize: 14,
    color: '#222',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  timeInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#eee',
    padding: 12,
    borderRadius: 8,
    marginRight: 10,
    alignItems: 'center',
  },
  submitButton: {
    flex: 1,
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelText: {
    color: '#333',
    fontWeight: '600',
  },
  submitText: {
    color: '#fff',
    fontWeight: '600',
  },
});
