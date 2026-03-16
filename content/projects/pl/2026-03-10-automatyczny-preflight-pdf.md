---
title: Automatyczny preflight PDF
project_url: https://github.com/KonradJam/DTP-Print-Production-Solutions/tree/main/HotFolder-Acrobat
categories:
  - automatisation
  - dtp
technologies:
  - ExtendScript
  - Adobe Acrobat Droplets
problem: Klient przysyła kilkadziesiąt plików PDF naraz, każdy wymaga ręcznego
  sprawdzenia przed drukiem.
solution: Skrypt PowerShell monitoruje folder i automatycznie uruchamia
  preflight w Adobe Acrobat Pro (via Droplet). Pliki poprawne trafiają do
  folderu Correct, błędne do folderu Incorrect wraz z raportem tekstowym
  opisującym wykryte problemy.
impact: Eliminacja ręcznego sprawdzania plików — weryfikacja kilkudziesięciu
  PDF-ów odbywa się w tle, bez udziału operatora.
---
