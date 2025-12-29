<template>
    <div>
        <!-- {{ companyName }} -->
        <!-- <span v-for="letter in letters"> {{ letter }}</span> -->
         The content from server is : {{ pageContent }}
        <hr>
         To render this. 
         {{ pageContent?.items[0].body  }}
         <div v-html="pageContent?.items[0].body"></div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
// const companyName = "exact"
// const splted = (String(companyName).split(''))
// const letters = ref([])
// splted.forEach((letter)=>{
//     setTimeout(()=>{
//         nextTick(()=>{
//             letters.value.push(letter)
//         })
//         console.log("Letter:" + toValue(letters))
//     }, 1000)
// })

const pageContent = ref(null);

const AskPages = async ()=>{
    const url = "http://127.0.0.1:8002/api/v2/pages/?type=news.NewsPage&fields=intro,body"
    const response = await fetch(url)
    if (response.ok){
        console.log("Yes ")
        pageContent.value = await response.json()
    }
}

console.log("Want to ask about pages")
onMounted(()=>{
    AskPages()
})


</script>