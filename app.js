const app = Vue.createApp({
  data() {
      return {
          content: '',
          arr: [{
              note: '',
              done: false
          }],

         
      }
  },
  methods: {
      //add note in arr
      add(content) {
        this.arr.push({note: content, done:false})
         this.content = '';
         return this.content;
      },
      remove(index) {
          this.arr.splice(index, 1);
      }
  }
});
app.mount('#assignment');