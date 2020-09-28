<template>
    <div class="user_join">
        <div class="join_top">
            <div class="join_top_logo">
                <img src="@/assets/images/logo/logo_ryl_color.png" />
                <div class="join_top_title">
                    <div>Record</div>
                    <div>Your</div>
                    <div>Life</div>
                </div>
            </div>
            <div class="top_bar"></div>
        </div>
        <div class="join_box">
            <div class="join_container">
                <div class="join_title">Sign Up</div>
                <div class="join_info">
                    <label for="user_name">이름</label>
                    <input type="text" id="user_name" v-model="user_name"/>
                </div>
                <div class="join_info">
                    <label for="user_id">아이디</label>
                    <div class="join_info_id">
                        <input type="text" id="user_id" v-model="user_id" @keydown='resetCheckId'/>
                        <div class="check_id">
                            <button type="button" @click='check_user_id_exist'>중복확인</button>
                        </div>
                    </div>
                </div>
                <div class="join_info">
                    <label for="user_pw">비밀번호</label>
                    <input type="password" id="user_pw" v-model="user_pw"/>
                </div>
                <div class="join_info">
                    <label for="user_pw2">비밀번호 확인</label>
                    <input type="password" id="user_pw2" v-model="user_pw2"/>
                </div>
                <div class="join_button">
                    <button type="button" @click='goLogin'>회원가입</button>
                    <button type="button" @click='goLogin'>로그인</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        check_input: function() {
            this.$emit('login');
            this.$router.push('/main-page')
        },
        goLogin: function() {
            this.$router.push('/')
        }
    }
}
</script>

<style>
    .join_top {
        width: 100%;
        height: 15%;
    }
    .join_top_logo {
        padding: 20px;
        display: flex;
        align-items: center;
        font-size: 1.3rem;
        font-weight: 600;
    }
    .join_top_logo img {
        height: 70px;
        margin-right: 10px;
    }
    .join_top_title {
        cursor: default;
    }
    .top_bar {
        width: 100%;
        height: 80px;
        margin-bottom: 100px;
        background: linear-gradient(to right, #3F5EFB 0%, #FC466B 100%);
    }
    .join_box {
        width: 500px;
        height: 550px;
		margin: 0 auto;
        margin-bottom: 100px;
		padding: 50px 0;
		box-sizing: border-box;
		border: 1.5px solid lightgray;
		border-radius: 5px;
		box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.25);
    }
    .join_container {
        width: 400px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    .join_title {
        margin-bottom: 50px;
        font-size: 2rem;
        font-weight: 700;
        text-align: center;
    }
    .join_box button {
        padding: 5px 15px;
        color: white;
        background-color: #3F5EFB;
        border: none;
        border-radius: 5px;
    }
    .join_info {
        margin-bottom: 20px;
    }
    .join_info label {
        display: block;
        margin-bottom: 10px;
    }
    .join_info input {
        width: 370px;
        height: 30px;
        border: 1px solid gray;
        border-radius: 5px;
    }
    .join_info_id {
        display: flex;
    }
    .join_button {
        width: 100%;
        text-align: right;
    }
    .join_button button {
        margin: 15px 10px;
    }
    .join_info_id input {
        width: 300px;
        height: 30px;
        border: 1px solid gray;
        border-radius: 5px 0 0 5px;
    }
    .join_info_id button {
        width: 70px;
        padding: 8px 5px;
        border-radius: 0 5px 5px 0;
    }
</style>