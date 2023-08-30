<template>
  <div>
    <div>OpenAi기반 API 챗</div>
    <hr />
    <textarea
      disabled
      name=""
      id=""
      cols="30"
      rows="10"
      :value="resp"
    ></textarea>
    <br />
    <input
      @keyup.enter="gpt3()"
      v-model="inData"
      placeholder="질문할 내용입력하기"
    />
    <button @click="gpt3()">묻기</button>
  </div>
</template>
<script>
import { gpt3 } from '../../public/gpt3_1풀이.js'
export default {
  data() {
    return {
      inData: '',
      resp: ''
      // init: '',
      // history: ''
    }
  },
  methods: {
    gpt3: async function () {
      this.resp = '타이핑중...'
      const start = this.inData
      const answer = await gpt3(start)
      this.resp = answer
    }
  }
}
</script>
<style scoped>
textarea {
  font-size: 1.1em;
  color: cadetblue;
  resize: none;
  font-weight: bold;
  background-color: antiquewhite;
}
input {
  width: 210px;
  height: 30px;
}
button {
  width: 45px;
  height: 36px;
}
</style>
<!-- <template>
  <div>
    <div class="chat-header">카카오톡 KOGPT 자연어 처리기반 API 챗</div>
    <hr />
    <div class="chat-history">
      <div
        v-for="message in chatMessages"
        :key="message.id"
        class="chat-message"
      >
        <div v-if="message.type === 'user'" class="user-message">
          {{ message.content }}
        </div>
        <div v-else class="bot-message">{{ message.content }}</div>
      </div>
    </div>
    <div class="chat-input">
      <input
        @keyup.enter="gpt()"
        v-model="inData"
        placeholder="질문할 내용 입력하기"
      />
      <button @click="gpt()">묻기</button>
    </div>
  </div>
</template>

<script>
import { gptApi } from '../../public/gpt3.js'
export default {
  data() {
    return {
      inData: '',
      chatMessages: []
    }
  },
  methods: {
    gpt: async function () {
      const ask = this.inData
      const answer = await gptApi(ask, 32, 0.6, 0.7, 1)
      this.addMessage('user', ask)
      this.addMessage('bot', answer)
      this.inData = '' // Clear the input field after sending the message
    },
    addMessage(type, content) {
      this.chatMessages.push({ id: Date.now(), type, content })
    }
  }
}
</script>

<style scoped>
.chat-header {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

.chat-history {
  height: 200px;
  overflow-y: auto;
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 5px;
}

.chat-message {
  margin-bottom: 10px;
}

.user-message {
  background-color: #4caf50;
  color: white;
  padding: 8px;
  border-radius: 5px;
  align-self: flex-start;
}

.bot-message {
  background-color: #2196f3;
  color: white;
  padding: 8px;
  border-radius: 5px;
  align-self: flex-end;
}

.chat-input {
  display: flex;
  margin-top: 10px;
}

input {
  flex: 1;
  height: 30px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
}

button {
  width: 80px;
  height: 36px;
  margin-left: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style> -->
