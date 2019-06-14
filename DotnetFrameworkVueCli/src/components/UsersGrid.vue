<template>
    <div>
        <div v-if="users.length === 0">
            Loading...
        </div>

        <table v-if="users.length > 0" class="table table-striped table-bordered">
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                    <td>Website</td>
                </tr>
            </thead>

            <tbody>
                <tr v-for="user in users">
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.phone}}</td>
                    <td>{{user.website}}</td>
                </tr>
            </tbody>
        </table>

    </div>
</template>
<script>
    import axios from 'axios';

    export default {
        data: function () {
            return {
                users: [],
            };
        },
        methods: {
            async fetchUsers() {
                const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
                this.users = data;
            }
        },
        async mounted() {
            await this.fetchUsers();
        }
    }
</script>