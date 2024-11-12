export enum TimeFormats {
  hh_ss = 'hh_ss',
}

export const convertTimeToFormat = (format: TimeFormats, time: string) => {
  switch (format) {
    case TimeFormats.hh_ss: {
      const formattedDate = new Date(time).toLocaleTimeString(); // 00:00:00
      const [hours, minutes, _seconds] = formattedDate.split(':');

      return `${hours}:${minutes} ${Number(hours) > 12 ? 'PM' : 'AM'}`;
    }
    default:
      return '';
  }
};
