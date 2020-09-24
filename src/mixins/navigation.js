import { createDate, formatDate } from '@/utils/dateUtils';

export default {
  methods: {
    goPrev() {
      const currentDate = createDate(this.$route.params.date);
      const prevDate = new Date(currentDate.setDate(currentDate.getDate() - 1));
      this.$router.push({ name: 'Home', params: { date: formatDate(prevDate) } });
    },
    goNext() {
      const todayString = formatDate();
      const currentDate = createDate(this.$route.params.date);
      if (todayString === formatDate(currentDate)) {
        return;
      }
      const nextDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
      this.$router.push({ name: 'Home', params: { date: formatDate(nextDate) } });
    },
  },
};
