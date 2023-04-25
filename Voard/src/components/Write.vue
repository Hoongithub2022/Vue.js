<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>글 쓰기</v-app-bar-title>
      <p>
        OOO님 반갑습니다.
        <v-btn>로그아웃</v-btn>
      </p>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet max-width="800" class="mx-auto mt-16">
          <v-textarea label="제목" variant="outlined" rows="1" hide-details="true"></v-textarea>
        </v-sheet>
        <v-sheet max-width="800" class="mx-auto mt-5">
          <v-file-input label="File input" variant="outlined" hide-details="true"></v-file-input>
        </v-sheet>
        <v-sheet max-width="800" class="mx-auto mt-5">
          <v-textarea label="내용" variant="outlined" rows="20" hide-details="true"></v-textarea>
        </v-sheet>
        <v-sheet max-width="800" class="mt-5 mx-auto text-right">
          <v-btn @click="btnList">목록</v-btn>
          <v-btn class="ml-2" color="primary" @click="btnView">글 작성</v-btn>
        </v-sheet>
      </v-container>
    </v-main>
    <v-footer app theme="dark">copyright &copy;Voard v1.0</v-footer>
  </v-app>
</template>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const btnList = () => {
  router.push("/list")
}
const btnView = () => {
  router.push("/view")
}
</script>
<style scoped></style>
