import React, { useState, Fragment, useCallback, useMemo } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Calendar, CalendarProps } from 'react-native-calendars';
import { useTheme } from '@rneui/themed';

import Title from './../container/title';

const testIDs = {
  menu: {
    CONTAINER: 'menu',
    CALENDARS: 'calendars_btn',
    CALENDAR_LIST: 'calendar_list_btn',
    HORIZONTAL_LIST: 'horizontal_list_btn',
    AGENDA: 'agenda_btn',
    EXPANDABLE_CALENDAR: 'expandable_calendar_btn',
    WEEK_CALENDAR: 'week_calendar_btn',
    TIMELINE_CALENDAR: 'timeline_calendar_btn',
  },
  calendars: {
    CONTAINER: 'calendars',
    FIRST: 'first_calendar',
    LAST: 'last_calendar',
  },
  calendarList: { CONTAINER: 'calendarList' },
  horizontalList: { CONTAINER: 'horizontalList' },
  agenda: {
    CONTAINER: 'agenda',
    ITEM: 'item',
  },
  expandableCalendar: { CONTAINER: 'expandableCalendar' },
  weekCalendar: { CONTAINER: 'weekCalendar' },
};
const INITIAL_DATE = '2022-05-25';

const CalendarScreen = () => {
  const { theme } = useTheme();
  const styles = makeStyles(theme);
  const [selected, setSelected] = useState(INITIAL_DATE);

  const onDayPress = useCallback((day) => {
    setSelected(day.dateString);
  }, []);

  const marked = useMemo(() => {
    return {
      [selected]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: 'purple',
        selectedTextColor: 'white',
      },
    };
  }, [selected]);

  return (
    <View style={styles.contentView}>
      <Title text="Vos rendez-vous" />
      <View style={styles.label}>
        <Text style={styles.textBold}>Nicolas B </Text>
        <Text style={styles.text}>est votre prochain client !</Text>
      </View>
      <Calendar
        testID={testIDs.calendars.FIRST}
        enableSwipeMonths
        current={INITIAL_DATE}
        style={styles.calendar}
        onDayPress={onDayPress}
        markedDates={marked}
      />
    </View>
  );
};

export default CalendarScreen;

const makeStyles = (theme) =>
  StyleSheet.create({
    calendar: {
      marginTop: 50,
      marginBottom: 50,
      marginLeft: 20,
      marginRight: 20,
      shadowColor: '#969696',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.4,
      shadowRadius: 10,
      padding: '5%',
      borderRadius: 15,
    },

    contentView: {
      flex: 1,
      flexDirection: 'column',
      paddingTop: '10%',
      backgroundColor: 'white',
    },
    label: {
      flexDirection: 'row',
      marginTop: '5%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: { fontSize: 15, fontWeight: 'bold', color: theme.colors.grey },
    textBold: { fontSize: 15, fontWeight: 'bold', color: theme.colors.primary },
  });
