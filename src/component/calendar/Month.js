import React, { useEffect, useRef } from 'react';
import Calendar from 'tui-calendar'; // Import TUI Calendar
import 'tui-calendar/dist/tui-calendar.css'; // Import the calendar's CSS
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';

const Month = () => {
    const calendarRef = useRef(null);

    useEffect(() => {
        const calendar = new Calendar(calendarRef.current, {
            defaultView: 'week', // Choose between 'day', 'week', or 'month'
            taskView: true, // Shows the task view
            scheduleView: true, // Shows the schedule view
            useDetailPopup: true, // Popup detail for schedules
            useCreationPopup: true, // Popup for schedule creation
            // Additional options here...
        });

        // Example of adding a schedule
        calendar.createSchedules([
            {
                id: '1',
                calendarId: '1',
                title: 'My Schedule',
                category: 'time',
                start: '2023-08-17T09:30:00',
                end: '2023-08-17T11:30:00',
            },
        ]);

        // Clean up on component unmount
        return () => {
            calendar.destroy();
        };
    }, []);

    return <div ref={calendarRef} style={{ height: '800px' }} />;
};

export default Month;
