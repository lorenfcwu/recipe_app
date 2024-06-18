import { useForm } from 'react-hook-form';
const CreateRecipe = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = () => {};
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type='text' placeholder='Recipe Name' {...register('recipe_name')} />
      <input type='text' placeholder='Ingredients' {...register('ingredients')} />
      <input type='submit' />
    </form>
  );
};

export default CreateRecipe;
