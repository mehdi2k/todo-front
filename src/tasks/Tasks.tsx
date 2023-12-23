// Tasks.tsx
import React from 'react';
import { Table, TableCell, Button, TextField, Grid } from '@mui/material';
import { PageContainer, StyledTableContainer } from './Tasks.style';
import useTasks, { Task } from './useTasks';
import { useForm, SubmitHandler, UseFormReturn } from 'react-hook-form';
import { FormulaireContainer, InputForm, Select, Textarea } from '../newTasks/NewTask.style';

interface FormData {
  title: string;
  description: string;
  completed: string;
}

const Tasks: React.FC = () => {
  const { data, error, fetchData, handleDelete, handleEdit, handleUpdate, editingTask } = useTasks();
  const { register, handleSubmit, setValue } = useForm<FormData>();

  const handleEditClick = (task: Task) => {
    handleEdit(task);
    setValue('title', task.title);
    setValue('description', task.description);
    setValue('completed', task.completed.toString()); // Convert boolean to string
  };

  const onSubmit: SubmitHandler<FormData> = (formData) => {
    if (editingTask) {
      handleUpdate({
        ...editingTask,
        title: formData.title,
        description: formData.description,
        completed: formData.completed === "true", // Convert string to boolean
      });
    }
  };

  return (
    <>
    <PageContainer>
      <h1>Tasks</h1>
      <StyledTableContainer>
        <Table>
          <thead>
            <tr>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Completed</TableCell>
              <TableCell>Actions</TableCell>
            </tr>
          </thead>
          <tbody>
            {data.map((task) => (
              <React.Fragment key={task._id}>
                <tr>
                  <TableCell>{task.title}</TableCell>
                  <TableCell>{task.description}</TableCell>
                  <TableCell>{task.completed ? 'Yes' : 'No'}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleDelete(task._id)}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleEditClick(task)}
                    >
                      Edit
                    </Button>
                  </TableCell>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </Table>
       </StyledTableContainer>
      </PageContainer>
     

        {editingTask && (
        <PageContainer>
        <h1>update</h1>
        <FormulaireContainer onSubmit={handleSubmit(onSubmit)}>
        <Grid container alignItems="center" justifyContent={"center"} spacing={2}>
          <Grid item md={12} sm={12} xs={12}>
            <label>Title:</label>
            <InputForm {...register("title",{ required: true })} />
          </Grid>
        </Grid>

        <label> Description: </label>
        <Textarea {...register("description")} placeholder="description" />

        <label>Completed </label>
        <Select {...register("completed", { required: true })}>
          <option value="">Select...</option>
          <option value="true"> Yes</option>
          <option value="false">No</option>
        </Select>

        <Grid container alignItems="center" justifyContent={"center"} spacing={2}>
        <Grid item md={12} sm={12} xs={12}>

                <Button variant="contained" color="primary" type="submit">
              Update
            </Button>
        </Grid>
        </Grid>
      </FormulaireContainer>
      
      </PageContainer>
        )}
</>
  );
};

export default Tasks;
