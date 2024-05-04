import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [sentiment, setSentiment] = useState(null);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch('http://192.168.1.14:8080/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setSentiment(data.sentiment);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: 50 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Sentiment Analysis
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Enter text"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={inputText}
          onChange={handleInputChange}
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: 20 }}
        >
          Analyze Sentiment
        </Button>
      </form>
      {sentiment && (
        <Typography variant="h6" align="center" style={{ marginTop: 20 }}>
          Sentiment Analysis Result: {sentiment}
        </Typography>
      )}
    </Container>
  );
};

export default App;