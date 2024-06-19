import { Container, VStack, Heading, Box } from "@chakra-ui/react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";

const Progress = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch logged workouts from localStorage or an API
    const loggedWorkouts = JSON.parse(localStorage.getItem("loggedWorkouts")) || [];
    const formattedData = loggedWorkouts.map((workout, index) => ({
      name: `Workout ${index + 1}`,
      duration: parseInt(workout.duration, 10),
    }));
    setData(formattedData);
  }, []);

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Progress</Heading>
        <Box width="100%" height={400}>
          <ResponsiveContainer>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="duration" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </VStack>
    </Container>
  );
};

export default Progress;