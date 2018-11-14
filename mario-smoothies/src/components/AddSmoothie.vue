<template>
<div class="add-smoothie container">
<h2 class="center-align indigo-text">Add new smoothie recipe</h2>	
<form @submit.prevent="AddSmoothie">
	<div class="field">
		<label for="title">smoothie title:</label>
		<input type="text" name="title" v-model="title">
	</div>
	<div class="field add-ingredient">
		<label for="add-ingredient">add an ingredient:</label>
		<input type="text" 
		name="add-ingredient"
		@keydown.tab.prevent="addIng" v-model="another">
	</div>
	<div v-for="(ing, index) in ingredients" :key="index" class="field">
		<label for="ingredient">Added Ingredient: </label>
		<input type="text" name="ingredient" v-model="ingredients[index]">
		<i class="material-icons delete" @click="deleteIng(ing)">delete</i>
	</div>
	<div class="field center align">
		<p v-if="feedback" class="red">{{ feedback }}</p>
		<button class="btn blue">add smoothie</button>
	</div>
</form>
</div>
</template>

<script>

import db from '@/firebase/init'
import slugify from 'slugify'

export default {
  name: "AddSmoothie",
  data() {
    return {
		title: null,
		another: null, 
		ingredients: [],
		feedback: null,
		slug: null
	}
  },
  methods: {
	  AddSmoothie() {
		  console.log(this.title, this.ingredients)
		  if(this.title){
			  this.feedback = null
			  // create a slug
			  this.slug = slugify(this.title, {
				  replacement: '-',
				  remove: /[$*_+~.()'"!\-:@]/g,
				  lower: true
			  })
			  db.collection('smoothies').add({
				  title: this.title,
				  ingredients: this.ingredients,
				  slug: this.slug
			  }).then(() => {
				  this.$router.push({name: 'Index'})
			  }).catch(err => {
				  console.log(err)
			  })
			  
		  } else {
			  this.feedback = "You must enter a smoothie title"
		  }
	  },
	  addIng() {
		  if(this.another) {
			  this.ingredients.push(this.another)
			//   console.log(this.ingredients)
			this.another = null
			this.feedback = null
		  } else {
			  this.feedback = 'You must enter a value to add an ingredient'
		  }
	  	},
	  deleteIng(ing){
		  this.ingredients = this.ingredients.filter(ingredient => {
			  return ingredient != ing
		  })
	  }
  	}
};
</script>

<style>

.add-smoothie{
	margin-top: 30px;
	/* margin-bottom: 30px; */
	padding: 20px;
	max-width: 500px;
}
.add-smoothie h2{
	font-size: 2em;
	margin: 20px auto;
}
.add-smoothie .field{
	margin: 20px auto;
	position: relative;
}

form {
	margin-top: 40px;
}

.add-smoothie .delete{
	position: absolute;
	right: 0;
	bottom: 16px;
	color: #aaa;
	font-size: 1.4em;
	cursor: pointer;
}

</style>

