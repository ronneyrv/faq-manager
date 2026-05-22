import { useState } from "react";
import { useNavigate } from "react-router-dom";
import faqService from "../../services/faqService";
import {
  Box,
  TextField,
  Typography,
  Button,
  CircularProgress,
  Alert,
  DialogActions,
} from "@mui/material";

export default function Add() {
  const [author, setAuthor] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleCancel = () => {
    setAuthor("");
    setQuestion("");
    setAnswer("");
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const creatDate = new Date().toISOString();
    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      await faqService.createFaq({
        author,
        question,
        answer,
        questionCreatedAt: creatDate,
      });

      setSuccess(true);

      setQuestion("");
      setAnswer("");
      setAuthor("");

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        margin: "40px auto",
        maxWidth: 600,
        padding: 3,
        backgroundColor: "#f9f9f9",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ fontWeight: "bold", textAlign: "center" }}
      >
        Adicionar Nova Pergunta (FAQ)
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Autor"
          fullWidth
          margin="normal"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <TextField
          label="Pergunta"
          fullWidth
          margin="normal"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
        <TextField
          label="Resposta"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          required
        />

        {success && (
          <Alert severity="success" sx={{ mt: 2 }}>
            FAQ adicionado com sucesso!
          </Alert>
        )}
        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            Ocorreu um erro ao enviar. Tente novamente.
          </Alert>
        )}
        <DialogActions sx={{ padding: 0, marginTop: 2 }}>
          <Button onClick={handleCancel}>Cancelar</Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : "Adicionar FAQ"}
          </Button>
        </DialogActions>
      </form>
    </Box>
  );
}
