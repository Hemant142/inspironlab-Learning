import { useState } from "react";
import "./App.css";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Stack from "@mui/material/Stack";

function App() {
  const [AllErrors, setAllErrors] = useState([
    {
      title: "Multiple Attribute Codes.",
      messages: [
        "You can not have that 1 Atribute Code 'E' Please remove to continue",
        "You can not have that 1 Atribute Code 'A' Please remove to continue",
        "You can not have that 1 Atribute Code 'V' Please remove to continue",
        "You can not have that 1 Atribute Code 'B' Please remove to continue",
        "You can not have that 1 Atribute Code 'C' Please remove to continue",
      ],
    },
    {
      title: "Attribute Code O cannot be used a WSB Price.",
      messages: ["Please remove to continue"],
    },
  ]);

  const handleDelete = (index) => {
    setAllErrors((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto" }}>
      <h1>Errors</h1>
      <Stack spacing={2}>
        {AllErrors.map((error, index) => (
          <Alert
            key={index}
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => handleDelete(index)}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ alignItems: "flex-start" }}
          >
            <strong>{error.title}</strong>
            <ul style={{ margin: "8px 0 0 16px" }}>
              {error.messages.map((message, msgIndex) => (
                <li key={msgIndex}>{message}</li>
              ))}
            </ul>
          </Alert>
        ))}
      </Stack>
    </div>
  );
}

export default App;
