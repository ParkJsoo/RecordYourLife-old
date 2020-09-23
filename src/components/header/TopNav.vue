<template>
    <div class="top_nav">
        <div class="nav_container">
            <ul class="nav_title">DIARY
                <router-link to="diary-new" class="nav_sub">NEW</router-link>
                <li class="nav_sub">CALENDAR</li>
                <router-link to="diary-list" class="nav_sub">LIST</router-link>
            </ul>
        </div>
        <div class="nav_container">
            <ul class="nav_title">STUDY
                <li class="nav_sub">NEW</li>
                <li class="nav_sub">CALENDAR</li>
                <li class="nav_sub">LIST</li>
            </ul>
        </div>
        <div class="nav_container">
            <ul class="nav_title">TRAVEL
                <li class="nav_sub">NEW</li>
                <li class="nav_sub">CALENDAR</li>
                <li class="nav_sub">LIST</li>
            </ul>
        </div>
        <div class="nav_container">
            <ul class="nav_title">HOBBY
                <li class="nav_sub">NEW</li>
                <li class="nav_sub">CALENDAR</li>
                <li class="nav_sub">LIST</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .top_nav {
        height: auto;
        margin-bottom: 50px;
        display: flex;
        justify-content: space-around;
        background: linear-gradient(to right, #3F5EFB 0%, #FC466B 100%);
        color: white;
    }

    .nav_container {
        margin: 20px;
        width: 5%;
        text-align: center;
    }

    .nav_title {
        font-size: 1.3rem;
        font-weight: 600;
        margin: 10px 0;
        cursor: default;
    }

    .nav_sub {
        color: white;
        display: none;
        font-size: 1rem;
        font-weight: 600;
        margin: 10px 0;
        cursor: pointer;
        text-decoration: none;
    }

    .nav_title:hover > .nav_sub {
        display: block;
    }

    ul, li {
        margin: 0;
        padding: 0;
    }
</style>