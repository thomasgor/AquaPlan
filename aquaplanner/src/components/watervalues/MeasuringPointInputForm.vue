<template>
    <div>

      <b-form-group
        label-cols-sm="4"
        label-align-sm="left"
        label-cols-lg="4"
        label-align-lg="left"
        label="Datum:"
        label-for="dateInput"
      >
        <b-input-group>
        
            <b-form-datepicker
                id="dateInput"
                v-model="measuringPointDate"
                locale="de-DE"
                required
            />
        
        
            <b-form-timepicker id="timeInput" placeholder="Zeit" locale="de" v-model="measuringPointTime"></b-form-timepicker>
        
        </b-input-group>
      </b-form-group>

        <MeasuringPointInputField 
            v-for="p in measuring.getMeasuringPoints()" 
            v-bind:measuringPoint="p" 
            v-bind:key="p.key" />

        <b-button variant="primary" v-on:click="onSaveMeasuringButtonClick"><b-icon-plus style="color:white"/>Messpunkt hinzufügen</b-button>

    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import WaterParameter from "./WaterParameter";
import MeasuringPointInputField from "./MeasuringPointInputField.vue"
import Measuring from './Measuring';
import {db} from "../../firebase";

export default Vue.extend({
    name: 'MeasuringPointInputForm',


    components:{MeasuringPointInputField},
    props: {
        waterParameters: {
            type: Array,
            required: true
        }
    },

    methods: {
        updateMeasuringPointTime: function(timeString: string){
            if(timeString){
                var dateTime = new Date('1970-01-01T' + timeString + 'Z');
                if(dateTime){
                    this.measuringPointDate.setHours(dateTime.getHours());
                    this.measuringPointDate.setMinutes(dateTime.getMinutes());
                    this.measuringPointDate.setSeconds(dateTime.getSeconds());
                    this.measuringPointDate.setMilliseconds(dateTime.getMilliseconds());
                }
            }
        },

        onSaveMeasuringButtonClick:function(event: Event){
           this.saveMeasuringToDatabase(this.measuring);
        },

        saveMeasuringToDatabase: function(measuring: Measuring){
            let measuringDateId = (new Date()).getTime();
            //let userUID = firebase.auth()?.currentUser?.uid;
            let userUID = "thomasUserID";
            const tankId = "tank001"

            if(userUID){
                 let measuringData = measuring.getMeasuringData();
                 measuringData.tankId= tankId;
              
                let dbPath = `/user/${userUID}/measurings/`;        
                let measuringCollection = db.collection(dbPath);
                
                measuringCollection.doc(measuringDateId.toString()).set(measuringData)
                .then(function(docRef: any) {
                    console.log("Successfully written new measuring to firestore");
                })
                .catch(function(error: any) {
                    console.error("Error adding document: ", error);
                });
              
            }
        }
    },
    computed:{

        measuring() {
            let measuring = new Measuring(this.waterParameters as WaterParameter[]);
            console.log(measuring);
            return measuring;
        },

        measuringPointTime:{
            get ()  {
                let hours = this.measuringPointDate.getHours();
                let minutes = this.measuringPointDate.getMinutes();
                let seconds = this.measuringPointDate.getSeconds();
                return `${hours}:${minutes}:${seconds}`;
            },
            set(value){
                this.updateMeasuringPointTime(value as string);
            }
           // set: function(){}
        }
    },
    data:() => {
        return {
            measuringPointDate: new Date() as Date
        };
    }
    
})
</script>
<style>

</style>