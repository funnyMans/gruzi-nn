import React, { useState } from 'react';
import {
  Box,
  Dialog,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListOwnProps,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

export type GalleryItem = {
  name: string;
  src: string;
};

interface ImageGalleryProps {
  items: GalleryItem[];
  variant?: ImageListOwnProps['variant'];
  cols?: number;
  rowHeight?: number;
  gap?: number;
  withTitle?: boolean;
  withDialog?: boolean;
}

const BasicImageGallery: React.FC<ImageGalleryProps> = ({
  items,
  variant = 'standard',
  cols = 3,
  rowHeight = 200,
  gap = 16,
  withTitle = false,
  withDialog = false,
}) => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <Box sx={{ p: 4 }}>
      <ImageList variant={variant} cols={cols} rowHeight={rowHeight} gap={gap}>
        {items.map((item, idx) => (
          <ImageListItem
            key={idx}
            onClick={() => setSelectedImage(item)}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              src={item.src}
              alt={item.name}
              width={150}
              height={150}
              loading='lazy'
            />
            {withTitle ? (
              <Typography variant='subtitle1' align='center' mt={1}>
                {item.name}
              </Typography>
            ) : null}

            {selectedImage?.src === item.src ? (
              <AnimatePresence>
                <motion.div
                  exit={{ opacity: 0 }}
                  layoutId='border'
                  style={{
                    position: 'absolute',
                    borderRadius: 10,
                    width: '100%',
                    height: '100%',
                    border: '4px solid blue',
                  }}
                />
              </AnimatePresence>
            ) : null}
          </ImageListItem>
        ))}
      </ImageList>
      {/* Preview Modal */}
      {selectedImage && withDialog ? (
        <Dialog
          open
          onClose={() => setSelectedImage(null)}
          fullWidth
          maxWidth='sm'
        >
          <IconButton
            onClick={() => setSelectedImage(null)}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              zIndex: 2,
              color: '#555',
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box sx={{ py: 4 }} display={'flex'} justifyContent='center'>
            <Image
              width={700}
              height={700}
              src={selectedImage.src}
              alt={selectedImage.name}
              style={{
                width: '80%',
                maxWidth: 300,
                height: 'auto',
                marginBottom: 16,
              }}
            />
            <Typography variant='h6'>{selectedImage.name}</Typography>
          </Box>
        </Dialog>
      ) : null}
    </Box>
  );
};

export default BasicImageGallery;
