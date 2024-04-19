import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const fakeSentimentAnalysis = (text) => {
  // Simulate sentiment analysis by checking if the input contains positive or negative keywords
  const positiveKeywords = ['happy', 'good', 'awesome', 'great'];
  const negativeKeywords = ['sad', 'bad', 'terrible', 'horrible'];

  const words = text.toLowerCase().split(' ');
  for (let word of words) {
    if (positiveKeywords.includes(word)) {
      return 'Positive';
    }
    if (negativeKeywords.includes(word)) {
      return 'Negative';
    }
  }
  // If no sentiment keywords are found, return neutral
  return 'Neutral';
};

const App = () => {
  const [inputText, setInputText] = useState('');
  const [sentiment, setSentiment] = useState(null);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const analysisResult = fakeSentimentAnalysis(inputText);
    setSentiment(analysisResult);
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: 50 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Fake Sentiment Analysis
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
