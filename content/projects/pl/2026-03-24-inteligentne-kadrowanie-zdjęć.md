---
title: Inteligentne kadrowanie zdjęć
project_url: https://github.com/KonradJam/DTP-Print-Production-Solutions/tree/main/Batch-square-crop
categories:
  - ai
  - automatisation
  - graphic
technologies:
  - AI
  - Gemini CLI
  - Skill
  - ImageMagic
problem: Przygotowanie zdjęć produktowych pod sklepy internetowe, gazetki
  reklamowe czy platformy sprzedażowe wymaga ręcznego kadrowania każdego pliku z
  osobna w Photoshopie, co przy dużych seriach pochłania wiele godzin pracy
  operatora.
solution: Agent Skill dla Gemini CLI, który automatycznie rozpoznaje główny
  obiekt na każdym zdjęciu w folderze, oblicza jego geometrię i wywołuje
  ImageMagick, który precyzyjnie kadruje plik do kwadratu o podanej
  rozdzielczości (np. 480x480px). Obsługuje przetwarzanie wsadowe całego folderu
  za jednym poleceniem w terminalu.
impact: Kadrowanie setek zdjęć produktowych odbywa się w tle bez udziału
  operatora. Oryginalne pliki pozostają nienaruszone, a wykadrowane trafiają
  automatycznie do osobnego folderu.
---
