import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const config = {
  apiKey: "AIzaSyAjElUr8V0MD4j8oN92sRMH8zLjHWwGO2Q",
  authDomain: "store-app-43a62.firebaseapp.com",
  projectId: "store-app-43a62",
  storageBucket: "store-app-43a62.appspot.com",
  messagingSenderId: "118028438965",
  appId: "1:118028438965:web:0ee8ba8ab51ba8cecaddfc",
  measurementId: "G-P28L9WMRJJ"
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
  const close = customersCollection.onSnapshot(snapshot => {
    customers.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return customers
}

export const useLoadProducts = () => {
  const products = ref([])
  const close = productsCollection.onSnapshot(snapshot => {
    products.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return products
}
