import { ajax } from "discourse/lib/ajax";

export default Ember.Controller.extend({
  actions: {
    stripePaymentHandler(paymentMethodId, amount) {
      return ajax("/patrons/patrons", {
        data: { paymentMethodId, amount },
        method: "post"
      }).catch(() => {
        return { error: "An error occured while submitting the form." };
      });
    },

    paymentSuccessHandler() {
      DiscourseURL.redirectTo("patrons/thanks");
    }
  }
});