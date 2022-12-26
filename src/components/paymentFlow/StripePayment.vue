<template>
  <StripeElement :element="cardElement" @change="event = $event" />
  <button @click="registerCard">Add</button>
  <div v-if="event && event.error">{{ event.error.message }}</div>

</template>

<script>

import { defineComponent, ref } from 'vue'
import { useStripe, StripeElement } from 'vue-use-stripe'

export default defineComponent({
  name: "StripePayment",
  components: { StripeElement },
  setup() {
    const event = ref(null)

    const {
      stripe,
      elements: [cardElement],
    } = useStripe({
      key: process.env.VUE_APP_STRIPE_PUBLIC_KEY || '',
      elements: [{ type: 'card', options: {} }],
    })

    const registerCard = () => {
      if (event.value?.complete) {
        // Refer to the official docs to see all the Stripe instance properties.
        // E.g. https://stripe.com/docs/js/setup_intents/confirm_card_setup
        return stripe.value?.confirmCardSetup('<client-secret>', {
          payment_method: {
            card: cardElement.value,
          },
        })
      }
    }

    return {
      event,
      cardElement,
      registerCard,
    }
  },
})
</script>

<style scoped>

</style>