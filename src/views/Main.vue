<template>
  <div class="home">
    <div class="container mt-5">
      <Viewer />
    </div>
  </div>
</template>

<script>
import Viewer from "@/components/Viewer";

export default {
  name: "Home",
  components: { Viewer },
  data() {
    return {
      btnGroups: {
        words: 0,
        rate: 0
      },
      ratePicker: 130,
      timer: {
        start: 0,
        end: 0,
        duration: 0, // In milliseconds
        isRunning: false
      },
      script: {
        words: 0,
        copy: ""
      },
      wpmType: 130
    };
  },
  methods: {
    setActiveCount(id) {
      this.btnGroups.words = id;
    },
    setActiveWpm(id) {
      this.btnGroups.rate = id;
    },
    startTimer() {
      this.timer.isRunning = true;
      this.timer.start = Math.round(new Date().getTime());
      this.timer.duration = 0;
    },
    stopTimer() {
      this.timer.isRunning = false;
      this.timer.end = Math.round(new Date().getTime());
      this.timer.duration = this.timer.end - this.timer.start;
    },
    convertDuration(mts) {
      let duration = mts / 1000; // convert from milliseconds to seconds
      duration = duration.toFixed(2);

      return duration;
    }
  },
  computed: {
    scriptWordCount() {
      if (this.script.copy.length === 0) {
        return 0;
      }

      let words = this.script.copy.split(" ");
      words = words.filter((e) => e.trim().length);
      return words.length;
    },
    getDuration() {
      if (!this.timer.duration) {
        return "n/a";
      }

      let duration = this.convertDuration(this.timer.duration);

      return `${duration} seconds`;
    },
    getWordCount() {
      if (this.btnGroups.words === 0) {
        // Script Length - Word Count
        return parseInt(this.script.words);
      }

      return this.scriptWordCount;
    },
    getSpeakingRate() {
      if (this.btnGroups.rate === 0) {
        // Speaking rate - Standard
        return this.ratePicker;
      }

      // Any recording?
      if (!this.timer.duration) {
        return 0;
      }

      let duration = this.convertDuration(this.timer.duration);
      duration = (60 / duration) * 14;
      duration = Math.round(duration);
      return duration;
    },
    getCalculatedSeconds() {
      let seconds = this.getRawSeconds;

      seconds = seconds % 60;
      return seconds;
    },
    getCalculatedMinutes() {
      let seconds = this.getRawSeconds;

      let minutes = seconds / 60;
      minutes = Math.floor(minutes);
      return minutes;
    },
    getRawSeconds() {
      if (!this.getSpeakingRate) {
        return 0;
      }

      let length = (this.getWordCount / this.getSpeakingRate) * 60;
      length = Math.round(length);
      return length;
    }
  }
};
</script>
