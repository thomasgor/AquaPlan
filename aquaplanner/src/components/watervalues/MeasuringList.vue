<template>
<div>
    <MeasuringListItem 
        v-for="measuring in measuringsForSelectedTank"
        v-bind:measuring="measuring"
        v-bind:key="measuring.id"/>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Measuring from './Measuring'
import MeasuringListItem from './MeasuringListItem.vue'

import {db} from "../../firebase";

export default Vue.extend({
    name:"MeasuringList",

    components: {MeasuringListItem},

    data: () => {
        const tankId = 'tank001';
        let userUID = "thomasUserID";
        let dbPath = `/user/${userUID}/measurings/`;        
        let measuringCollection = db.collection(dbPath);

       let loadedMeasurings : Measuring[] = new Array(0);
        measuringCollection
            .where("tankId", "==", tankId)
            .get()
            .then(function(querySnapshot){
                querySnapshot.forEach(measuringDoc => {
                    const data = measuringDoc.data();
                    data.id = measuringDoc.id;
                    console.log(data.id);
                    loadedMeasurings.push(Measuring.fromData(data))
                })
            }).catch(error => console.log("Error while loading measuring data from firestore: "+error))
            
        return {
            measuringsForSelectedTank: loadedMeasurings
        };
    },
});
</script>
