'use client';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format } from 'date-fns/format';
import { parse } from 'date-fns/parse';
import { startOfWeek } from 'date-fns/startOfWeek';
import { getDay } from 'date-fns/getDay';
import { enUS } from 'date-fns/locale/en-US';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import events from './events';

import 'react-big-calendar/lib/css/react-big-calendar.css';
const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const DnDCalendar = withDragAndDrop(Calendar);

const BigCalendarWithDnD = () => {
  return (
    <DnDCalendar
      defaultDate={new Date()}
      defaultView='month'
      events={events}
      localizer={localizer}
      onSelectEvent={(e) => {
        console.log(e);
      }}
      onSelectSlot={(e) => {
        console.log(e);
      }}
      onEventDrop={(e) => {
        console.log('dropped ', e);
      }}
      onEventResize={() => {
        console.log('resized');
      }}
      selectable
      resizable
      style={{ height: '100vh' }}
    />
  );
};

export default BigCalendarWithDnD;
