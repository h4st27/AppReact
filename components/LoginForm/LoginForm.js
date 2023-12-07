import React from "react";
import {
  Box,
  FormControl,
  Stack,
  Input,
  WarningOutlineIcon,
} from "native-base";

const LoginForm = ({ inpData, setInpData, type, label, isCorrect }) => {
  const handleInputData = (inpData) => {
    setInpData((_) => inpData);
  };
  return (
    <Box alignItems="center">
      <Box w="100%" maxWidth="300px">
        <FormControl isRequired isInvalid={!isCorrect}>
          <Stack mx="4">
            <FormControl.Label>{label}</FormControl.Label>
            <Input
              type={type}
              placeholder={label}
              onChangeText={(inpData) => handleInputData(inpData)}
            />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Invalid input
            </FormControl.ErrorMessage>
          </Stack>
        </FormControl>
      </Box>
    </Box>
  );
};
export default LoginForm;
