import { useForm } from "react-hook-form"
import "../App.css";

export default function hooks() {

   const { register, handleSubmit, formState:{errors}}
    = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return ( <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('username', { required: 'Username is required'})} />
      {errors.username &&<p  className="bags">{errors.username.message}</p>}
      <input {...register('email',  { required: 'email is required'})} />
         {errors.email &&<p  className="bags">{errors.email?.message}</p>}
      <button type="submit">Submit</button>
  
    <div> for practice only not exrcise</div>
      </form>
  )
}

