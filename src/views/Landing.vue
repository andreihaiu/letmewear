<template>
  <div>

    <div class="position-relative">
      <!-- shape Hero -->
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="container shape-container d-flex">
          <div class="col px-0">
            <div class="row">
              <div class="col-lg-6">
                <div class="row justify-content-center">
                  <div class="col-lg">
                    <card type="white" shadow
                    header-classes="bg-white pb-5"
                    body-classes="px-lg-5 py-lg-3"
                    class="border-0 mt-5">
                    <div class="row text-center justify-content-center">
                        <div class="col-lg-12">
                            <h2 class="display-5 text-default">Be the first one to find out about the launch date!</h2>
                            <p class="lead text-primary">Subscribe to our newsletter!</p>
                        </div>
                    </div>
                    <template>
                      <form role="form" class="py-3">
                        <base-input alternative
                        class="mb-4"
                        placeholder="Email"
                        addon-left-icon="ni ni-email-83"
                        v-model="email">
                      </base-input>
                      <div class="text-center">
                        <base-button type="primary" class="my-2" @click="onSubscribe">Subscribe</base-button>
                      </div>
                    </form>
                  </template>
                </card>
              </div>
            </div>
          </div>
          <div class="col-lg-6 row justify-content-center">
            <h1 class="display-3 text-white text-center py-2">LetMeWear
              <span>brings your wardrobe in your virtual shopping space!</span>
            </h1>
            <img class="img-fluid floating" src="./fashion.png" width="100%" height="75%"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
<!-- <section class="section section-lg pt-lg-0 mt--200">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-12">
        <div class="row row-grid">
          <div class="col-lg-4">
            <card class="border-0" hover shadow body-classes="py-0 px-0">
              <img src="./bershka1.jpg" width="100%" height="40%"/>
              <card class="border-0" body-classes="py-3 px-3">
                <h6>Rochie scurtă încrețită</h6>
                <h6 class="text-warning text-uppercase">Bershka</h6>
                <p class="description mt-3"><s>159,90 RON</s> 84,90 RON</p>
                <div>
                  <badge type="warning" rounded>XS</badge>
                  <badge type="warning" rounded>S</badge>
                  <badge type="warning" rounded>M</badge>
                  <badge type="warning" rounded>L</badge>
                </div>
                <base-button tag="a" href="#" type="warning" class="mt-3">
                Buy Now
              </base-button>
            </card>
          </card>
        </div>
        <div class="col-lg-4"> -->
          <!-- <card class="border-0" hover shadow body-classes="py-5">
          <icon name="ni ni-istanbul" type="success" rounded class="mb-4">
        </icon>
        <h6 class="text-success text-uppercase">Build Something</h6>
        <p class="description mt-3">Argon is a great free UI package based on Bootstrap
        4 that includes the most important components and features.</p>
        <div>
        <badge type="success" rounded>business</badge>
        <badge type="success" rounded>vision</badge>
        <badge type="success" rounded>success</badge>
      </div>
      <base-button tag="a" href="#" type="success" class="mt-4">
      Learn more
    </base-button>
  </card> -->
  <!-- <card class="border-0" hover shadow body-classes="py-0 px-0">
    <img src="./bershka2.jpg" width="100%" height="40%"/>
    <card class="border-0" body-classes="py-3 px-3">
      <h6>Rochie scurtă imitație de piele</h6>
      <h6 class="text-warning text-uppercase">Bershka</h6>
      <p class="description mt-3"><s>129,90 RON</s> 66,90 RON</p>
      <div>
        <badge type="warning" rounded>XS</badge>
        <badge type="warning" rounded>S</badge>
        <badge type="warning" rounded>M</badge>
        <badge type="warning" rounded>L</badge>
      </div>
      <base-button tag="a" href="#" type="warning" class="mt-3">
      Buy Now
    </base-button>
  </card>
</card>
</div>
<div class="col-lg-4">
  <card class="border-0" hover shadow body-classes="py-0 px-0">
    <img src="./bershka3.jpg" width="100%" height="40%"/>
    <card class="border-0" body-classes="py-3 px-3">
      <h6>Rochie imitație de piele curea</h6>
      <h6 class="text-warning text-uppercase">Bershka</h6>
      <p class="description mt-3"><s>129,90 RON</s> 66,90 RON</p>
      <div>
        <badge type="warning" rounded>XS</badge>
        <badge type="warning" rounded>S</badge>
        <badge type="warning" rounded>M</badge>
        <badge type="warning" rounded>L</badge>
      </div>
      <base-button tag="a" href="#" type="warning" class="mt-3">
      Buy Now
    </base-button>
  </card>
</card>
</div>
</div> -->
<!-- </div>
</div>
</div>
</section> -->
<section id="howitworks" class="section section-lg-0">
  <div class="container">
    <div class="row row-grid align-items-center">
      <div class="col-md-6 order-md-1">
        <img src="./animation.gif" class="img-fluid floating col-md-7 ml-5"/>
      </div>
      <div class="col-md-6 order-md-2">
        <div class="pr-md-5">
          <h3>How <b>it</b> works?</h3>
          <ul class="list-unstyled mt-5">
            <li class="py-2">
              <div class="d-flex align-items-center">
                <!-- <badge type="success" circle class="mr-3" icon="ni ni-settings-gear-65"></badge> -->
                <img class="mr-3" src="./one.svg" width="50px" height="50px"/>
                <h6 class="mb-0">Add articles to your virtual wardrobe</h6>
              </div>
            </li>
            <li class="py-2">
              <div class="d-flex align-items-center">
                <!-- <badge type="success" circle class="mr-3" icon="ni ni-html5"></badge> -->
                <img class="mr-3" src="./two.svg" width="50px" height="50px"/>
                <h6 class="mb-0">Select which articles to try on yourself</h6>
              </div>
            </li>
            <li class="py-2">
              <div class="d-flex align-items-center">
                <!-- <badge type="success" circle class="mr-3" icon="ni ni-satisfied"></badge> -->
                <img class="mr-3" src="./three.svg" width="50px" height="50px"/>
                <h6 class="mb-0">Check whether it fits or not</h6>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="feature" class="section section-lg-0">
  <div class="container">
    <div class="row row-grid align-items-center">
      <div class="col-md-6 order-md-2">
        <img src="./clothing.svg" class="img-fluid floating px-4">
      </div>
      <div class="col-md-6 order-md-1">
        <div class="pr-md-5">
          <h3>Awesome <b>shopping</b> features!</h3>
          <p>With <b>LetMeWear</b> you can have fun while shopping online! Not only you have amazing discounts, but you can also try on articles using your smartphone's camera!</p>
          <ul class="list-unstyled mt-5">
            <li class="py-2">
              <div class="d-flex align-items-center">
                <!-- <badge type="success" circle class="mr-3" icon="ni ni-settings-gear-65"></badge> -->
                <img class="mr-3" src="./first.svg" width="50px" height="50px"/>
                <h6 class="mb-0">Virtually try on clothes, shoes and accessories of your liking</h6>
              </div>
            </li>
            <li class="py-2">
              <div class="d-flex align-items-center">
                <!-- <badge type="success" circle class="mr-3" icon="ni ni-html5"></badge> -->
                <img class="mr-3" src="./second.svg" width="50px" height="50px"/>
                <h6 class="mb-0">Create your own personalized virtual 3D Model</h6>
              </div>
            </li>
            <li class="py-2">
              <div class="d-flex align-items-center">
                <!-- <badge type="success" circle class="mr-3" icon="ni ni-satisfied"></badge> -->
                <img class="mr-3" src="./third.svg" width="50px" height="50px"/>
                <h6 class="mb-0">Budget friendly offers</h6>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- <section class="section bg-secondary">
<div class="container">
<div class="row row-grid align-items-center">
<div class="col-md-6">
<div class="card bg-default shadow border-0">
<img v-lazy="'img/theme/mobile.svg'" class="card-img-top">
<blockquote class="card-blockquote">
<svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95"
class="svg-bg">
<polygon points="0,52 583,95 0,95" class="fill-default"></polygon>
<polygon points="0,42 583,95 683,0 0,95" opacity=".2" class="fill-default"></polygon>
</svg>
<h4 class="display-3 font-weight-bold text-white">Design System</h4>
<p class="lead text-italic text-white">The Arctic Ocean freezes every winter and much of
the sea-ice then thaws every summer, and that process will continue whatever
happens.</p>
</blockquote>
</div>
</div>
<div class="col-md-6">
<div class="pl-md-5">
<icon name="ni ni-settings" class="mb-5" size="lg" type="warning" shadow rounded></icon>

<h3>Our customers</h3>
<p class="lead">Don't let your uses guess by attaching tooltips and popoves to any element.
Just make sure you enable them first via JavaScript.</p>
<p>The kit comes with three pre-built pages to help you get started faster. You can change
the text and images and you're good to go.</p>
<p>The kit comes with three pre-built pages to help you get started faster. You can change
the text and images and you're good to go.</p>
<a href="#" class="font-weight-bold text-warning mt-5">A beautiful UI Kit for impactful
websites</a>
</div>
</div>
</div>
</div>
</section> -->
<!-- <section class="section section section-shaped my-0 overflow-hidden">
<div class="shape shape-style-1 bg-gradient-warning shape-skew">
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
</div>
<div class="container py-0">
<div class="row row-grid align-items-center">
<div class="col-md-6 order-lg-2 ml-lg-auto">
<div class="position-relative pl-md-5">
<img src="img/ill/ill-2.svg" class="img-center img-fluid">
</div>
</div>
<div class="col-lg-6 order-lg-1">
<div class="d-flex px-3">
<div>
<icon name="ni ni-building" size="lg" class="bg-gradient-white" color="primary" shadow
rounded></icon>
</div>
<div class="pl-4">
<h4 class="display-3 text-white">Modern Interface</h4>
<p class="text-white">The Arctic Ocean freezes every winter and much of the sea-ice then
thaws every summer, and that process will continue whatever happens.</p>
</div>
</div>
<card shadow class="shadow-lg--hover mt-5">
<div class="d-flex px-3">
<div>
<icon name="ni ni-satisfied" gradient="success" color="white" shadow
rounded></icon>
</div>
<div class="pl-4">
<h5 class="title text-success">Awesome Support</h5>
<p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws
every summer, and that process will continue whatever happens.</p>
<a href="#" class="text-success">Learn more</a>
</div>
</div>
</card>
<card shadow class="shadow-lg--hover mt-5">
<div class="d-flex px-3">
<div>
<icon name="ni ni-active-40" gradient="warning" color="white" shadow
rounded></icon>
</div>
<div class="pl-4">
<h5 class="title text-warning">Modular Components</h5>
<p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws
every summer, and that process will continue whatever happens.</p>
<a href="#" class="text-warning">Learn more</a>
</div>
</div>
</card>
</div>
</div>
</div>
</section> -->
<section id="rating" class="section section-lg">
  <div class="container">
    <div class="row justify-content-center text-center mb-lg">
      <div class="col-lg-8">
        <h2 class="display-3">How is our application rated by users?</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
        <div class="px-2">
          <img v-lazy="'img/theme/ghili.jpg'"
          class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
          style="width: 200px;">
          <div class="pt-4 text-center">
            <h5 class="title">
              <span class="d-block mb-1">Daniel Ghilință</span>
              <small class="h6 text-muted">Amazing products! Super quality and good prices. My whole family installed the app. It's super funny and really, really useful! Thank you, LetMeWear!</small>
            </h5>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
        <div class="px-2">
          <img v-lazy="'img/theme/adina.jpg'"
          class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
          style="width: 200px;">
          <div class="pt-4 text-center">
            <h5 class="title">
              <span class="d-block mb-1">Adina Mitru</span>
              <small class="h6 text-muted">I never thought I could have my own virtual dressing room. I can really see me wearing glasses, hats, scarves live, on my mobile phone. WOW!</small>
            </h5>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
        <div class="px-2">
          <img v-lazy="'img/theme/toni.jpg'"
          class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
          style="width: 200px;">
          <div class="pt-4 text-center">
            <h5 class="title">
              <span class="d-block mb-1">Antoniu Cîrjan</span>
              <small class="h6 text-muted">This app is a life saver. I never returned clothing items since downloading LetMeWear. Perfect fit, products match 1:1 the descriprion. Well done!</small>
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<download></download>
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
                      <h2 class="display-3 text-white">Don't forget to subscribe in order to find out about the launch date!</h2>
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
                                            addon-left-icon="ni ni-email-83"
                                            v-model="email">
                                </base-input>
                                <div class="text-center">
                                    <base-button type="primary" class="my-2" @click="onSubscribe">Subscribe</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>
</div>
</template>

<script>
import register from './Register.vue';
import download from './components/DownloadSection.vue';
import axios from 'axios';
export default {
  name: "home",
  data() {
    return {
      email: ''
    }
  },
  components: {
    register,
    download
  },
  methods: {
    onSubscribe: function() {
      console.log("Email is: " + this.email);
      if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.email)) {
        axios({
          url: 'https://formspree.io/f/xnqozkzg',
          method: 'post',
          headers: {
            'Accept': 'application/json'
          },
          data: {
            email: this.email
          }
        }).then((response) => {
          console.log(response);
          alert("Your email has been submitted!")
        }).catch((error) => {
          if (error.response) {
            alert(error.response.data);
          }
        });
      } else {
        alert("You have entered an invalid email address!")
      }
    }
  }
}
</script>
