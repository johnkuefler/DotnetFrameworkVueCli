<template>
    <div class="card text-center">
        <img src="https://via.placeholder.com/300x150.png" alt="Avatar" style="width:100%">
        <div>
            <h5>{{user.Name}}</h5>
            <p>
                {{user.email}}
                <br />
                {{user.phone}}
                <br />
                {{user.website}}
            </p>
            <a href="#" class="btn btn-primary">View profile</a>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            user: Object
        }
    }
</script>

<style>
    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        margin: 10px;
        padding-bottom: 5px
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
</style>