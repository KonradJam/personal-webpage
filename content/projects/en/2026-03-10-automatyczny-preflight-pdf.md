---
title: Automatic PDF Preflight
project_url: https://github.com/KonradJam/DTP-Print-Production-Solutions/tree/main/HotFolder-Acrobat
categories:
  - automatisation
  - dtp
technologies:
  - ExtendScript
  - Adobe Acrobat Droplets
problem: Client sends dozens of PDF files at once, each requiring manual
  checking before printing.
solution: A PowerShell script monitors a folder and automatically runs preflight
  in Adobe Acrobat Pro (via Droplet). Correct files go to the Correct folder,
  incorrect ones to Incorrect along with a text report describing found issues.
impact: Elimination of manual file checking — verification of dozens of PDFs
  happens in the background, without operator intervention.
---
