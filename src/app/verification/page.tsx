'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  Paper,
  Grid,
  CircularProgress,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
} from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import DeleteIcon from '@mui/icons-material/Delete';

const MAX_FILE_SIZE_MB = 5;
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'application/pdf'];

const VerificationPage = () => {
  const [dotNumber, setDotNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [documents, setDocuments] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files || []);
    const validFiles: File[] = [];

    for (const file of selected) {
      if (!ALLOWED_TYPES.includes(file.type)) {
        setError('Allowed file types: JPG, PNG, PDF.');
        return;
      }

      if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        setError(`File "${file.name}" exceeds ${MAX_FILE_SIZE_MB}MB.`);
        return;
      }

      validFiles.push(file);
    }

    setError(null);
    setDocuments((prev) => [...prev, ...validFiles]);
  };

  const handleRemoveFile = (index: number) => {
    setDocuments((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    setError(null);

    if (!dotNumber || !fullName || documents.length === 0) {
      setError('Please complete all fields and upload at least one document.');
      return;
    }

    setLoading(true);

    // Simulate upload/processing
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <Box sx={{ p: 4, maxWidth: 600, mx: 'auto' }}>
      <Typography variant='h4' sx={{ mb: 3 }}>
        Verification Required
      </Typography>

      <Paper sx={{ p: 3 }}>
        <Grid container spacing={3}>
          <Grid sx={{ xs: 12 }}>
            <TextField
              label='Full Name'
              fullWidth
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </Grid>

          <Grid sx={{ xs: 12 }}>
            <TextField
              label='USDOT or MC Number'
              fullWidth
              value={dotNumber}
              onChange={(e) => setDotNumber(e.target.value)}
            />
          </Grid>

          <Grid sx={{ xs: 12 }}>
            <Button
              variant='outlined'
              component='label'
              startIcon={<UploadFileIcon />}
              fullWidth
            >
              Upload Documents (ID, Insurance, etc.)
              <input
                type='file'
                hidden
                accept='.jpg,.jpeg,.png,.pdf'
                multiple
                onChange={handleFileUpload}
              />
            </Button>

            {documents.length > 0 && (
              <List dense sx={{ mt: 2 }}>
                {documents.map((file, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={file.name} />
                    <ListItemSecondaryAction>
                      <IconButton onClick={() => handleRemoveFile(index)}>
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            )}
          </Grid>

          {error && (
            <Grid sx={{ xs: 12 }}>
              <Typography color='error'>{error}</Typography>
            </Grid>
          )}

          <Grid sx={{ xs: 12 }}>
            <Divider sx={{ my: 2 }} />
            <Button
              variant='contained'
              color='primary'
              fullWidth
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={24} color='inherit' />
              ) : (
                'Submit for Verification'
              )}
            </Button>
          </Grid>

          {submitted && (
            <Grid sx={{ xs: 12 }}>
              <Typography sx={{ mt: 2 }} color='success.main'>
                ✅ Submitted! Your documents are under review.
              </Typography>
            </Grid>
          )}
        </Grid>
      </Paper>
    </Box>
  );
};

export default VerificationPage;
