import moment from 'moment';

const formatTime = function(time: number, format: string): string {
  return moment.utc(time).format(format);
}

export {
  formatTime
};
