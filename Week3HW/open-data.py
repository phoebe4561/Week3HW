
import json
import urllib.request as request
import http.client
http.client.HTTPConnection._http_vsn = 10
http.client.HTTPConnection._http_vsn_str = 'HTTP/1.0'
src = "https://padax.github.io/taipei-day-trip-resources/taipei-attractions.json"
with request.urlopen(src) as response:
    data = json.load(response)
target = data["result"]["results"]
file = open("data.txt", mode="w", encoding="utf-8")
for targetData in target:
    url = "http://"+targetData["file"].split("http://")[1]
    file.write(targetData["stitle"]+"," + targetData["longitude"] +
               ","+targetData["latitude"]+","+url + "\n")
file.close()
