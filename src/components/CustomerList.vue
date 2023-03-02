<template>
  <h2 class="mt-2">Employee List</h2>
  <div class="card border-0 mt-4 p-2">
    <div class="mb-3 mt-2">
      <a class="btn btn-primary d-flex justify-content-end float-end" href="/create-customer"><i class="fa-duotone fa-circle-plus mt-1 mr-1"></i> Add New Employee</a>
    </div>
    <table class="table table-hover border table-striped m-0">
      <thead class="bg-dark text-light">
        <tr>
          
          <th scope="col">Full Name</th>
          <th scope="col">Address</th>
          <th scope="col">Email</th>
          <th scope="col">Mobile Number</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id, full_name, address, email, mobileNumber } in customers" :key="id">
          <td>{{ full_name }}</td>
          <td>{{ address }}</td>
          <td>{{ email }}</td>
          <td>{{ mobileNumber }}</td>
          <td>
            <router-link :to="`/edit-customer/${id}`">
              <button class="btn btn-primary btn-sm me-2">
                Edit
              </button>
            </router-link>
            <button class="btn btn-danger btn-sm" @click="deleteCustomer(id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="noCustomers" class="text-center m-2">
      <p>Please wait or no employee found.</p>
      <p class="loading"></p>
    </div>
  </div>
</template>

<script>
import { useLoadCustomers, deleteCustomer } from '@/firebase'

export default {
  setup() {
    const customers = useLoadCustomers()

    return { 
        customers, 
        deleteCustomer,
    }
  },
  computed: {
    noCustomers() {
      return this.customers.length === 0
    }
  }
}
</script>
