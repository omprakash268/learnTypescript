export type IRecipe ={
  id: number;
  name: string;
  ingredients: [];
  instructions: [];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: [];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: [];
}
