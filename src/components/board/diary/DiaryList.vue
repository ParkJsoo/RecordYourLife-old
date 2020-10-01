<template>
    <div class="diary_board">
        <div class="board_title">Diary</div>
        <div class="board_container">
			<table class="board_table" id='board_list'>
				<thead>
					<tr class="listTr">
						<th class="w150">number</th>
						<th>title</th>
						<th>date</th>
						<th class="w150">attachment</th>
						<th class="w150">edit</th>
						<th class="w150" v-show="showDel">delete</th>
					</tr>
				</thead>
				<tbody>
					<tr class="listTr" v-for="(a1, index) in temp_list" :key="index">
						<td>{{a1}}</td>
						<td class="postTitle" @click="goPost">글 제목 입니다</td>
						<td>2020-09-23</td>
						<td class="attachment">Y</td>
						<td><button type="button" class="editBtn">수정</button></td>
						<td v-show="showDel"><input type="checkbox"></td>
					</tr>
				</tbody>
			</table>
			<div class="board_bottom">
				<div class="board_bottom_page">
					<ul class="board_paging">
						<li class="page-item">
							<router-link to="/diary-list" class="page-link">이전</router-link>
						</li>
						<li class="page-item" v-for="(a1, index) in temp_list" :key="index">
							<router-link to="/diary-list" class="page-link">{{a1}}</router-link>
						</li>
						<li class="page-item">
							<router-link to="/diary-list" class="page-link">다음</router-link>
						</li>
					</ul>
				</div>
				<div class="board_button">
					<button type="button" class="boardBtn btn btn-primary" @click="goWrite">글쓰기</button>
					<button type="button" class="boardBtn" @click="showDelOn">삭제</button>
					<button type="button" class="boardBtn" @click="showDelOff" v-show="showDel">취소</button>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
export default {
	data: function() {
		return {
			showDel: false,
			temp_list : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		}
	},
	methods: {
		showDelOn: function() {
			this.showDel = true
		},
		showDelOff: function() {
			this.showDel = false
		},
		goPost: function() {
            this.$router.push('/diary-post')
		},
		goWrite: function() {
			this.$router.push('/diary-new')
		}
	}
}
</script>

<style>
	.diary_board {
		width: 80%;
		height: auto;
		margin: 0 auto;
		margin-bottom: 100px;
		padding: 50px;
		box-sizing: border-box;
		border: 1.5px solid lightgray;
		border-radius: 5px;
		box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.25);
	}
	.board_title {
		height: 30px;
		text-align: left;
		margin-bottom: 30px;
		border-bottom: 1px solid gray;
	}
	.board_container {
		height: auto;
		display: flex;
		flex-direction: column;
        align-items: center;
		justify-content: space-between;
	}
	.postTitle {
		cursor: pointer;
	}
	.w150 {
		width: 150px;
	}
	.board_table {
		width: 100%;
		text-align: center;
	}
	.listTr {
		border-bottom: 0.5px solid lightgray;
		height: 40px;
	}
	.board_table > thead > tr > th {
		vertical-align: middle;
	}
	.board_table > tbody > tr > td {
		vertical-align: middle;
	}
	.board_bottom {
		width: 100%;
	}
	.board_paging {
		width: 50%;
		margin: 50px auto;
		display: flex;
		justify-content: space-around;
	}
	.page-link {
		text-decoration: none;
		color: black;
	}
	.board_button {
		text-align: right;
	}
	.boardBtn {
		margin: 0 10px;
		padding: 5px 15px;
        color: white;
        background-color: #3F5EFB;
        border: none;
        border-radius: 5px;
	}
	.editBtn {
		padding: 5px;
		color: white;
        background-color: #3F5EFB;
        border: none;
        border-radius: 5px;
	}
</style>