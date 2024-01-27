import { Box, Card } from "@mui/joy";
import FlipFlashcard from "../components/FlipFlashcard";

const Lesson = () => {
  return (
    <div className="boxLayout">
      <Box className="box1">
        <Card>
          <FlipFlashcard />
        </Card>
      </Box>
      <Box className="box2">
        
      </Box>
      <Box className="box3">
       
      </Box>

    </div>
  );
};
export default Lesson;
