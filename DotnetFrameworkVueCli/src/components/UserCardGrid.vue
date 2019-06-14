<template>
    <div>
        <div v-if="users.length === 0">
            Loading...
        </div>

        <div class="container">
            <div class="row" v-if="users.length > 0">
                <div class="col-md-3" v-for="user in users">
                    <user-card :user="user"></user-card>
                </div>
            </div>
        </div>

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