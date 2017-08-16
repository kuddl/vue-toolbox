<script>
export default {
  render () { },
  created () {
    this.onSignOut()
  },
  methods: {
    onSignOut () {
      this.$store.dispatch('signUserOut')
      this.$router.push('/')
    }
  }
}
</script>
