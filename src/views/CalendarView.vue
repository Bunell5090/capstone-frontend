<template>
  <div>
    <vue-cal
      class="vuecal--blue-theme"
      selected-date="2022-6-01"
      :time-from="9 * 60"
      :time-to="17 * 60"
      :time-step="30"
      :disable-views="['years', 'year', 'day', 'days']"
      default-view="week"
      events-on-month-view="short"
      overlaps-per-time-step
      :events="events"
      style="height: 600px"
      :on-event-click="onEventClick"
    >
      <p>POOOPPOOO</p>
    </vue-cal>
  </div>
</template>

<script>
import vuecal from "vue-cal";
import "vue-cal/dist/vuecal.css";
import axios from "axios";

export default {
  components: { "vue-cal": vuecal },
  async mounted() {
    await this.loadTime();
    // console.log("P: " + p);
    console.log("this.events: " + JSON.stringify(this.events));
    this.setEventVal();
  },
  methods: {
    setEventVal() {
      this.events = [
        {
          start: "2022-05-20 9:00",
          end: "2022-05-20 10:00",
          title: "Chloe Unell - Flu Vaccine",
          // content: '<i class="v-icon material-icons">local_hospital</i>',
          class: "vaccine",
          split: 2,
        },
        {
          start: "2022-05-20 10:00",
          end: "2022-05-20 12:00",
          title: "Ish Smith - Neuter Surgery",
          // content: '<i class="v-icon material-icons">local_hospital</i>',
          class: "surgery",
          split: 2,
        },
        {
          start: "2022-05-21 11:00",
          end: "2022-05-21 12:00",
          title: "Pickles Smith - Fang Repair",
          // content: '<i class="v-icon material-icons">local_hospital</i>',
          class: "surgery",
          split: 2,
        },
      ];
    },
    async loadTime() {
      var aT = "457505c7d40b2fcb7ee3d5afb0a30dc20a20c2a99130080e2c593900561c411b";
      var aK = "f8f21ae5d686f59be0e341e551410c9c";

      var events = [];
      var self = this;
      return axios
        .get(
          "https://api.trello.com/1/boards/5e4ba54cb3cbed6dd96beec0?actions=none&boardStars=none&cards=visible&card_pluginData=true&checklists=none&customFields=false&fields=name%2Cdesc%2CdescData%2Cclosed%2CidOrganization%2Cpinned%2Curl%2CshortUrl%2Cprefs%2ClabelNames&lists=open&members=none&memberships=none&membersInvited=none&membersInvited_fields=none&pluginData=true&organization=false&organization_pluginData=false&myPrefs=false&tags=false&key=" +
            aK +
            "&token=" +
            aT
        )
        .then(function (res) {
          for (var i = 0; i < res.data.cards.length; i++) {
            if (res.data.cards[i].pluginData == "") {
              continue;
            }

            console.log("thiss: " + res.data.cards[i].pluginData[0].value);
            if (res.data.cards[i].pluginData[0].value == false) {
              continue;
            }
            var pluginData = JSON.parse(res.data.cards[i].pluginData[0].value);
            var name = res.data.cards[i].name;
            for (var j = 0; j < pluginData.meetingList.length; j++) {
              var meetingDetails = pluginData.meetingList[j];
              events.push({
                start: meetingDetails.meetingDateStart,
                end: meetingDetails.meetingDateEnd,
                title: meetingDetails.meetingType + " - " + name,
                content: '<i class="v-icon material-icons">local_hospital</i>',
                class: "health",
                split: 2,
              });
            }
          }
        })
        .then(function () {
          self.events = events;
        });
    },
  },
  data: () => ({
    events: [
      {
        start: "2022-05-19 9:30",
        end: "2022-05-19 10:15",
        title: "Dentist appointment",
        content: '<i class="v-icon material-icons">local_hospital</i>',
        class: "health",
        split: 2,
      },
    ],
    events2: [
      {
        start: "2022-05-19 9:30",
        end: "2022-05-19 10:15",
        title: "Dentist appointment",
        content: '<i class="v-icon material-icons">local_hospital</i>',
        class: "health",
        split: 2,
      },
      {
        start: "2018-11-21",
        end: "2018-11-21",
        title: "Need to go shopping",
        content: '<i class="v-icon material-icons">shopping_cart</i>',
        class: "leisure",
      },
      {
        start: "2018-11-19 10:35",
        end: "2018-11-19 11:30",
        title: "Doctor appointment",
        class: "health",
      },
      {
        start: "2018-11-19 18:30",
        end: "2018-11-19 19:15",
        title: "Eating appointment",
        class: "leisure",
      },
      {
        start: "2018-11-20 18:30",
        end: "2018-11-20 20:30",
        title: "Crossfit",
      },
      {
        start: "2018-11-21 11:00",
        end: "2018-11-21 13:00",
        title: "Brunch with Jane",
        class: "health",
      },
      {
        start: "2018-11-21 19:30",
        end: "2018-11-21 23:00",
        title: "Swimming lesson",
      },
      {
        start: "2019-09-30 19:30",
        end: "2019-09-30 23:00",
        title: "Swimming lesson",
      },
      {
        start: "2018-11-19 12:00",
        end: "2018-11-19 14:00",
        title: "LUNCH",
        class: "lunch",
        background: true,
      },
      {
        start: "2018-11-20 12:00",
        end: "2018-11-20 14:00",
        title: "LUNCH",
        class: "lunch",
        background: true,
      },
    ],
  }),
};
</script>

<style>
/*     @import '../../node-modules/vue-cal/dist/vuecal.css'; */
/* @import "vue-cal/dist/vuecal.css"; */

*.vuecal--month-view .vuecal__cell {
  height: 80px;
}

.vuecal--month-view .vuecal__cell-content {
  justify-content: flex-start;
  height: 100%;
  align-items: flex-end;
}

.vuecal--month-view .vuecal__cell-date {
  padding: 4px;
}
.vuecal--month-view .vuecal__no-event {
  display: none;
}

/* Different color for different event types. */
.vuecal__event.leisure {
  background-color: rgba(253, 156, 66, 0.9);
  border: 1px solid rgb(233, 136, 46);
  color: #fff;
}
.vuecal__event.sport {
  background-color: rgba(255, 102, 102, 0.9);
  border: 1px solid rgb(235, 82, 82);
  color: #fff;
}
.vuecal__event.health {
  background-color: rgba(164, 230, 210, 0.9);
  border: 1px solid rgb(144, 210, 190);
}
</style>
