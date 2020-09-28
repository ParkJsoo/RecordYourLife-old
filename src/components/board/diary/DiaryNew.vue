<template>
    <div class="diary-new">
        <div class="new_container">
            <div class="diary-new-title article">
                <div class="article-name">title</div>
                <div class="article-title-box">
                    <input id="textbox" type="text">
                </div>
            </div>
            <div class="diary-new-date article">
                <div class="article-name">date</div>
                <div class="article-date-box">
                    <input type="date">
                </div>
            </div>
            <div class="diary-new-image article">
                <div class="article-name">image</div>
                <div v-if="!files.length" class="diary-befor-upload">
                    <div class="before-input-box">
                        <label for="file" class="uploadBtn"><div>file</div></label>
                        <input type="file" id="file" ref="files" @change="imageUpload" multiple style="display: none;"/>
                        <span class="noImage">첨부한 이미지가 없습니다</span>
                    </div>
                    
                </div>
                <div v-else class="diary-after-upload">
                    <div class="after-input-box">
                        <label for="file" class="uploadBtn"><div>file+</div></label>
                        <input type="file" id="file" ref="files" @change="imageAddUpload" multiple style="display: none;"/>
                        <label for="fileclear" class="clearBtn"><div>clear</div></label>
                        <button id="fileclear" @click="allClear" style="display: none;"></button>
                    </div>
                    <div class="after-container">
                        <div v-for="(file, index) in files" :key="index" class="after-image-box">
                            <div class="deleteBtn" @click="fileDeleteButton" :name="file.number">
                                x
                            </div>
                            <img :src="file.preview"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="diary-new-content article">
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
    data: function() {
      return {
            files: [], //업로드용 파일
            filesPreview: [],
            uploadImageIndex: 0 // 이미지 업로드를 위한 변수
        }
    },
    methods: {
        imageUpload() {
            console.log(this.$refs.files.files);

            // this.files = [...this.files, this.$refs.files.files];
            //하나의 배열로 넣기
            let num = -1;
            for (let i = 0; i < this.$refs.files.files.length; i++) {
                this.files = [
                    ...this.files,
                    //이미지 업로드
                    {
                        //실제 파일
                        file: this.$refs.files.files[i],
                        //이미지 프리뷰
                        preview: URL.createObjectURL(this.$refs.files.files[i]),
                        //삭제및 관리를 위한 number
                        number: i
                    }
                ];
                num = i;
                //이미지 업로드용 프리뷰
                // this.filesPreview = [
                //   ...this.filesPreview,
                //   { file: URL.createObjectURL(this.$refs.files.files[i]), number: i }
                // ];
            }
            this.uploadImageIndex = num + 1; //이미지 index의 마지막 값 + 1 저장
            console.log(this.files);
            // console.log(this.filesPreview);
        },
        imageAddUpload() {
            console.log(this.$refs.files.files);

            // this.files = [...this.files, this.$refs.files.files];
            //하나의 배열로 넣기c
            let num = -1;
            for (let i = 0; i < this.$refs.files.files.length; i++) {
                console.log(this.uploadImageIndex);
                this.files = [
                    ...this.files,
                    //이미지 업로드
                    {
                        //실제 파일
                        file: this.$refs.files.files[i],
                        //이미지 프리뷰
                        preview: URL.createObjectURL(this.$refs.files.files[i]),
                        //삭제및 관리를 위한 number
                        number: i + this.uploadImageIndex
                    }
                ];
                num = i;
            }
            this.uploadImageIndex = this.uploadImageIndex + num + 1;

            console.log(this.files);
            // console.log(this.filesPreview);
        },
        fileDeleteButton(e) {
            const name = e.target.getAttribute('name');
            this.files = this.files.filter(data => data.number !== Number(name));
            // console.log(this.files);
        },
        allClear() {
            this.files = ''
        }
}
}
</script>

<style>
    .diary-new {
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

    .diary-new input {
        height: 30px;
        border: 1px solid gray;
        border-radius: 5px;
    }

    .diary-new button {
        padding: 5px 15px;
        color: white;
        background-color: #3F5EFB;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .new_container {
        width: 500px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .article {
        margin-bottom: 20px;
    }

    .article-name {
        margin-bottom: 20px;
        font-size: 1.5rem;
        font-weight: 700;
    }

    .noImage {
        color: dimgray;
        font-weight: 600;
    }

    .after-container {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }

    .after-input-box {
        margin-bottom: 20px;
    }

    .after-image-box img {
        width: 80px;
        height: 80px;
        margin: 0 20px 20px 0;
    }

    .uploadBtn, .clearBtn {
        margin-right: 10px;
        padding: 5px 15px;
        display: inline-block;
        color: white;
        background-color: #3F5EFB;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .deleteBtn {
        position: absolute;
        width: 20px;
        height: 20px;
        color: #fff;
        font-weight: bold;
        text-align: center;
        background-color: #666666;
        cursor: pointer;
    }

    .submit-button {
        display: flex;
        justify-content: space-around;
    }

    #textbox {
        width: 50%;
    }

    #content-box {
        width: 100%;
        height: 150px;
        border: 1px solid gray;
        border-radius: 5px;
    }
</style>