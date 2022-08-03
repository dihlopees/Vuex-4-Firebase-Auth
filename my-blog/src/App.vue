<template>
  <div class="container">
    <NavbarCompo />
    <router-view/>
  </div>
</template>

<script>
import NavbarCompo from './components/Navbar-Comp'

export default {
  components: {NavbarCompo}
}
</script>