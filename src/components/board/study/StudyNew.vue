<template>
    <div class="study-new">
        <div class="new_container">
            <div class="study-new-title article">
                <div class="article-name">title</div>
                <div class="article-title-box">
                    <input id="textbox" type="text">
                </div>
            </div>
            <div class="study-new-date article">
                <div class="article-name">date</div>
                <div class="article-date-box">
                    <input type="date">
                </div>
            </div>
            <div class="form" v-for="form in count" :key="form">
                <div class="study-new-subject article">
                    <div class="article-subject-title">
                        <div class="article-name">subject</div>
                        <button id="subjectBtn" type="button" v-on:click="count += 1">+</button>
                        <button id="subjectBtn" type="button" v-on:click="count -= 1" v-show="count > 1">-</button>
                    </div>
                    <div class="article-subject-box">
                        <input id="textbox" type="text">
                    </div>
                </div>
                <div class="study-new-time">
                    <div class="time_container article">
                        <div class="article-name">goal</div>
                        <div class="article-time-box">
                            <input type="time" id="startTime"> ~ <input type="time" id="endTime">
                        </div>
                    </div>
                    <div class="time_container article">
                        <div class="article-name">I did</div>
                        <div class="article-time-box">
                            <input type="time" id="startTime"> ~ <input type="time" id="endTime">
                        </div>
                    </div>
                </div>
                <div class="study-new-content article">
                    <div class="article-name">what you studied</div>
                    <div class="article-content-box">
                        <textarea id="content-box"></textarea>
                    </div>
                </div>
                <div class="study-new-assessment article">
                    <div class="article-name">good</div>
                    <div class="article-assessment-box">
                        <input id="assessment" type="text">
                    </div>
                </div>
                <div class="study-new-assessment article">
                    <div class="article-name">bad</div>
                    <div class="article-assessment-box">
                        <input id="assessment" type="text">
                    </div>
                </div>
            </div>
            <div class="new-submit">
                <div class="submit-button">
                    <button type="button" id="upload" @click="goPost">upload</button>
                    <button type="button" id="reset">reset</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            count: 1
        }
    },
    methods: {
        goPost: function() {
            this.$router.push('/study-post')
		}
    }
}
</script>

<style>
    .study-new {
        width: 700px;
        height: auto;
        margin: auto;
        margin-bottom: 100px;
        padding: 50px 0;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1.5px solid lightgray;
		border-radius: 5px;
		box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.25);
    }
    .study-new input {
        height: 30px;
        border: 1px solid gray;
        border-radius: 5px;
    }

    .study-new button {
        padding: 5px 15px;
        color: white;
        background-color: #3F5EFB;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    .article-subject-title {
        display: flex;
    }
    .form {
        margin-bottom: 50px;
    }
    #subjectBtn {
        width: 30px;
        height: 30px;
        margin-left: 10px;
        padding: 5px;
    }
    #assessment {
        width: 100%;
    }
</style>