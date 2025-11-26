#!/usr/bin/env python3
import zipfile
import os
import shutil

# Extract the ZIP file
zip_path = "/workspace/user_input_files/Versión 3 online.zip"
extract_path = "/workspace/extracted_version"

# Create extract directory
if os.path.exists(extract_path):
    shutil.rmtree(extract_path)
os.makedirs(extract_path)

# Extract ZIP file
try:
    with zipfile.ZipFile(zip_path, 'r') as zip_ref:
        zip_ref.extractall(extract_path)
    print("ZIP file extracted successfully!")
    
    # List contents
    print("\nExtracted files:")
    for root, dirs, files in os.walk(extract_path):
        for file in files:
            file_path = os.path.join(root, file)
            print(file_path)
            
except Exception as e:
    print(f"Error extracting ZIP: {e}")