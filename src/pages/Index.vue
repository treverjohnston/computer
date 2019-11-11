<template>
    <q-page>
        <!-- DESKTOP -->
        <div class="row justify-center header text-center home-header desktop-only">
            <div class="col-xs-12 vh_75">
                <h1 class="text-accent text-weight-bolder header-text"
                    v-anime="{opacity: { value: ['0', '1'], duration: 500,delay:300 }, translateY: { value: ['-200px', '0px'], duration: 1000},  easing: 'linear', delay:100 }">
                    <!-- <q-img class="logo-banner" src="../statics/computer.png" alt="Harvard Copy Logo"></q-img> -->
                    Computer Repair Co.
                </h1>
            </div>
        </div>
        <div class="row justify-center second-header text-center header-padding desktop-only q-gutter-md shadow-24">
            <div class="col-xs-10 col-sm-9 col-md-8 text-center white-background text-padding shadow-12 self-center home-border"
                v-anime="{opacity: { value: ['0', '1'], duration: 500,delay:300 }, translateY: { value: ['100px', '-75px'], duration: 1000},  easing: 'linear', delay:100 }">
                <div class="text-h2">
                    Service, Sales, Repair
                </div>
                <hr />
                <div class="text-h4 q-mt-lg">
                    We will match or beat any competitor's pricing*
                </div>
                <div class="text-h4 q-mt-lg">
                    FREE DIAGNOSTIC computer repair, sales, and service in Boise, Idaho*
                </div>
                <div class="text-h6 q-mt-lg" v-scroll-fire="fadeInImage">
                    *Not really. This is just a mock up site.
                </div>
            </div>
        </div>
        <!--  -->
        <!-- MOBILE -->
        <div class="row justify-center text-center mobile-only">
            <div class="col-xs-12 vh_60">
                <h1 class="text-weight-bolder text-h3 text-accent"
                    v-anime="{opacity: { value: ['0', '1'], duration: 500,delay:300 }, translateY: { value: ['-200px', '0px'], duration: 1000},  easing: 'linear', delay:100 }">
                    <!-- <q-img class="logo-banner" src="../statics/computer.png" alt="Harvard Copy Logo"></q-img> -->
                    Computer Repair Co.
                </h1>
            </div>
        </div>
        <div class="row justify-center second-header text-center header-padding mobile-only">
            <div class="col-xs-10 col-sm-9 col-md-8 text-justify white-background text-padding shadow-12 mobile-margin border-background"
                v-anime="{  opacity: { value: ['0', '1'], duration: 8000 }}">
                <div class="text-h5">
                    Service, Sales, Repair
                </div>
                <hr />
                <div class="text-body1 q-mt-lg">
                    We will match or beat any competitor's pricing*
                </div>
                <div class="text-body1 q-mt-lg">
                    FREE DIAGNOSTIC computer repair, sales, and service in Boise, Idaho*
                </div>
                <div class="text-body1 q-mt-lg" v-scroll-fire="fadeInImage">
                    *Not really. This is just a mock up site.
                </div>
            </div>
        </div>
        <!-- END MOBILE  -->

        <div class="row justify-center header text-center ">
            <q-card @click="setSelectedService(card)" :id="card.id" v-for="card in services"
                class="col-xs-10 col-sm-4 col-md-5 col-lg-4 col-xl-2 bg-primary text-white card-ind not-loaded grow"
                v-anime="{ translateY: {value: ['0px', '-150px'], duration: 4000, }}">
                <q-card-section>
                    <div class="text-h6 text-accent">{{card.display}}</div>
                </q-card-section>

                <q-separator dark color="accent" />
                <q-card-section>
                    <q-icon color="accent" :name="card.img != '' ? card.img : fallbackIcon " class="icon-ind grow" />
                </q-card-section>
                <q-separator dark color="accent" class="desktop-only" />
                <q-card-section class="desktop-only">
                    <div class="text-body2 text-black">{{card.description}}</div>
                </q-card-section>

            </q-card>
        </div>


        <q-dialog v-model="modal" minimized class="">
            <q-card class="">
                <q-img src="../statics/computer.png" class="">
                    <q-btn icon="close" flat round dense v-close-popup />
                    <div class="absolute-bottom">
                        <div class="text-h4 text-center">
                            {{selectedService.display}}
                        </div>
                    </div>
                </q-img>
                <q-card-section class="q-display-4 text-center">
                    <div class="row justify-center">
                        <div class="col-xs-10 q-body-1 text-justify q-mt-lg">
                            {{selectedService.description}}
                        </div>
                    </div>
                </q-card-section>
                <q-card-section class="q-display-4 text-center q-mt-md">
                    <q-btn to="/contact" outline rounded no-caps class="q-mr-sm heading shadow-1">
                        Request
                        a
                        Quote
                    </q-btn>
                    <q-btn outline rounded no-caps @click="modal = false" label="Close" />
                </q-card-section>
            </q-card>
            </div>
        </q-dialog>



    </q-page>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                fallbackIcon: 'fa fa-desktop',
                modal: false,
                selectedService: ''
            }
        },
        computed: {
            services() {
                return this.$store.state.services.services;
            },
        },
        methods: {
            push(link) {
                this.$router.push(link)
            },
            fadeInImage() {
                this.services.forEach(service => {
                    var el = document.getElementById(service.id)
                    el.classList.add('loaded')
                });
            },
            setSelectedService(service) {
                this.selectedService = service;
                this.modal = true;
            }
        }
    }
</script>

<style scoped>
</style>