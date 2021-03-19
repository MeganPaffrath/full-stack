import requests

BASE = "http://127.0.0.1:5000/"

data = [
  {"likes": 10, "name": "Can you walk on jello?", "views": 100000},
  {"likes": 33, "name": "Run Faster", "views": 4355},
  {"likes": 15, "name": "Make Pizza", "views": 3352},
  {"likes": 64, "name": "Eat Pizza: How to", "views": 52641}
]

for i in range(len(data)):
  response = requests.put(BASE + "video/" + str(i), data[i])
  print(response.json())

# response = requests.delete(BASE + "video/0")
# print(response)
input()
response = requests.get(BASE + "video/44")
print(response.json())

input()
response = requests.patch(BASE + "video/0", {"views": 99})
print(response.json())