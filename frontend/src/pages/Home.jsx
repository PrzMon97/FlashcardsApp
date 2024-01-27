import Chart from "../components/Chart";
import Dictionary from "../components/Dictionary";
import { Box } from "@mui/joy";
import TextBox from "../components/TextBox";

const Home = () => {
  return (
    <div className="boxLayout">
      <Box className="box1">
        <Dictionary />
      </Box>
      <Box className="box2">
        <Chart/>
      </Box>
      <Box className="box3">
        <TextBox/>
      </Box>
      <Box className="box4">

      </Box>

    </div>
    
  );
};
export default Home;
