<template>
    <div class="login_page">
        <div class="login_page_container">
            <div class="login_page_logo">
                <img src="../assets/images/logo/logo_ryl_white.png" />
                <div class="login_page_title">
                    <div>Record</div>
                    <div>Your</div>
                    <div>Life</div>
                </div>
            </div>
            <div class="login_page_content">
                <p>Welcome!</p>
                <p>Do it login,</p>
                <p>Recording Your Life :)</p>
            </div>
        </div>
        <div class="login_box_bg">
            <div class="login_box_container">
                <div class="login_box_title">Log in</div>
                <div class="login_info">
                    <span>ID</span><input id="user_id" v-model="user_id" type="text" placeholder="user id">
                </div>
                <div class="login_info">
                    <span>PW</span><input id="user_pw" v-model="user_pw" type="password" placeholder="user password">
                </div>
                <div class="login_box_button">
                    <button type="button" @click="check_input">sign in</button>
                    <button type="button">sign up</button>
                </div>
                <router-link to="/" class="find_user_info" href="/">Forgot your id/pw?</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            is_login_fail : false,
            user_id : '',
            user_pw : ''
        }
    },
    methods: {
        check_input : function(){
            // 유효성 검사
            if(this.user_id.length < 4){
                alert("아이디는 4글자 이상입니다")
                this.user_id = ''
                return
            }
            if(this.user_pw.length < 4){
                alert("비밀번호는 4글자 이상입니다")
                this.user_pw = ''
                return
            }

            alert('로그인 되었습니다')
            this.$router.push('/main-page')
            this.$emit('login');
        }
    }
}
</script>

<style scoped>
    .login_page {
        width: 100%;
        height: 100%;
        display: flex;
        background: linear-gradient(to top left, #fff 0%, #fff 50%, #FC466B 50%, #3F5EFB 100%);
    }

    .login_page_container {
        width: 50%;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
    }

    .login_page_logo {
        display: flex;
        align-items: center;
        margin-bottom: 5vh;
    }

    .login_page_title {
        color: white;
        margin-left: 10px;
        cursor: default;
    }

    .login_page_content {
        color: white;
        cursor: default;
    }

    .login_box_bg {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .login_box_container {
        width: 70%;
        height: 70%;
        min-width: 300px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        background-color: white;
        border-radius: 30px;
        box-shadow: 3px 3px 10px 3px gray;
    }

    .login_box_title {
        font-weight: 700;
    }

    .login_box_button button {
        color: white;
        background-color: #3F5EFB;
        border: none;
        border-radius: 5px;
    }

    .login_info span {
        font-weight: 600;
        vertical-align: middle;
    }

    .login_info input {
        color: gray;
        vertical-align: middle;
    }

    .find_user_info {
        color: black;
        font-weight: 600;
        text-decoration: none;
    }

    @media screen and (max-width: 650px) {
        .login_page {
            flex-direction: column;
            align-items: center;
            min-height: 670px;
        }

        .login_page_container {
            width: 100%;
            height: 20%;
            padding: 0;
        }

        .login_page_logo {
            margin: 5.5% 0 4% 10%;
        }

        .login_page_logo img {
            width: 4.5rem;
        }

        .login_page_title {
            font-size: 1.3rem;
        }

        .login_page_content {
            font-size: 1.5rem;
            line-height: 2rem;
            margin-left: 10%;
        }

        .login_box_bg {
            width: 100%;
            height: 80%;
        }

        .login_box_container {
            height: 70%;
            margin-top: 50px;
        }

        .login_box_title {
            font-size: 2rem;
        }

        .login_info span {
            font-size: 1.3rem;
            margin-right: 10px;
        }

        .login_info input {
            font-size: 1rem;
        }

        .login_box_button button {
            margin: 0 10px;
            padding: 5px 15px;
            font-size: 1rem;
        }
    }

    @media screen and (min-width: 651px) {
        .login_page {
            min-height: 620px;
        }

        .login_page_container {
            padding: 3% 5%;
        }

        .login_page_logo img {
            width: 100px;
        }

        .login_page_title {
            font-size: 2rem;
            font-weight: 700;
        }

        .login_page_content {
            font-size: 2.5vw;
            font-weight: 700;
            line-height: 3.5vw;
        }

        .login_box_bg {
            margin-right: 100px;
        }

        .login_box_title {
            font-size: 2rem;
        }

        .login_info span {
            font-size: 1.3rem;
            margin-right: 10px;
        }

        .login_info input {
            font-size: 1rem;
        }

        .login_box_button button {
            margin: 0 10px;
            padding: 5px 15px;
            font-size: 1rem;
        }
        .find_user_info {
            font-size: 1.5rem;
        }
    }
</style>