from flask import Flask, jsonify, abort

app = Flask(__name__)

items = [
  {'type': "bread", 'cost': 3.25},
  {'type': "apple", 'cost': 0.87}
]


@app.route("/hello", methods=["GET"])
def getHello():
  return jsonify(items)

@app.route("/apple", methods=["GET"])
def getApple():
  for item in items:
    print(item)
    if item['type'] == "apple":
      return item
  return jsonify(items)

@app.route("/test", methods=["GET"])
def getTest():
  # return jsonify(items)
  return abort(404, description="There was a problem...")

if __name__ == '__main__':
  app.run(port=8080)