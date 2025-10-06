<script setup lang="ts">
definePageMeta({
  middleware: ['guest']
})
const { authenticate } = useAuth()

const router = useRouter()

const login = () => {
  const dummyUser: IUser = {
    email: 'dummyUser@test.com',
    _id: '123',
    is_staff: false
  }
  authenticate('dummyToken', dummyUser)

  router.push('/')
}
</script>

<template>
  <div>
    <s-title>{{ $t('login') }}</s-title>
    <s-button @click="login">{{ $t('login') }}</s-button>
  </div>
</template>

<style scoped></style>
