import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AmountChangeHandler, ScoreChangeHandler } from "../redux/action";

const FinalScore = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { score } = useSelector((state) => state);
  const backToHomeHandler=()=>{
    dispatch(ScoreChangeHandler(0));
    dispatch(AmountChangeHandler(50));
    navigate("/")

  }
  return (
    <Box mt={30}>
      <Typography variant="h3" fontWeight="bold" mb={3}>
        You Scored {score}
      </Typography>
      <Button onClick={backToHomeHandler} variant="outlined">Back</Button>
    </Box>
  );
};

export default FinalScore;
