import json
import datetime
import sys


def calculateElo(currentEloWinner, currentEloLoser):
    RPowerWinner = currentEloWinner / 400
    RPowerLoser = currentEloLoser / 400
    RWinner = 10 ** RPowerWinner
    RLoser = 10 ** RPowerLoser
    EWinner = RWinner / (RWinner + RLoser)
    ELoser = RLoser / (RWinner + RLoser)
    SWinner = 1
    SLoser = 0
    k = 32
    WinnerUpdatedElo = currentEloWinner + k * (SWinner - EWinner)
    LoserUpdatedElo = currentEloLoser + k * (SLoser - ELoser)
    return [WinnerUpdatedElo, LoserUpdatedElo]


def updatePlayerData(winnerData, loserData):
    updatedElo = calculateElo(winnerData["ELO"], loserData["ELO"])
    winnerData["ELO"] = updatedElo[0]
    loserData["ELO"] = updatedElo[1]
    winnerData["Games played"] = winnerData["Games played"] + 1
    loserData["Games played"] = loserData["Games played"] + 1
    winnerData["Last played time"] = str(datetime.datetime.now())
    loserData["Last played time"] = str(datetime.datetime.now())
    winnerData["Wins"] = winnerData["Wins"] + 1
    loserData["Losses"] = loserData["Losses"] + 1
    winnerData["Streak"] = winnerData["Streak"] + 1
    loserData["Streak"] = 0
    return [winnerData, loserData]


inputFile = open("Players.json","r")
players = json.load(inputFile)


defaultWinner = {
    "ELO": 1000,
    "Games played": 0,
    "Last played time": 0,
    "Losses": 0,
    "Streak": 0,
    "Wins": 0
}
defaultLoser = {
    "ELO": 1000,
    "Games played": 0,
    "Last played time": 0,
    "Losses": 0,
    "Streak": 0,
    "Wins": 0
}

winner = input("Who won? ").capitalize()
loser = input("Who lost? ").capitalize()

winnerFound = False
loserFound = False
for player in list(players):
    if player == winner:
        winnerFound = True
    if player == loser:
        loserFound = True

if not winnerFound:
    choice = input("Player '" + winner + "' not found. Would you like to add them? (y or n)")
    if choice == "y":
        players[winner] = defaultWinner
    else:
        sys.exit()

if not loserFound:
    choice = input("Player '" + loser + "' not found. Would you like to add them? (y or n)")
    if choice == "y":
        players[loser] = defaultLoser
    else:
        sys.exit()


updatedPlayers = updatePlayerData(players[winner], players[loser])


outputFile = open("Players.json","w")
outputFile.write(json.dumps(players, indent=4, sort_keys=True))

print("Calculated!")
print(winner + " now has " + str(players[winner]["ELO"]) + " points.")
print(loser + " now has " + str(players[loser]["ELO"]) + " points.")
