<template>
  <h2 class="mt-2">Collection List</h2>
  <div class="card border-0 mt-4 p-2">
    <div class="mb-3 mt-2">
      <a class="btn btn-primary d-flex justify-content-end float-end" href="/create-product"><i class="fa-duotone fa-circle-plus mt-1 mr-1"></i> Add New Collection</a>
    </div>
    <table class="table table-hover border table-striped m-0">
      <thead class="bg-dark text-light">
        <tr>
          <th scope="col">Mens Top</th>
          <th scope="col">Mens Bottom</th>
          <th scope="col">Size</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id, top, bottom, size, price, quantity } in products" :key="id">
          <td>{{ top }}</td>
          <td>{{ bottom }}</td>
          <td>{{ size }}</td>
          <td>&#x20b1;{{ price }}</td>
          <td>{{ quantity }}</td>
          <td>
            <router-link :to="`/edit-product/${id}`">
              <button class="btn btn-primary btn-sm me-2">
                Edit
              </button>
            </router-link>
            <button class="btn btn-danger btn-sm" @click="deleteProduct(id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="noProducts" class="text-center m-2">
      <p>Please wait or no product found.</p>
      <p class="loading"></p>
    </div>
  </div>

</template>

<script>
import { useLoadProducts, deleteProduct } from '@/firebase'

export default {
  setup() {
    const products = useLoadProducts()
    
    return { 
      products, 
      deleteProduct,
    }
  },
  computed: {
    noProducts() {
      return this.products.length === 0
    }
  }
}
</script>
