<template>
  <q-layout view="lHh Lpr fff" :class="">
    <q-header elevated>
      <q-toolbar class="toolbar">
        <div class="mobile-only text-black">
          <div class="full-width row no-wrap justify-start items-start content-start header-container">
            <div class="col-7">
              <q-btn flat @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu" icon="fa fa-bars">
              </q-btn>
            </div>

          </div>
        </div>

        <!-- Desktop Tabs -->
        <div class="desktop-only">
          <div class="row header-container">
            <div class="col-md-4">
              <img class="logo" src="../assets/computer.png" alt="Harvard Copy logo" />
            </div>
            <q-tabs dense shrink stretch indicator-color="accent" class="text-black col-md-8 absolute-right"
              v-model="tabModel">
              <span v-for="tab in tabs">
                <q-route-tab :label="tab.name" :name="tab.name" :to="tab.link" />
              </span>
            </q-tabs>
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <!-- Mobile Tabs -->
    <q-drawer v-model="leftDrawerOpen" class="mobile-only">
      <q-list link bordered v-for="tab in tabs">
        <q-item clickable @click.native="push(tab)" v-ripple>
          <q-item-section>{{tab.name}}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container :class="backgroundClass">
      <router-view />
    </q-page-container>

    <q-footer bordered>
      <q-toolbar class="text-black">
        <q-toolbar-title class="row justify-around q-mt-lg q-gutter-sm">

          <q-form @submit="onSubmit" class="col-sm-12 col-md-5 self-center q-mb-md q-gutter-sm">
            <q-input filled v-model="name" label="Name" />

            <q-input filled v-model="number" label="Number" />

            <q-input filled v-model="email" label="Email" />

            <q-input filled autogrow v-model="message" label="Message" />

            <div>
              <q-btn label="Submit" type="submit" color="accent" />
            </div>
          </q-form>

          <div class="col-sm-8 col-md-5 self-center desktop-only">
            <iframe :src="map" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
          </div>
          <div class="col-sm-11 self-center mobile-only">
            <iframe :src="map" width="300" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
          </div>

        </q-toolbar-title>
      </q-toolbar>
      <q-toolbar class="text-black desktop-only">
        <q-toolbar-title class="row justify-between q-mt-sm">

          <div class="col-md-4 self-center">
            <q-img class="logo" src="../statics/computer.png" alt="Logo"></q-img>
          </div>
          <div class="col-md-4 self-center">
          </div>
          <div class="col-md-4 self-center ">
            <span class="text-h5">Copyright {{year}} </span>
            <a href="https://ebenezerwebsites.com" target="_blank" class="text-h5">Ebenezer Websites
              LLC</a>
          </div>

        </q-toolbar-title>
      </q-toolbar>

      <q-toolbar class="text-black mobile-only">
        <q-toolbar-title class="row justify-center q-mt-md q-mb-md">
          <div class="col-md-10 self-center ">
            <span class="text-body1">Copyright {{year}} </span>
            <a href="https://ebenezerwebsites.com" target="_blank" class="text-body1">Ebenezer Websites
              LLC</a>
          </div>
        </q-toolbar-title>
      </q-toolbar>

    </q-footer>

    <q-page-sticky position="bottom-right" :offset="[18, 18]" class="desktop-only">
      <q-btn to="/contact" color="accent" size="lg" outline rounded no-caps class="bg-white shadow-12">
        Request a Quote
      </q-btn>
    </q-page-sticky>
    <q-page-sticky position="bottom-right" :offset="[35, 35]" class="mobile-only">
      <q-btn to="/contact" color="accent" size="md" outline rounded no-caps class="bg-white shadow-12">
        Request a Quote
      </q-btn>
    </q-page-sticky>

  </q-layout>
</template>

<script>
  import { openURL, Notify } from 'quasar'

  export default {
    name: 'MyLayout',
    data() {
      return {
        name: '',
        number: '',
        message: '',
        email: '',
        tabModel: '/',
        backgroundClass: 'background',
        leftDrawerOpen: false,
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d370691.5977983273!2d-116.52432606220361!3d43.46001037634007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54aef4cf3ac62cc9%3A0xc30a558e3dd87d03!2sAda%20County%2C%20ID!5e0!3m2!1sen!2sus!4v1573106572145!5m2!1sen!2sus'
      }
    },
    computed: {
      tabs() {
        return this.$store.state.tabs.tabs
      },
      companyName() {
        return this.$store.state.state.companyName
      },
      year() {
        var y = new Date;
        return y.getFullYear();
      }
    },
    mounted() {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        this.backgroundClass = 'backgroundMobile';
      }
    },
    methods: {
      openURL,
      push(tab) {
        this.$router.push(tab.link)
        this.leftDrawerOpen = false;
      },
      onSubmit() {
        Notify.create({
          color: 'green-4',
          icon: 'fa fa-check-circle',
          message: 'Submitted! (not really)'
        })
      },
    }
  }
</script>

<style>
</style>