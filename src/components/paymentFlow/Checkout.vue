<template>
  <form
      id="payment-form"
      v-if="isCart >= 1"
  >
    <br>
    <div ref="paymentElement" id="payment-element">
      <!-- Elements will create form elements here -->
    </div>
    <br>
    <div id="error-message">
      <!-- Display error message to your customers -->
    </div>
  </form>
  <!-- end -->
  <v-card-actions>
    <v-btn
        v-if="isCart >= 1"
        id="submit"
        :loading="loading"
        block
        color="success"
        class="mt-3"
        elevation="2"
        rounded
        dark
        @click="Submit"
    >
      Pay
      <v-icon class="ml-2">mdi-basket</v-icon>
    </v-btn>
  </v-card-actions>
</template>

<script>
export default {
  name: "Checkout",

  async Submit () {
    this.loading = true
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // return_url: project final route thankyou.vue
        return_url: 'http://localhost:8080/#/thankyou/',
        shipping: {
          address: {
            city: this.city,
            line1: this.address,
            postal_code: this.zipcode,
            state: this.state,
            country: 'USA'
          },
          name: `${this.first_name} ${this.last_name}`,
          phone: this.phone
        }
      }
    })
    if (error) {
      this.loading = false
      const messageContainer = document.querySelector(
          '#error-message'
      )
      messageContainer.textContent = error.message
    } else {
      // Customer redirection to return_url.
    }
  },
  displayError (event) {
    const displayError = document.getElementById(
        'error-message'
    )
    if (event.error) {
      displayError.textContent = event.error.message
    } else {
      displayError.textContent = ''
    }
  },
  mounted () {
    paymentElement.mount(this.$refs.paymentElement)
    paymentElement.on('change', (event) => {
      this.displayError(event)
    })
  },


}




const stripe = window.Stripe(
    process.env.VUE_APP_STRIPE_KEY
)
const options = {
  clientSecret: store.state.secret.clientSecret,
  // Stripe themes are fully customizable
  appearance: { theme: 'stripe' }
}

const elements = stripe.elements(options)

const paymentElement = elements.create('payment')

</script>

<style scoped>

</style>