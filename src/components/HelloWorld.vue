 <template>
  <div class="hello">
    <h1>{{ count }}</h1>
    <input type="number" v-model.number="setcount" />
    <button @click="addCountByNumber">Click</button>
    <p>{{ catLength }}</p>
    <ul>
      <li v-for="cat in categories" :key="cat">
        {{ cat }}
      </li>
    </ul>
    <button @click="AddCount">Add</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {
      setcount: 0,
    };
  },
  methods: {
    AddCount() {
      this.$store.dispatch("actionAddCount");
    },
    addCountByNumber(){
      this.$store.commit('actionAddCountByNumber',this.setcount)
    }
  },
  computed: {
    catLength() {
      return this.$store.getters.catLength;
    },

    ...mapState(["count", "categories"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
