<template>
  <div class="diary-new">
        <div class="new_container">
            <div class="diary-new-title article">
                <div class="article-name">title</div>
                <div class="article-title-box">
                    <input id="textbox" type="text" disabled="disabled" value="글 제목입니다">
                </div>
            </div>
            <div class="diary-new-date article">
                <div class="article-name">date</div>
                <div class="article-date-box">
                    <input type="date" disabled="disabled" value="2020-10-02">
                </div>
            </div>
            <div class="diary-new-image article">
                <div class="article-name">image</div>
                <img src="@/assets/images/logo/logo_ryl_color.png" width="80px">
            </div>
            <div class="diary-new-content article">
                <div class="article-name">content</div>
                <div class="article-content-box">
                    <textarea id="content-box" disabled="disabled">글 내용입니다</textarea>
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
            this.$router.push('/diary-list')
        }
    }
}
</script>

<style>
    .listBtn {
        text-align: right;
    }
</style>