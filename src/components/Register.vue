<template>
  <div v-if="!showLoader" class="card col-6 note theme-light p-shadow-4">
    <Button
      icon="pi pi-times"
      class="p-button-rounded p-button-secondary p-button-outlined closebtn"
      @click="closeNav"
    />
    <div class="form">
      <div class="m-1">
        <h3 class="font">Register Here</h3>
      </div>
      <div class="form-content">
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            v-model="register.email"
            placeholder="Your Email *"
            value
          />
        </div>
        <button v-if="!tabshow" type="button" v-on:click="showTab" class="btnSubmit btn btn-primary">Proceed</button>
        <div v-if="tabshow===true" class="tab-content">
          <div id="home" class="tab-pane fade in active show">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                v-model="register.name"
                placeholder="Your Name *"
                value
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                v-model="register.phone"
                placeholder="Phone Number *"
                value
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Address *"
                v-model="register.address"
                value
              />
            </div>
            <button type="button" class="btnSubmit btn btn-primary" @click="addUserDetails">Proceed</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <progress-spinner />
  </div>
</template>

<script>
import Button from "primevue/button";
// import MultiSelect from 'primevue/multiselect';
import { getUser, addUserDetails, geocodeAddress } from "../api";
import ProgressSpinner from "primevue/progressspinner";

export default {
  components: {
    Button,
    // MultiSelect,
    ProgressSpinner
  },
  data() {
    return {
      tabshow: "false",
      selectedCities: null,
      cities: [
        { name: "New York", code: "NY" },
        { name: "Rome", code: "RM" },
        { name: "London", code: "LDN" },
        { name: "Istanbul", code: "IST" },
        { name: "Paris", code: "PRS" }
      ],
      register: {
        name: "",
        email: "",
        phone: "",
        address: "",
      },
      showLoader: false
    };
  },
  computed: {},
  methods: {
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    },
    tabChange() {},
    showTab() {
      // call api for registration id check and show tabs
      this.showLoader = true;
      getUser(this.register.email)
        .then(response => response.json())
        .then(response => {
          if (response) {
            this.tabshow = true;
            this.register.name = response.name;
            this.register.phone = response.phone;
          }
          this.showLoader = false;
        });
    },
    async addUserDetails() {
      try {
        let response = await geocodeAddress(this.register.address);
        let responseJson = await response.json();
        const location = {
          latitude: Number(responseJson[0].lat),
          longitude: Number(responseJson[0].lon)
        };
        const details = {
          name: this.register.name,
          phone: this.register.phone,
          location
        };
        response = await addUserDetails(details, this.register.email);
        responseJson = await response.json();

        this.init();
      } catch (error) {
        console.log(error);
      }
    },
    init() {
      this.tabshow = false;
      Object.keys(this.register).forEach(key => {
        this.register[key] = "";
      });
    }
  }
};
</script>

<style scoped>
.note {
  background-color: white;
  position: absolute;
  top: 0px;
  left: 0px;
  text-align: center;
  color: #000;
  font-weight: bold;
  line-height: 80px;
  height: 100%;
  z-index: 3001;
  padding-top: 10px;
  overflow: hidden;
}
.form-content {
  padding: 5%;
  /* border: 1px solid #ced4da; */
  margin-bottom: 2%;
}
.form-control {
  border-radius: 1.5rem;
}
.btnSubmit {
  border-radius: 1.5rem;
  cursor: pointer;
}
/* Position and style the close button (top right corner) */
.closebtn {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 36px;
  margin-left: 50px;
  z-index: 3002; /* Stay on top */
}
input,
select.form-control {
  background-color: rgba(255, 255, 255, 1);
  border-bottom: 3px solid rgba(255, 255, 255, 0.5);
}
.carousel-inner {
  width: 100%;
  height: 100%;
}
li .active {
  border: solid 3px;
  border-radius: 50px;
  padding: 15px;
  padding-right: 20px;
  padding-left: 20px;
  border-bottom-width: 0;
}
li {
  width: 10vw;
  color: black;
}

.p-multiselect {
  min-width: 15rem;
}
</style>
