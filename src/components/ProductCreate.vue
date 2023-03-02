<template>
  <div class="card mt-4 w-50 offset-3">
    <div class="card-header">
      <h3 class="text-center">Create Product</h3>
    </div>
    <div class="card-body">
      <form @submit.prevent="onSubmit">
        <div class="form-group mt-2">
          <label>Product Number</label>
          <input v-model="form.prod_no" class="form-control" placeholder="Product Number" required />
        </div>
        <div class="form-group mt-2">
          <label>Barcode</label>
          <input v-model="form.barcode" class="form-control" placeholder="Barcode" required />
        </div>

        <div class="form-group mt-2">
          <label>Product Name</label>
          <input v-model="form.productName" class="form-control" placeholder="Product Name" required />
        </div>

        <div class="form-group mt-2">
          <label>Supplier</label>
          <input v-model="form.supplier" class="form-control" placeholder="Supplier" required />
        </div>

        <div class="form-group mt-2">
          <label>Category</label>
          <select v-model="form.category" class="form-control">
            <option disabled selected value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Foods">Foods</option>
            <option value="Toys">Toys</option>
            <option value="Appliances">Appliances</option>
            <option value="Clothing">Clothing</option> 
            <option value="Gadgets">Gadgets</option> 
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

        <div class="form-group mt-2">
          <label>Units</label>
          <select name="units" id="units" class="form-select">
            <option>Pieces</option>
            <option>Kilograms</option>
            <option>Grams</option>accusantium reprehenderit
            <option>Bottles</option>
            <option>Packs</option>
            <option>Litres</option>
            <option>Boxes</option>
            <option>Bundles</option>
            <option>Inches</option>
            <option>Meters</option>
            <option>Dozens</option>
          </select>
        </div>

        <button type="submit" class="btn btn-primary form-control mt-3">
          Add Product
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
    const form = reactive({ prod_no: '', barcode: '', productName: '', supplier: '', category: '', price: '', quantity: '', units: '' })

    const onSubmit = async () => {
      await createProduct({ ...form })
      router.push('/products')
      form.prod_no = ''
      form.barcode = ''
      form.productName = ''
      form.supplier = ''
      form.category = ''
      form.price = ''
      form.quantity = ''
      form.units = ''
    }

    return {
      form, 
      onSubmit 
    }
  }
}
</script>
