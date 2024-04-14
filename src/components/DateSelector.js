import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Touchable, TouchableOpacity,} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'
import DateTimePicker from '@react-native-community/datetimepicker';

function DateSelector(props) {
    const [date, setDate] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [mode, setMode] = useState('date');


    const handleDateChange = (e, selectedDate) => {
        if (selectedDate !== undefined) {
            setDate(selectedDate);
        }
        setModalVisible(false); // Close modal after picking date

    };

    const showMode = (modeToShow) => {
        setModalVisible(true);
        setMode(modeToShow);
    }

    const formatDate = (selectedDate) => {
        const day = selectedDate.getDate().toString().padStart(2, '0');
        const month = (selectedDate.getMonth() + 1).toString().padStart(2, '0');
        const year = selectedDate.getFullYear();
    
        return `${day}/${month}/${year}`;
      };

    return (
        <View style={{ flexDirection: 'row' }}>
            <View style={styles.textinputview}>
                <TextInput
                    style={styles.input}
                    placeholder='Date Of Birth'
                    placeholderTextColor="#A59C9C"
                    value={date ? formatDate(date) : ''}
                    editable={false }
                />

            </View>
            <View style={styles.calendarview}>
                <TouchableOpacity onPress={() => showMode('date')}>
                    <Icon name="calendar" size={24} color="#A59C9C" style={styles.calendar} />
                    {modalVisible && (
                        <DateTimePicker
                            value={date || new Date()}
                            mode={mode}
                            display="default"
                            onChange={handleDateChange}
                        />
                    )}
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default DateSelector;

const styles = StyleSheet.create({
    textinputview:
    {
        flex: 1, // Take up remaining space
        borderBottomWidth: 1,
        borderColor: '#A59C9C',
    },
    input:
    {
        padding: 0,
        color: '#A59C9C'
    },
    calendarview:
    {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
    },
    calendar:
    {
        justifyContent: 'flex-end'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 200,
        borderRadius: 10,
        elevation: 5,
    },

})