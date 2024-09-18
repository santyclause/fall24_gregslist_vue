<script setup>
import { AppState } from '@/AppState.js';
import { housesService } from '@/services/HousesService.js';
import Pop from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

onMounted(() => {
  getHouses();
})

const houses = computed(() => AppState.houses);

async function getHouses() {
  try {
    await housesService.getHouses();
  } catch (error) {
    Pop.error(error);
  }
}

</script>


<template>
  <div class="container">
    <div>
      <h1>Houses</h1>
    </div>
    <section class="row">
      <div class="col-12">
        Form
      </div>
    </section>
    <section class="row">
      <div v-for="house in houses" :key="house.id" class="col-12 mb-3 house-listing">
        <div class="container-fluid">
          <section class="row">
            <div class="col-5">
              <img :src="house.imgUrl" :alt="house.description" class="img-fluid">
            </div>
            <div class="col-7">
              <div class="d-flex h-100 flex-column justify-content-between">
                <div>
                  <h3>{{ house.description }}</h3>
                  <p>{{ house.bedrooms }} Bedrooms - {{ house.bathrooms }} Bathrooms - {{ house.levels }} Floors</p>
                  <h4>${{ house.price }}</h4>
                </div>
                <div>
                  <p>Listed by {{ house.creator.name }}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>


<style lang="scss" scoped>
img {
  object-fit: cover;
}

.house-listing {
  box-shadow: 2px 2px 5px black;
}
</style>