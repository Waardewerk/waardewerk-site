# Waardewerk site — werkinstructies

## Git & deploy
Na elke taak automatisch committen en pushen:
```
git add . && git commit -m "[omschrijving]" && git push
```
Doe dit zonder te vragen, tenzij de gebruiker expliciet zegt dat hij niet wil pushen.

Push naar Vercel alleen als de gebruiker dat vraagt ("push naar vercel" / "deploy").

## GitHub authenticatie
Token opslaan als omgevingsvariabele of via credential helper. Nooit hardcoden in bestanden die getrackt worden.
