import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const config = {
  apiKey: "AIzaSyBHOCB_Ym5cJ7hFtYiiZo2ncxg3NhcYkGk",
  authDomain: "menswear-8b83a.firebaseapp.com",
  projectId: "menswear-8b83a",
  storageBucket: "menswear-8b83a.appspot.com",
  messagingSenderId: "1078261762911",
  appId: "1:1078261762911:web:12d27ca4959224bf7fc4ea"
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const customersCollection = db.collection('customers')
const productsCollection = db.collection('products')

export const createCustomer = customer => {
  return customersCollection.add(customer)
}

export const createProduct = product => {
  return productsCollection.add(product)
}

export const getCustomer = async id => {
  const customer = await customersCollection.doc(id).get()
  return customer.exists ? customer.data() : null
}

export const getProduct = async id => {
  const product = await productsCollection.doc(id).get()
  return product.exists ? product.data() : null
}

export const updateCustomer = (id, customer) => {
  return customersCollection.doc(id).update(customer)
}

export const updateProduct = (id, product) => {
  return productsCollection.doc(id).update(product)
}

export const deleteCustomer = id => {
  return customersCollection.doc(id).delete()
}

export const deleteProduct = id => {
  return productsCollection.doc(id).delete()
}

export const useLoadCustomers = () => {
  const customers = ref([])
  const close = customersCollection.orderBy('full_name', 'asc').onSnapshot(snapshot => {
    customers.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return customers
}

export const useLoadProducts = () => {
  const products = ref([])
  const close = productsCollection.orderBy('top', 'asc').onSnapshot(snapshot => {
    products.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return products
}
