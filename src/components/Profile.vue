<template>

</template>

<script>
import { auth } from '@/firebase'

export default {
  mounted () {
    const user = auth.currentUser
    // const name, email, photoUrl, uid, emailVerified;
    // if (user !== null) {
    //   name = user.displayName;
    //   email = user.email;
    //   photoUrl = user.photoURL;
    //   emailVerified = user.emailVerified;
    // }
    console.log(user)
  }
}
</script>

<style>

</style>
