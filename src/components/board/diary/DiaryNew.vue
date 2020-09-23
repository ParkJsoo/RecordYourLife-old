<template>
    <div class="diary-new">
        <div class="new_container">
            <div class="new-title">
                <div class="article-name">title</div>
                <div class="article-title-box">
                    <input id="textbox" type="text">
                </div>
            </div>
            <div class="diary-new-date">
                <div class="article-name">date</div>
                <div class="article-date-box">
                    <input type="date">
                </div>
            </div>
            <div class="diary-new-image">
                <div class="article-name">image</div>
                <input id="image-upload" type="file">
            </div>
            <div class="diary-new-content">
                <div class="article-name">content</div>
                <div class="article-content-box">
                    <textarea id="content-box"></textarea>
                </div>
            </div>
            <div class="new-submit">
                <div class="submit-button">
                    <button type="button" id="upload">upload</button>
                    <button type="button" id="reset">reset</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .diary-new {
        width: 100%;
        height: 500px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .new_container {
        width: 30%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .submit-button {
        display: flex;
        justify-content: space-around;
    }
    .submit-button > button {
        padding: 5px 15px;
        color: white;
        background-color: #3F5EFB;
        border: none;
        border-radius: 5px;
    }

    #textbox {
        width: 300px;
    }

    #content-box {
        width: 455.75px;
        height: 200px;
    }
</style>