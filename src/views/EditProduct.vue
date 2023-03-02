<template>
  <div class="card mt-4 w-50 ">
    <div class="card-header">
      <h3 class="text-center">Edit Mens Wear</h3>
    </div>
    <div class="card-body">
      <form @submit.prevent="update">
        <div class="form-group mt-2">
          <label>Mens Top Collection</label>
          <select v-model="form.top" class="form-control">
            <option disabled selected value="">Select Top</option>
            <option value="1. Vest">1. Vest</option>
            <option value="2. Jacket">2. Jacket</option>
            <option value="3. T-shirt">3. T-shirt</option>
            <option value="4. Hoodies">4. Hoodies</option>
            <option value="5. Polo Shirt">5. Polo Shirt</option>
          </select>
        </div>

        <div class="form-group mt-2">
          <label>Mens Bottom Collection</label>
          <select v-model="form.bottom" class="form-control">
            <option disabled selected value="">Select Bottom</option>
            <option value="1. Shorts">1. Shorts</option>
            <option value="2. Pants">2. Pants</option>
            <option value="3. Jeans">3. Jeans</option>
            <option value="4. Sweat Pants">4. Sweat Pants</option>
            <option value="5. Mens Leggings">5. Mens Leggings</option>
            <option value="6. Jogging Pants">6. Jogging Pants</option>
          </select>
        </div>

        <div class="form-group mt-2">
          <label>Sizes</label>
          <select v-model="form.size" class="form-control">
            <option disabled selected value="">Select Sizes</option>
            <option value="Extra Small">Extra Small</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            <option value="Extra Large">Extra Large</option>
          </select>
        </div>

        <div class="form-group mt-2">
          <label>Price</label>
          <input type="number" v-model="form.price" class="form-control" placeholder="Price" required />
        </div>

        <div class="form-group mt-2">
          <label>Quantity</label>
          <input type="number" v-model="form.quantity" class="form-control" placeholder="Quantity" required />
        </div>

        <button type="submit" class="btn btn-primary form-control mt-3">
          Update Product
        </button>
        <a href="/products" class="btn btn-secondary form-control mt-1">Back</a>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getProduct, updateProduct } from '@/firebase'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const productId = computed(() => route.params.id)

    const form = reactive({ top: '', bottom: '', size: '', price: '', quantity: ''})
    onMounted(async () => {
      const product = await getProduct(productId.value)
      console.log(product, productId.value)
      form.top = product.top
      form.bottom = product.bottom
      form.size = product.size
      form.price = product.price
      form.quantity = product.quantity
    })

    const update = async () => {
      await updateProduct(productId.value, { ...form })
      router.push('/products')
      form.top = ''
      form.bottom = ''
      form.size = ''
      form.price = ''
      form.quantity = ''
    }

    return { 
      form, 
      update 
    }
  }
}
</script>
