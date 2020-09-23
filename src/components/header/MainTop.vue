<template>
    <div class="top_fix">
        <div class="top_logo">
            <img src="@/assets/images/logo/logo_ryl_color.png" />
            <div class="top_title">
                <div>Record</div>
                <div>Your</div>
                <div>Life</div>
            </div>
        </div>
        <div class="top_user">
            <img src="@/assets/images/user_pic.png">
            <div class="top_user_name">user</div>
            <button type="button" @click="goLogin">sign out</button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        goLogin() {
            this.$router.push('/')
            window.location.reload()
        }
    }
}
</script>

<style>
    .top_fix {
        height: 15%;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .top_logo {
        display: flex;
        align-items: center;
        font-size: 1.3rem;
        font-weight: 600;
    }

    .top_logo img {
        height: 70px;
        margin-right: 10px;
    }

    .top_title {
        cursor: pointer;
    }

    .top_user {
        display: flex;
        align-items: center;
    }

    .top_user img {
        height: 30px;
        margin-right: 10px;
    }

    .top_user button {
        padding: 5px 15px;
        font-size: 1rem;
        color: white;
        background-color: #3F5EFB;
        border: none;
        border-radius: 5px;
    }

    .top_user_name {
        margin-right: 50px;
        font-size: 1.3rem;
        font-weight: 600;
    }
</style>