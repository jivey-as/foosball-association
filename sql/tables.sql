CREATE TABLE IF NOT EXISTS `Player` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `eloScore` double NOT NULL,
  `activeStatus` tinyInt(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;

CREATE TABLE Game (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `playerOneId` int(5) NOT NULL,
  `playerTwoId` int(5) NOT NULL,
  `recordedDate` DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
  FOREIGN KEY(playerOneId) REFERENCES Player (id),
  FOREIGN KEY(playerTwoId) REFERENCES Player (id),
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;