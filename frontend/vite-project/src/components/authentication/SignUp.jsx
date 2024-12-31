import React, { useState } from "react";
import { Button, Fieldset, Input, Stack } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";

 

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const[pic ,setPic]=useState("")

  const postDetails = (pics) => {
  }

  const SubmitHandler = () => {}
  return (
    <Fieldset.Root size="sm" maxW="sm">
      <Stack>
        <Fieldset.Legend>Sign Up</Fieldset.Legend>
        <Fieldset.HelperText>
          Please fill in the details to create an account.
        </Fieldset.HelperText>
      </Stack>

      <Fieldset.Content>
        <Field label="Name">
          <Input
            name="name"
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
          />
        </Field>

        <Field label="Email address">
          <Input
            name="email"
            type="email"
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Field>

        <Field label="Password">
          <Input
            name="password"
            type="password"
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Field>

        <Field label="Confirm Password">
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Your Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Field>


        <Field label="Please Upload Picture">
          <Input
            name='file'
            p={1.5}
            type="file"
            accept="image/*"
            placeholder="Enter Your Email"
            onChange={(e) => postDetails(e.target.value)}
          />
        </Field>
      </Fieldset.Content>

      
      <Button type="submit"  color='white' style={{marginTop:15}}  width='100%'  onClick={SubmitHandler}>
        Sign Up
      </Button>
    </Fieldset.Root>
  );
};

export default SignUp;
