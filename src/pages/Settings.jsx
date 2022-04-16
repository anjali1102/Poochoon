// import { Typography } from "@mui/material";
import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SelectField from "../components/SelectField";
import TextFieldComp from "../components/TextFieldComp";
import useAxios from "../hooks/useAxios";

const Settings = () => {
  const { response, error, loading } = useAxios({ url: "/api_category.php" });
  console.log(response);
  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" mt={20} color="red">
        Oops, Something went wrong !
      </Typography>
    );
  }

  const difficultySelect = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeSelect = [{ id: "multiple", name: "Multiple Choice" }];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main>
      <Typography variant="h2" fontWeight="bold">
        Poochoon ❓
      </Typography>
      <form onSubmit={handleSubmit}>
        <SelectField options={response.trivia_categories} label="Category" />
        <SelectField options={difficultySelect} label="Difficulty" />
        <SelectField options={typeSelect} label="Type" />
        <TextFieldComp />
        <Box mt={3} width="100%">
          <Button fullWidth variant="contained" type="submit">
            Get Started
          </Button>
        </Box>
      </form>
    </main>
  );
};

export default Settings;
