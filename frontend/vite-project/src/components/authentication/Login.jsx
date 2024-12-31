import React, {useState} from "react";
import { Button, Fieldset, Input, Stack } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";


const Login = () => {
   const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const SubmitHandler=()=>{}
  return (
     <Fieldset.Root size="sm" maxW="sm">
          <Stack>
            <Fieldset.Legend>Sign In</Fieldset.Legend>
            <Fieldset.HelperText>
              Please fill in the details to Sign In an account.
            </Fieldset.HelperText>
          </Stack>
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

                 <Button  colorPalette="blue" color='white' style={{marginTop:15}}  width='100%'  onClick={SubmitHandler}>
                        Sign In
                      </Button>

                      <Button colorPalette="blue" variant='solid'color='white' style={{marginTop:15}}  width='100%'  onClick={SubmitHandler}>
                      GEt User ith credentials
                      </Button>

                  
      
       </Fieldset.Root>
  );
};

export default Login;
