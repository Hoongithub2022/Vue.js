<template>
  <h3>Ch03. Component 실습</h3>

  <h4>1) 컴포넌트 기본</h4>
  <Component1 />
  <Component2></Component2>
  <Parent></Parent>
  <hr />

  <h4>2) 컴포넌트 Options API</h4>
  <MyComponent1></MyComponent1>
  <MyComponent2></MyComponent2>
  <MyComponent3></MyComponent3>
  <MyComponent4></MyComponent4>
  <hr />

  <h4>3) 컴포넌트 통신(데이터 교환)</h4>
  <UComponent1 v-bind:name="name"></UComponent1>
  <UComponent1 v-bind:name="name" :age="age"></UComponent1>
  <ul>
    <UComponent2 v-for="city in cities" :city="city"></UComponent2>
  </ul>
  <UComponent3 v-bind:c3Name="name" :c3Age="age"></UComponent3>
  <hr />
  <UComponent5 v-on:myShow="printValue"></UComponent5>
  <p v-if="value1 && value2">
    이름 : {{ value1 }}<br />
    나이 : {{ value2 }}
  </p>
  <hr />

  <h4>4) 컴포넌트 생명주기</h4>
<<<<<<< HEAD
  <NewComponent v-if="isShow" />
  <button @click="btnStatusToggle">컴포넌트 {{ status }}</button>
=======
>>>>>>> 9e5576ff485b2867b6302a9f013b62b132a116b0
  <hr />
</template>

<script>
/*
  날짜 : 2023-04-05
  이름 : 김훈
  내용 : Ch03. 컴포넌트

  Component
  - 화면 구성요소를 독립적인 모듈 형태로 구성하기 위한 요소
  - SFC 구조(template, script, style)를 이용한 컴포넌트 구성
  - Options API를 이용한 컴포넌트 기능 구현
 */

import Component1 from "./components/Component1.vue";
import Component2 from "./components/Component2.vue";
import Parent from "./components/sub1/Parent.vue";
import MyComponent1 from "./components/sub2/MyComponent1.vue";
import MyComponent2 from "./components/sub2/MyComponent2.vue";
import MyComponent3 from "./components/sub2/MyComponent3.vue";
import MyComponent4 from "./components/sub2/MyComponent4.vue";
import UComponent1 from "./components/sub3/UComponent1.vue";
import UComponent2 from "./components/sub3/UComponent2.vue";
import UComponent3 from "./components/sub3/UComponent3.vue";
import UComponent5 from "./components/sub3/UComponent5.vue";
<<<<<<< HEAD
import NewComponent from "./components/sub4/NewComponent.vue";
=======
>>>>>>> 9e5576ff485b2867b6302a9f013b62b132a116b0

export default {
  name: "App",
  data() {
    return {
      name: "홍길동",
      age: 21,
      cities: ["서울", "대전", "대구", "부산", "광주"],
      value1: "",
      value2: 0,
<<<<<<< HEAD
      status: "제거",
      isShow: true,
=======
>>>>>>> 9e5576ff485b2867b6302a9f013b62b132a116b0
    };
  },
  components: {
    Component1,
    Component2,
    Parent,
    MyComponent1,
    MyComponent2,
    MyComponent3,
    MyComponent4,
    UComponent1,
    UComponent2,
    UComponent3,
<<<<<<< HEAD
    UComponent5,
    NewComponent
=======
    UComponent5
>>>>>>> 9e5576ff485b2867b6302a9f013b62b132a116b0
  },
  methods: {
    printValue: function (data) {
      this.value1 = data.name;
      this.value2 = data.age;
    },
<<<<<<< HEAD
    btnStatusToggle() {
      if (this.isShow) {
        this.isShow = false;
        this.status = '생성'
      } else {
        this.isShow = true;
        this, this.status = "제거";
      }
    },
=======
>>>>>>> 9e5576ff485b2867b6302a9f013b62b132a116b0
  }
};
</script>
