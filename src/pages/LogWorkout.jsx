import { useState } from "react";
import { Container, VStack, Heading, Input, Button, Textarea, Box, Text } from "@chakra-ui/react";

const LogWorkout = () => {
  const [workout, setWorkout] = useState({ type: "", duration: "", notes: "" });
  const [loggedWorkouts, setLoggedWorkouts] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkout({ ...workout, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedWorkouts([...loggedWorkouts, workout]);
    setWorkout({ type: "", duration: "", notes: "" });
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Log Workout</Heading>
        <Box as="form" width="100%" onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <Input
              placeholder="Workout Type"
              name="type"
              value={workout.type}
              onChange={handleChange}
              isRequired
            />
            <Input
              placeholder="Duration (minutes)"
              name="duration"
              value={workout.duration}
              onChange={handleChange}
              isRequired
            />
            <Textarea
              placeholder="Notes"
              name="notes"
              value={workout.notes}
              onChange={handleChange}
            />
            <Button colorScheme="teal" type="submit" width="100%">Log Workout</Button>
          </VStack>
        </Box>
        <Heading as="h2" size="lg" mt={8}>Logged Workouts</Heading>
        <VStack spacing={4} width="100%">
          {loggedWorkouts.map((workout, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="md" width="100%">
              <Text><strong>Type:</strong> {workout.type}</Text>
              <Text><strong>Duration:</strong> {workout.duration} minutes</Text>
              <Text><strong>Notes:</strong> {workout.notes}</Text>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default LogWorkout;