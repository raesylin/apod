<template>
  <div class="calendar">
    <label for="calendar-input" class="calendar__label">
      <font-awesome-icon :icon="['far', 'calendar']" />
    </label>
    <DatePicker
      wrapper-class="calendar__vdp-wrapper"
      calendar-class="calendar__vdp-calendar"
      input-class="calendar__vdp-input"
      :value="currentDate"
      format="dd MMM, yyyy"
      :disabled-dates="disabledDates"
      @selected="handleDateSelected"
    />
  </div>
</template>

<script>
import DatePicker from 'vuejs-datepicker';
import { mapActions } from 'vuex';
import { createDateFromISO, formatDate } from '@/utils/dateUtils';

export default {
  components: {
    DatePicker,
  },
  data() {
    return {
      disabledDates: {
        from: new Date(),
      },
    };
  },
  computed: {
    currentDate() {
      return createDateFromISO(this.$route.params.date || undefined);
    },
  },
  methods: {
    handleDateSelected(selectedDate) {
      this.$router.push({
        name: 'Home',
        params: { date: formatDate(selectedDate) },
      });
      this.toggleCanvas(false);
    },
    ...mapActions(['toggleCanvas']),
  },
};
</script>

<style lang="scss">
.calendar {
  align-items: center;
  display: flex;
  justify-content: flex-end;

  &__label {
    font-size: 12px;
    font-weight: 300;
    margin-right: 10px;
  }

  &__vdp-wrapper {
    // put customized styles inside &__vdp-wrapper to override built-in styles
    color: white;

    .calendar__vdp-calendar {
      background-color: rgba(black, 0.7);
      border: 0;
      border-radius: 4px;
      bottom: calc(100% + 5px);
      right: 0;
      transition: all 0.5s ease-in;

      .cell.day {
        border-radius: 50%;
      }

      .cell.month,
      .cell.year {
        border-radius: 4px;
      }

      .disabled {
        color: rgba(white, 0.3);
        cursor: not-allowed;
      }

      header .prev::after {
        border-right-color: white;
      }

      header .next::after {
        border-left-color: white;
      }

      header .prev:not(.disabled),
      header .next:not(.disabled),
      header .up:not(.disabled) {
        transition: background-color 0.5s ease-out;

        &:hover {
          background: rgba(white, 0.2);
        }
      }

      .cell:not(.blank):not(.disabled).day,
      .cell:not(.blank):not(.disabled).month,
      .cell:not(.blank):not(.disabled).year {
        transition: all 0.5s ease-out;
      }
    }

    .calendar__vdp-input {
      background-color: rgba(255, 255, 255, 0.3);
      border: none;
      border-radius: 4px;
      color: white;
      cursor: pointer;
      outline: none;
      padding: 8px 10px;
    }
  }
}
</style>
