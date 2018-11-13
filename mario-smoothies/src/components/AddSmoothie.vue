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
	<div class="field center align">
		<p v-if="feedback" class="red">{{ feedback }}</p>
		<button class="btn blue">add smoothie</button>
	</div>
</form>
</div>
</template>

<script>
export default {
  name: "AddSmoothie",
  data() {
    return {
		title: null,
		another: null, 
		ingredients: [],
		feedback: null
	}
  },
  methods: {
	  AddSmoothie() {
		  console.log(this.title, this.ingredients)
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
	  }
  }
};
</script>

<style>

.add-smoothie{
	margin-top: 30px;
	/* margin-bottom: 30px; */
	padding: 40px;
	max-width: 500px;
}
.add-smoothie h2{
	font-size: 2em;
	margin: 20px auto;
}
.add-smoothie .field{
	margin: 20px auto;
}

form {
	margin-top: 40px;
}

</style>

