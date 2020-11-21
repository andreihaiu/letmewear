<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg-md">
          <div class="container pt-lg-0 pb-100">
              <div class="row text-center justify-content-center">
                  <div class="col-lg-12">
                      <h2 class="display-3 text-white">Be the first one to find out about the launch date!</h2>
                      <p class="lead text-white">Write over your email and subscribe to our newsletter!</p>
                  </div>
              </div>
          </div>
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                            <form role="form" class="py-3">
                                <base-input alternative
                                            class="mb-4"
                                            placeholder="Email"
                                            addon-left-icon="ni ni-email-83">
                                </base-input>
                                <div class="text-center">
                                    <base-button type="primary" class="my-2">Subscribe</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {};
</script>
<style>
</style>
