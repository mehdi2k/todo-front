import { Button, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { ButtonForm, ErrorSpan, FormulaireContainer, InputForm, PageContainer, Select, Textarea } from "./NewTask.style";
import axios from "axios";
import { Task } from "../tasks/useTasks";



const NewTask: React.FC = () => {
  const { register, formState, handleSubmit, reset, formState: { errors } } = useForm<Task>();

  const onSubmit = async (data: Task) => {
    try {
      await axios.post("http://localhost:3000/tasks", data);
      alert("saved!");
      reset();
    } catch (error) {
    }
  };

  return (
    <PageContainer>
      <h1>New Task</h1>
      <FormulaireContainer onSubmit={handleSubmit(onSubmit)}>
        <Grid container alignItems="center" justifyContent={"center"} spacing={2}>
          <Grid item md={12} sm={12} xs={12}>
            <label>Title:</label>
            <InputForm {...register("title",{ required: true })} />
            {errors.title && errors.title.type === "required" && (
        <ErrorSpan>This is required</ErrorSpan>
      )}
          </Grid>
        </Grid>

        <label> Description: </label>
        {/* <InputForm {...register("description",{ required: true })} /> */}
        {/* <textarea {...register("description")} placeholder="description" /> */}
        <Textarea {...register("description")} placeholder="description" />



        <label>Completed </label>
        {/* <InputForm {...register("completed",{ required: true })} /> */}
        <Select {...register("completed", { required: true })}>
          <option value="">Select...</option>
          <option value="true"> Yes</option>
          <option value="false">No</option>
        </Select>

        <Grid container alignItems="center" justifyContent={"center"} spacing={2}>
        <Grid item md={12} sm={12} xs={12}>

        <Button variant="contained" color="primary" type="submit" disabled={formState.isSubmitting}>
              Add
            </Button>
        </Grid>
        </Grid>
      </FormulaireContainer>
    </PageContainer>
  );
};

export default NewTask;
