import json
import datetime
import sys


inputFile = open("Players.json","r")
players = json.load(inputFile)
elos = []
outputFile = open("PlayersSorted.json","w")
sortedList = {}
for player in players:
    elos.append(players[player]['ELO'])

elos = sorted(elos, reverse=True)

for elo in elos:
    for player in players:
        if elo == players[player]['ELO']:
            sortedList[player] = players[player]


outputFile.write(json.dumps(sortedList, indent=4))
