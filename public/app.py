from PIL import Image
import os

# Input and Output folder paths
input_folder = "cards"
output_folder = "Images"

# Compression quality (1-100)
compression_quality =20  # Lower value = more compression

# Ensure output folder exists
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# Process images in the input folder
for filename in os.listdir(input_folder):
    if filename.lower().endswith(('.jpg', '.jpeg')):
        input_path = os.path.join(input_folder, filename)
        output_path = os.path.join(output_folder, filename)

        try:
            # Open the image
            with Image.open(input_path) as img:
                # Remove metadata and compress the image
                img = img.convert("RGB")  # Ensures compatibility
                img.save(output_path, "JPEG", optimize=True, quality=compression_quality)
                print(f"Compressed and saved: {filename}")
        except Exception as e:
            print(f"Error processing {filename}: {e}")

print("Image compression complete. Check the 'Compressed_Images' folder.")
