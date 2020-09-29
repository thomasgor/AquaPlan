<template>
  <div id="performanceTest">
    <h3>Performancetest</h3>

    <b-col lg="6" class="my-1">
      <b-form-group
        label="Filter"
        label-cols-sm="3"
        label-align-sm="right"
        label-size="sm"
        label-for="filterInput"
        class="mb-0"
      >
        <b-input-group size="sm">
          <b-form-input
            v-model="filter"
            type="search"
            id="filterInput"
            placeholder="Type to Search"
          ></b-form-input>
          <b-input-group-append>
            <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-form-group>
    </b-col>

    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>

    <b-table
      id="my-table"
      :current-page="currentPage"
      :striped="striped"
      :bordered="bordered"
      :busy.sync="busy"
      head-variant="dark"
      :dark="dark"
      v-bind:fields="fields"
      v-bind:items="items"
      :per-page="perPage"
      :filter="filter"
      :filter-included-fields="filterOn"
    ></b-table>
  </div>
</template>

<script lang="ts">
  export default {
    created: function() {
      // const me = this;
      // const xmlhttp = new XMLHttpRequest();
      // const url = "http://localhost:3001/mock_data";
      // me.busy = true;
      // console.log("LOADING MOCK DATA");
      // xmlhttp.onreadystatechange = function() {
      //   if (this.readyState == 4 && this.status == 200) {
      //     me.busy = false;
      //     me.items = JSON.parse(this.responseText);
      //     me.rows = me.items.length;
      //   }
      // };
      // xmlhttp.open("GET", url, true);
      // xmlhttp.send();
    },
    data: () => {
      return {
        currentPage: 1,
        rows: 0,
        perPage: 500,
        striped: true,
        dark: false,
        busy: false,
        bordered: true,
        filter: null,
        filterOn: [],
        fields: [
          { key: "id", sortable: true },
          { key: "first_name", sortable: true },
          { key: "last_name", sortable: true },
          { key: "gender", sortable: true },
          { key: "ip_address", sortable: true },
          { key: "email", sortable: false },
          { key: "address_city", sortable: false },
          { key: "address_street", sortable: false },
          { key: "address_zip", sortable: false },
          { key: "creditCardNumber", sortable: false },
          { key: "creditCardAmount", sortable: false },
          { key: "iban", sortable: false },
          { key: "prefferedAnimal", sortable: false },
        ],
        items: [],
      };
    },
  };
</script>

<style></style>
