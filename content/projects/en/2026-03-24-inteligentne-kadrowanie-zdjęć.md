---
title: AI Batch Image Cropping
project_url: https://github.com/KonradJam/DTP-Print-Production-Solutions/tree/main/Batch-square-crop
categories:
  - ai
  - automatisation
  - graphic
technologies:
  - AI
  - Gemini CLI
  - Skills
  - ImageMagic
problem: Preparing product photos for online stores, promotional leaflets, or
  sales platforms requires manually cropping each file individually in
  Photoshop, which for large batches takes many hours of operator work.
solution: A Gemini CLI Agent Skill that automatically detects the main object in
  each image in a folder, calculates its geometry, and calls ImageMagick to
  precisely crop the file into a square at a given resolution (e.g., 480x480px).
  Supports batch processing of an entire folder with a single terminal command.
impact: Cropping hundreds of product photos runs in the background without any
  operator involvement. Original files remain untouched, and cropped results are
  automatically saved to a separate folder.
---
