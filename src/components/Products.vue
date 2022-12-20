<template>
    <table>
        <tr>
            <th>Country</th>
            <th>Capital</th>
            <th>Population</th>
        </tr>
        <tr v-for="country in countries" :key="country.name">
            <td>{{ country.name }}</td>
            <td>{{ country.capital }}</td>
            <td>{{ country.population }}</td>
        </tr>
    </table>
</template>
  
<script>
import { mapActions, mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters(["countries"]),
    },
    methods: {
        ...mapActions(["fetchAllCountries"]),
    },
    created() {
        this.fetchAllCountries();
    },
};
</script>
  
<style scoped>
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    max-width: 600px;
}

td,
th {
    border: 1px solid #333;
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #dddddd;
}
</style>