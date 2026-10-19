---
title: Automatyczna kontrola jakości grafik z AI
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
problem: Grafiki dostarczane do druku mogą mieć nieprawidłowe parametry
  techniczne lub zawierać wady wizualne, takie jak rozmycia, artefakty kompresji
  czy ślady sztucznego powiększania. Ich ręczna weryfikacja jest czasochłonna.
solution: Automatyzacja w n8n najpierw sprawdza parametry plików na podstawie
  specyfikacji JSON (wymiary, PPI, proporcje, orientacja). Grafiki, które
  przejdą tę kontrolę, trafiają do Gemini. AI analizuje trzy wycinki w skali
  1:1, oceniając 16 kryteriów jakości całej grafiki. Wyniki kontroli technicznej
  i analizy AI zapisywane są w jednym raporcie JSON dla każdej grafiki.
impact: Automatyzuje wstępną kontrolę grafik i raportowanie. Projekt ma również
  charakter eksperymentalny — bada przydatność AI do oceny jakości obrazów w
  DTP. Testy wykazały ograniczenia modeli w wykrywaniu utraty szczegółowości po
  skalowaniu i kompresji, dlatego ocena AI pozostaje pomocnicza.
---
