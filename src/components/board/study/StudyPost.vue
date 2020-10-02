<template>
    <div class="study-new">
        <div class="new_container">
            <div class="study-new-title article">
                <div class="article-name">title</div>
                <div class="article-title-box">
                    <input id="textbox" type="text" disabled="disabled" value="글 제목입니다">
                </div>
            </div>
            <div class="study-new-date article">
                <div class="article-name">date</div>
                <div class="article-date-box">
                    <input type="date" disabled="disabled" value="2020-10-03">
                </div>
            </div>
            <div class="study-new-subject article">
                <div class="article-name">subject</div>
                <div class="article-subject-box">
                    <input id="textbox" type="text" disabled="disabled" value="Vue.js">
                </div>
            </div>
            <div class="study-new-time">
                <div class="time_container article">
                    <div class="article-name">goal</div>
                    <div class="article-time-box">
                        <input type="time" id="startTime" disabled="disabled">
                            ~
                        <input type="time" id="endTime" disabled="disabled">
                    </div>
                </div>
                <div class="time_container article">
                    <div class="article-name">I did</div>
                    <div class="article-time-box">
                        <input type="time" id="startTime" disabled="disabled">
                            ~
                        <input type="time" id="endTime" disabled="disabled">
                    </div>
                </div>
            </div>
            <div class="study-new-content article">
                <div class="article-name">what you studied</div>
                <div class="article-content-box">
                    <textarea id="content-box" disabled="disabled">vue.js에 대해 공부</textarea>
                </div>
            </div>
            <div class="study-new-assessment article">
                <div class="article-name">good</div>
                <div class="article-assessment-box">
                    <input id="assessment" type="text" disabled="disabled" value="vue.js 기본에 대해 이해하였다">
                </div>
            </div>
            <div class="study-new-assessment article">
                <div class="article-name">bad</div>
                <div class="article-assessment-box">
                    <input id="assessment" type="text" disabled="disabled" value="집중력이 조금 부족했다">
                </div>
            </div>
            <div class="listBtn">
                <button type="button" @click="goList">list</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        goList: function() {
            this.$router.push('/study-list')
        }
    }
}
</script>

<style>

</style>