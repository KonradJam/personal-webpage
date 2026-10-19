---
title: Automated Image Quality Check with AI
project_url: https://github.com/KonradJam/DTP-Print-Production-Solutions/tree/main/Image-check-Ai
categories:
  - ai
  - automatisation
  - dtp
technologies:
  - n8n
  - JavaScript
  - Gemini AI
  - GraphicsMagick
problem: Images submitted for printing may have incorrect technical
  specifications or visual defects, such as blurring, compression artifacts, or
  signs of artificial upscaling. Manually checking these files is
  time-consuming.
solution: An n8n automation first checks image specifications against a JSON
  file (dimensions, PPI, aspect ratio, and orientation). Images that pass this
  validation are then sent to Gemini. AI analyzes three crops at their original
  1:1 pixel resolution, evaluating 16 quality criteria for the image as a whole.
  The results of the technical checks and AI analysis are saved in a single JSON
  report for each image.
impact: Automates initial image validation and report generation. The project is
  also experimental, exploring the potential of AI for image quality assessment
  in DTP workflows. Tests revealed limitations in detecting detail loss caused
  by upscaling and compression, so AI assessment remains a supporting tool
  rather than a replacement for professional prepress inspection.
---
