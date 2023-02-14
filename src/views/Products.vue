<script setup lang="ts">
import CTA from '../components/CTA.vue';
import { reactive, ref, watch } from 'vue';
import { createId } from '@paralleldrive/cuid2';

interface ItemState {
  id: string;
  name: string;
  price: string;
}
interface ErrorMessage {
  message: string;
}

const state = reactive<ItemState>({
  id: '',
  name: '',
  price: '',
});

const error = reactive<ErrorMessage>({
  message: '',
});

const products = ref([] as any);
const isEdit = ref(false);

const getProduct = (products: any, id: string) => {
  return products.value.findIndex((obj: any) => obj.id === id);
};

const resetFields = () => {
  state.name = '';
  state.id = '';
  state.price = '';
};

const submit = () => {
  const isExisting = products.value.find((obj: any) => obj.name === state.name);
  const isFieldEmpty = !state.name || !state.price;

  if (!isFieldEmpty && !isExisting && !isEdit.value) {
    products.value.push({
      id: createId(),
      name: state.name,
      price: state.price,
    });
    resetFields();
    return (error.message = '');
  }

  if (isExisting && !isEdit.value) {
    return (error.message = 'Item already exist!');
  }

  if (isEdit.value && !isFieldEmpty) {
    const prodIndex = getProduct(products, state.id);

    products.value[prodIndex].name = state.name;
    products.value[prodIndex].price = state.price;

    isEdit.value = false;
    resetFields();
    return (error.message = '');
  }

  return (error.message = 'All Fields are required!');
};

const editProduct = (id: string) => {
  const prodIndex = getProduct(products, id);

  state.name = products.value[prodIndex].name;
  state.price = products.value[prodIndex].price;
  state.id = products.value[prodIndex].id;
  isEdit.value = true;

  return (error.message = '');
};

const deleteProduct = (product: any) => {
  const prodIndex = getProduct(products, product.id);

  if (prodIndex > -1) {
    products.value.splice(prodIndex, 1);
  }

  return (error.message = '');
};

const onSearchChange = (e: KeyboardEvent) => {
  const element = e.target as HTMLInputElement;
  const items = products.value.filter((obj: any) =>
    obj.name.includes(element.value)
  );
  products.value = items;
};
</script>

<template>
  <section class="grid lg:grid-cols-2 container mx-auto mt-32">
    <div>
      <div class="flex justify-between mb-8">
        <h1>Products</h1>
        <input
          placeholder="Search for keywords..."
          @keyup="onSearchChange"
          class="border border-primary p-3 max-w-[20rem]"
        />
      </div>
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
        <tr v-for="product in products">
          <td hidden>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>
            <button
              class="text-sm p-1 min-w-[4rem] mr-2"
              @click="() => editProduct(product.id)"
            >
              Edit
            </button>
            <button
              class="bg-white text-primary border border-primary hover:border-opacity-50 text-sm p-1 min-w-[4rem]"
              @click="() => deleteProduct(product)"
            >
              Delete
            </button>
          </td>
        </tr>
        <tr v-if="products.length === 0">
          There are no products listed yet.
        </tr>
      </table>
    </div>

    <div
      class="flex flex-col text-center max-w-sm mt-8 bg-gray-100 p-6 gap-6 mx-auto"
    >
      <h4>Header Text</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

      <input name="name" placeholder="Name" v-model="state.name" />

      <div class="w-full text-start">
        <input name="price" placeholder="Price" v-model="state.price" />
        <span class="text-red-400 mt-4">{{ error.message }}</span>
      </div>

      <button @click="() => submit()" class="bg-red p-4">
        {{ isEdit ? 'Save' : 'Create ' }}
      </button>
    </div>
  </section>

  <CTA />
</template>

<style scoped>
table {
  @apply border border-primary min-w-[10rem] w-full table-fixed;
}
table th {
  @apply border border-primary border-b-0 bg-gray-100 py-2 px-6 min-w-[8rem] md:min-w-[13rem];
}

table td {
  @apply border border-primary border-t-0 py-2 px-6 text-secondary;
}
</style>
