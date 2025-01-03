import React, { useState } from "react";
import { Button, Fieldset, Input, Stack } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import toast, { Toaster } from "react-hot-toast"; // Import react-hot-toast
import axios from "axios"; // Add axios for API requests
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pic, setPic] = useState("");
  const [loading, setLoading] = useState(false);
const navigate = useNavigate();
  // Function to handle image upload to Cloudinary
  const postDetails = (pics) => {
    setLoading(true);

    if (!pics) {
      toast.error("Please select an image");
      setLoading(false);
      return;
    }

    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "CHAT APP"); // Replace with your Cloudinary upload preset
      data.append("cloud_name", "diy6brkcx"); // Replace with your Cloudinary cloud name

      fetch("https://api.cloudinary.com/v1_1/diy6brkcx/image/upload", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.secure_url) {
            setPic(data.secure_url);
            console.log("Uploaded Image URL:", data.secure_url);
            toast.success("Image uploaded successfully");
          } else {
            throw new Error("Invalid response from Cloudinary");
          }
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
          toast.error("Image upload failed. Please try again.");
        })
        .finally(() => setLoading(false));
    } else {
      toast.error("Invalid image format. Only JPEG and PNG are allowed");
      setLoading(false);
    }
  };

  // Form submission handler
  const SubmitHandler =async () => {
    setLoading(true);
    if (!name || !email || !password || !confirmPassword ) {
      toast.error("All fields are required");
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
 

    try{
      const config = {
        headers: {
          "Content-Type": "application/json",
      },
    }
    const {data} = await axios.post("/api/user", { name, email, password, pic }, config);


     localStorage.setItem("userInfo", JSON.stringify(data));
    toast.success("Sign-up successful!");
    setLoading(false);
   navigate('/chats');

  }
    catch(err){
      console.log(err)
    }
    console.log("Form Data:", { name, email, password, pic });
   
  };

  return (
    <>
      <Fieldset.Root size="sm" maxW="sm" margin="auto" mt={8}>
        <Stack spacing={6}>
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
              name="file"
              p={1.5}
              type="file"
              accept="image/*"
              onChange={(e) => postDetails(e.target.files[0])}
            />
          </Field>
        </Fieldset.Content>

        <Button
          type="submit"
          color="white"
          colorScheme="blue"
          width="100%"
          isLoading={loading}
          onClick={SubmitHandler}
          mt={4}
        >
          Sign Up
        </Button>
      </Fieldset.Root>

      {/* Toaster */}
      <Toaster position="top-right" />
    </>
  );
};

export default SignUp;
