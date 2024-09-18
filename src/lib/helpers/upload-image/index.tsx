// Function to upload image to ImageBB
export async function uploadImage(imageFile:any) {
    const API_KEY = 'YOUR_IMGBB_API_KEY';
    const formData = new FormData();
    formData.append('image', imageFile);
  
    try {
      const response = await fetch(`https://api.imgbb.com/1/upload?key=${API_KEY}`, {
        method: 'POST',
        body: formData,
      });
  
      const data = await response.json();
  
      if (data.success) {
        return data.data.url
      } else {
        throw new Error('Image upload failed');
      }
    } catch (error) {
      return
    }
  }
  