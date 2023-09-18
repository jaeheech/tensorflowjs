<template>
  <div>
    <div v-for="(article, index) in articles" :key="index" class="article">
      <h1>{{ article.title }}</h1>
      <p>{{ article.summary }}</p>
      <a :href="article.articleLink" target="_blank">
        <img :src="article.imageUrl" alt="게시물 이미지" />
      </a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      articles: []
    }
  },
  mounted() {
    // 서버에서 데이터를 가져오는 Axios 요청
    axios
      .get('/healthnews-data')
      .then((response) => {
        this.articles = response.data
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }
}
</script>
