<template>
  <div class="card mt-3 w-50 offset-2">
    <div class="card-header bg-success">
      <h3 class="text-center">Create Mens Wear</h3>
    </div>
    <div class="card-body">
      <form @submit.prevent="onSubmit">
        <div class="form-group mt-2">
          <label>Mens Top</label>
          <select v-model="form.top" class="form-control">
            <option disabled selected value="">Select Top</option>
            <option value="1. Mens Vest">1. Mens Vest</option>
            <option value="2. Mens Jacket">2. Mens Jacket</option>
            <option value="3. Mens T-shirt">3. Mens T-shirt</option>
            <option value="4. Hoodies">4. Hoodies</option>
            <option value="5. Polo Shirt">5. Polo Shirt</option>
          </select>
        </div>
        <div class="form-group mt-2">
          <label>Mens Bottom</label>
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
          <label>Size</label>
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

        <button type="submit" class="btn btn-primary  form-control mt-3">
          Add Collection
        </button>
        <a href="/products" class="btn btn-secondary form-control mt-1">Back</a>
      </form>
    </div>
  </div>
</template>

<script>
import { createProduct } from '@/firebase'
import { useRouter } from 'vue-router'
import { reactive } from 'vue'

export default {
  setup() {
    const router = useRouter()
    const form = reactive({ top: '', bottom: '', size: '', price: '', quantity: '' })

    const onSubmit = async () => {
      await createProduct({ ...form })
      router.push('/products')
      form.top = ''
      form.bottom = ''
      form.size = ''
      form.price = ''
      form.quantity = ''
    }

    return {
      form, 
      onSubmit 
    }
  }
}
</script>
