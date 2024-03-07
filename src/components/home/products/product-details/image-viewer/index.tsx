"use client";
import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
const ProductImage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    "https://demo.nopcommerce.com/images/thumbs/0000024_apple-macbook-pro-13-inch_550.jpeg",
    "https://adminapi.applegadgetsbd.com/storage/media/large/iPhone-14-Pro-Max-9907.jpg",
    "https://demo.nopcommerce.com/images/thumbs/0000024_apple-macbook-pro-13-inch_550.jpeg",
    "https://adminapi.applegadgetsbd.com/storage/media/large/iPhone-14-Pro-Max-9907.jpg",
  ];

  const openImageViewer = useCallback((index: any) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <div>
      <div className="grid grid-cols-4 gap-2 mt-2 cursor-pointer">
        {images.map((src, index) => (
          <div key={index}>
            <img
              className="w-44"
              src={src}
              onClick={() => openImageViewer(index)}
              width="200"
              style={{ margin: "2px" }}
              alt=""
            />
          </div>
        ))}
      </div>

      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)",
          }}
        />
      )}
    </div>
  );
};

export default ProductImage;
