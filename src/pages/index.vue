<template>
  <v-app>
    <v-main class="d-flex flex-column align-center">
      <div class="w-100 d-flex align-center pa-3">
        <div class="d-flex align-center ga-3">
          <img
            id="logo"
            src="@/assets/nexus_logo.svg"
          />
          <div class="text-h5">NEXUSe2e</div>
        </div>
        <v-spacer />
      </div>
      <div class="container px-6 py-8 h-100 d-flex flex-column flex-md-row justify-md-space-between align-center">
        <v-row justify="space-around">
          <v-col class="pb-16"
           cols="12"
            md="12"
          >
            <H1 class="mb-0" style="text-transform: uppercase; color: rgba(230, 96, 9)">Our toolbox for reliable and secure data transfer</H1>
            <h3 class="pl-6" style="color: rgba(230, 96, 9)">We connect your different data sources and processes</h3>
          </v-col>
        
          <v-col
           cols="12"
            md="5"
          >
            <v-card>
              <v-card-text>
                <div class="text-h3">NEXUSe2e 10.x</div>
                <div class="mb-6 text-h5 text-medium-emphasis">The new generation of our B2B solution</div>
                <v-img
                  cover
                  max-height="200"
                  class="cursor-pointer"
                  src="@/assets/new_nexus.png"
                  @click="router.push('/new')"
                />
                <p class="mt-6">
                  The completely new implemented version of NEXUSe2e applying all the experience we gathered over the last two decades. We reworked all areas and challenged all decisions over the years to make it a solid solution for the upcoming years.
                </p>
                <div class="mt-6 d-flex justify-end">
                  <v-btn
                    color="accent"
                    rounded="pill"
                    variant="flat"
                    @click="router.push('/new')"
                  >
                    See new documentation
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col
            cols="12"
            md="5"
          >
            <v-card
              color="white"
              theme="LIGHT"
            >
              <v-card-text>
                <div class="text-h3 text-accent">NEXUSe2e 5.x</div>
                <div class="mb-6 text-h5 text-medium-emphasis">The proven open source B2B solution</div>
                <v-img
                  cover
                  max-height="200"
                  class="cursor-pointer"
                  src="./old/home//nexus_on_java_11.jpg"
                  @click="router.push('/home')"
                />
                <p class="mt-6">
                  For more than 20 years our solution to move your data around the globe. Although the new version is now available, the open source version is still available and we will support you to keep your business going.  
                </p>
                <div class="mt-6 d-flex justify-end">
                  <v-btn
                    rounded="pill"
                    variant="flat"
                    color="#424242"
                    @click="router.push('/home')"
                  >
                    See old documentation
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-main>
    <v-divider />
    <v-footer
      height="72"
      color="background"
      class="d-flex justify-center"
      style="max-height: 72px"
    >
      <div
        id="footer-container"
        class="d-flex flex-column flex-md-row px-6"
      >
        <v-btn
          variant="text"
          @click="router.push('/new/contact')"
        >
          Contact
        </v-btn>
        <v-btn
          variant="text"
          @click="router.push('/new/imprint')"
        >
          Legal Notices / Impressum
        </v-btn>
      </div>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style scoped>
#logo {
  width: 32px;
}

.container {
  width: 100%;
  max-width: 1200px;
}

#content {
  margin-top: 3rem;
  text-align: center;
}

#footer-container {
  width: 100%;
  max-width: 1200px;
}

@media screen and (min-width: 960px) {
  #logo-container {
    width: 50%;
  }

  #content {
    width: 50%;
    text-align: left;
  }
}
</style>
