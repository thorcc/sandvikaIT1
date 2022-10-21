import urllib.request
import json 

spotify_url = "https://charts-spotify-com-service.spotify.com/public/v0/charts"
respons = urllib.request.urlopen(spotify_url) # gjør en spørring til spotify_url (henter innholdet på nettadressen)
innhold = respons.read() # leser innholdet i responsen som en string
data = json.loads(innhold) # gjør innholdet om til en ordbok

# print(data) # printer innholdet



# --- Hente ut toppliste ---
## Denne koden avhenger av API-et vi henter fra. Det kan fort bli litt knotete. 
## Man bør åpne adressen i nettleseren: https://charts-spotify-com-service.spotify.com/public/v0/charts
## Utvidelsen JSON formatter hjelper også ganske mye:
## Chrome: https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa
## Firefox: Har innebygd JSON formatter???

toppliste = data["chartEntryViewResponses"][0]
listenavn = toppliste["displayChart"]["chartMetadata"]["readableTitle"]
print()
print("---", listenavn, "---")
print()
sangliste = toppliste["entries"]
for sang in sangliste:
    nummer = sang["chartEntryData"]["currentRank"]
    navn = sang["trackMetadata"]["trackName"]
    artist = sang["trackMetadata"]["artists"][0]["name"] # det er en liste med artister, men for å gjøre det enkelt henter jeg bare ut den første artisten
    bilde_url = sang["trackMetadata"]["displayImageUri"]
    print(str(nummer) + ": " + artist + " - " + navn)