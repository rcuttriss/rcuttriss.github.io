const codeBlockStrings = [
  `
          @SpringBootApplication
          public class DemoApplication {
  
              private static final Logger log = LoggerFactory.getLogger(DemoApplication.class);
  
              public static void main(String[] args) {
                  SpringApplication.run(DemoApplication.class, args);
  
              }
  
              @Bean
              CommandLineRunner loadUsersIntoRunTable(UserRestClient userRestClient) {
  
                  return args -> {
                      List<User> users = userRestClient.findAll();
                      log.info("{}", users);
  
                      User user = userRestClient.findById(1);
                      log.info("{}", user);
                  };
              }
          }
    `,
  `
          public class Board {
          private Piece[] b = new Piece[64];
          private static String colMarkers = "ABCDEFGH";
          private int turn = 1; // 1 = white, 2 = black
          private int whiteKingPos = -1;
          private int blackKingPos = -1;
  
          public Board() {
  
          }
  
          public Board(Board other) {
              for (int i = 0; i < other.b.length; i++) {
                  if (other.b[i] != null) {
                      this.b[i] = other.b[i];
                  } else {
                      this.b[i] = null;
                  }
              }
              this.setWhiteKingPos(other.getWhiteKingPos());
              this.setBlackKingPos(other.getBlackKingPos());
          }
  
          public Board(Board other, int turn) {
              for (int i = 0; i < other.b.length; i++) {
                  if (other.b[i] != null) {
                      this.b[i] = other.b[i];
                  } else {
                      this.b[i] = null;
                  }
              }
              this.setTurn(turn);
              this.setWhiteKingPos(other.getWhiteKingPos());
              this.setBlackKingPos(other.getBlackKingPos());
          }
  
          public int initStandardBoard() {
              // Initialize black pieces
              b[0] = new Rook(2);
              b[1] = new Knight(2);
              b[2] = new Bishop(2);
              b[3] = new Queen(2);
              b[4] = new King(2);
              b[5] = new Bishop(2);
              b[6] = new Knight(2);
              b[7] = new Rook(2);
              b[8] = new Pawn(2);
              b[9] = new Pawn(2);
              b[10] = new Pawn(2);
              b[11] = new Pawn(2);
              b[12] = new Pawn(2);
              b[13] = new Pawn(2);
              b[14] = new Pawn(2);
              b[15] = new Pawn(2);
  
              // Initialize white pieces
              b[48] = new Pawn(1);
              b[49] = new Pawn(1);
              b[50] = new Pawn(1);
              b[51] = new Pawn(1);
              b[52] = new Pawn(1);
              b[53] = new Pawn(1);
              b[54] = new Pawn(1);
              b[55] = new Pawn(1);
              b[56] = new Rook(1);
              b[57] = new Knight(1);
              b[58] = new Bishop(1);
              b[59] = new Queen(1);
              b[60] = new King(1);
              b[61] = new Bishop(1);
              b[62] = new Knight(1);
              b[63] = new Rook(1);
  
              this.setWhiteKingPos(4);
              this.setBlackKingPos(60);
  
              return 1;
          }
  
          public King getTeamKing(int colorCode) {
              if (colorCode == 1)
                  return this.getWhiteKing();
              else
                  return this.getBlackKing();
          }
  
          public King getEnemyKing(int colorCode) {
              if (colorCode == 1)
                  return this.getBlackKing();
              else
                  return this.getWhiteKing();
          }
  
          public King getWhiteKing() {
              return (King) this.getPiece(this.getWhiteKingPos());
          }
  
          public King getBlackKing() {
              return (King) this.getPiece(this.getBlackKingPos());
          }
  
          public int getTeamKingPosByColorCode(int colorCode) {
              if (colorCode == 1)
                  return this.getWhiteKingPos();
              else
                  return this.getBlackKingPos();
          }
  
          public int getEnemyKingPosByColorCode(int colorCode) {
              if (colorCode == 1)
                  return this.getBlackKingPos();
              else
                  return this.getWhiteKingPos();
          }
  
          public int getWhiteKingPos() {
              return this.whiteKingPos;
          }
  
          public int getBlackKingPos() {
              return this.blackKingPos;
          }
  
          public void setKingPosByColorCode(int colorCode, int pos) {
              if (colorCode == 1)
                  this.setWhiteKingPos(pos);
              else
                  this.setBlackKingPos(pos);
          }
  
          public void setWhiteKingPos(int pos) {
              this.whiteKingPos = pos;
          }
  
          public void setBlackKingPos(int pos) {
              this.blackKingPos = pos;
          }
  
          public void flipTurn() {
              if (this.turn == 1)
                  this.turn = 2;
              else
                  this.turn = 1;
          }
  
          public void setTurn(int turn) {
              this.turn = turn;
          }
  
          public int getTurn() {
              return this.turn;
          }
  
          public Piece getPiece(int pos) {
              if (!Board.isPosValid(pos))
                  return null;
              return b[pos];
          }
  
          public Set<Integer> getAllThreatsOfColorCode(int colorCode) {
              Set<Integer> allColorCodeThreats = new HashSet<>();
              Set<Integer> pieceThreats;
              for (int i = 0; i < b.length; i++) {
                  if (this.getColorCodeOfPos(i) == colorCode) {
                      pieceThreats = b[i].getThreats(i, this);
                      allColorCodeThreats.addAll(pieceThreats);
                  }
              }
  
              return allColorCodeThreats;
          }
  
          public int setPiece(int pos, Piece p) {
              if (!Board.isPosValid(pos))
                  return -1;
              b[pos] = p;
              return 1;
          }
  
          public int removePiece(int pos) {
              if (!Board.isPosValid(pos))
                  return -1;
              b[pos] = null;
              return 1;
          }
  
          public Board makeMove(int start, int end) {
              // has the logic of flipping turns
              // TODO logic for check and checkmate
              Board newBoard = new Board(this, this.getTurn());
              Piece pieceToMove = newBoard.getPiece(start);
              if (pieceToMove == null) {
                  System.out.println("Empty Square's can't move!");
                  return this;
              }
  
              // if its their turn, if not they cannot move
              if (!pieceToMove.isSameColor(newBoard.getTurn())) {
                  System.out.println("It's not your turn");
                  return this;
              }
  
              // game board update
              newBoard.movePiece(start, end);
  
              int pieceColorCode = pieceToMove.getColorCode();
              // update king pos if piece is king
              if (pieceToMove instanceof King) {
                  newBoard.setKingPosByColorCode(pieceColorCode, end);
              }
  
              // if the piece's king is checked the move is illegal
              int kingPos = newBoard.getTeamKingPosByColorCode(pieceColorCode);
              King myKing = (King) newBoard.getPiece(kingPos);
              if (myKing.isChecked(kingPos, newBoard)) {
                  System.out.println("If you did this move your king would get taken!");
                  return this;
              }
  
              int enemyKingPos = newBoard.getEnemyKingPosByColorCode(pieceColorCode);
              King enemyKing = (King) newBoard.getPiece(enemyKingPos);
              if (enemyKing.isCheckMate(enemyKingPos, newBoard)) {
                  System.out.println("Checkmate!");
                  return newBoard;
              }
  
              newBoard.flipTurn();
              return newBoard;
          }
  
          public int movePiece(int piecePos, int pieceEnd) {
              // moves the piece but does not implement core game logic
              // makeMove should be used in most cases
              // movePiece is good for testing or special cases like castling
              int result = 0;
              if (b[piecePos] == null)
                  return -1;
              if (b[pieceEnd] == null)
                  result = 0;
              else
                  result = 1;
              b[pieceEnd] = b[piecePos];
              b[piecePos] = null;
              return result;
          }
  
          public int getColorCodeOfPos(int pos) {
              // -1 = invalid, 0 = empty, 1 = white, 2 = black
              if (!Board.isPosValid(pos))
                  return -1;
              if (this.isSquareEmpty(pos)) {
                  return 0;
              } else
                  return b[pos].getColorCode();
          }
  
          public static boolean isPosValid(int pos) {
              return pos >= 0 && pos < 64;
          }
  
          public static boolean isPosOnBoardEdge(int pos) {
              // top edge
              if (pos >= 0 && pos <= 7)
                  return true;
              // right edge
              if ((pos + 1) % 8 == 0)
                  return true;
              // bottom edge
              if (pos >= 56 && pos <= 63)
                  return true;
              // left edge
              if ((pos + 1) % 8 == 1)
                  return true;
  
              return false;
          }
  
          public boolean isSquareEmpty(int pos) {
              return b[pos] == null;
          }
  
          public static String posToRowFileStr(int pos) {
              int file = pos % 8;
              int rank = 8 - (pos / 8);
              return colMarkers.charAt(file) + Integer.toString(rank);
          }
  
          public static int fileRankStrToPos(String rowFileStr) {
              if (rowFileStr.length() > 2)
                  return -1;
              int file = colMarkers.indexOf(rowFileStr.toUpperCase().charAt(0));
              if (file == -1)
                  return file;
              int rank = 8 - Character.getNumericValue(rowFileStr.toUpperCase().charAt(1));
              return 8 * rank + file;
          }
  
          public void printBoard() {
              for (int i = 0; i < 64; ++i) {
                  int file = i % 8;
                  int rank = 8 - (i / 8);
  
                  // Print the row marker at the start of each row
                  if (file == 0) {
                      if (rank >= 0) {
                          System.out.println();
                      }
  
                      System.out.print(Integer.toString(rank) + " | ");
                  }
  
                  // Print the board content
                  if (this.getColorCodeOfPos(i) == 0) {
                      System.out.print(".");
                  } else {
                      System.out.print(this.getPiece(i).getPieceChar());
                  }
                  System.out.print(" ");
  
                  // Print column numbers after the last row
                  if (i == 63) {
                      System.out.println();
                      System.out.println("-------------------");
                      System.out.print("  | ");
                      for (int j = 0; j < colMarkers.length(); j++) {
                          System.out.print(colMarkers.charAt(j) + " ");
                      }
                  }
              }
              System.out.println();
          }
  
      }
    `,
  `
  package mychess;

    import javax.swing.*;
    import java.awt.*;
    import java.awt.event.ActionEvent;
    import java.awt.event.ActionListener;
    import java.util.List;
    import java.util.ArrayList;

    public class ChessGUI extends JFrame {
        private Board board;
        private JPanel boardPanel;
        private JButton[] squares;
        private int selectedPos = -1;
        private List<Integer> tempMoves;

        public ChessGUI() {
            board = new Board();
            board.initStandardBoard();

            setTitle("Chess Game");
            setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            setSize(800, 800);

            boardPanel = new JPanel(new GridLayout(8, 8));
            squares = new JButton[64];

            createBoardSquares();
            updateBoardDisplay();

            add(boardPanel);
            setVisible(true);

            tempMoves = new ArrayList<>();
        }

        private void createBoardSquares() {
            for (int pos = 0; pos < 64; pos++) {
                squares[pos] = new JButton();
                squares[pos].addActionListener(new SquareListener(pos));
                boardPanel.add(squares[pos]);
            }
        }

        private void updateBoardDisplay() {
            for (int pos = 0; pos < 64; pos++) {
                Piece piece = board.getPiece(pos);
                JButton square = squares[pos];

                if (piece != null) {
                    square.setText(String.valueOf(piece.getPieceChar()));
                } else {
                    square.setText("");
                }

                // alternate between white and gray
                square.setBackground((pos / 8 + pos) % 2 == 0 ? Color.WHITE : Color.GRAY);
            }
            boardPanel.revalidate();
            boardPanel.repaint();
        }

        private class SquareListener implements ActionListener {
            private int pos;

            public SquareListener(int pos) {
                this.pos = pos;
            }

            @Override
            public void actionPerformed(ActionEvent e) {
                if (selectedPos == -1) {
                    // First click - select piece
                    Piece p = board.getPiece(pos);

                    // stop if square is empty
                    if (p != null) {
                        selectedPos = pos;
                        squares[selectedPos].setBackground(Color.YELLOW);
                    } else {
                        return;
                    }
                    tempMoves = p.getMoves(pos, board);

                    for (Integer move : tempMoves) {
                        Integer adjustedMove = move;
                        // castling moves are the end space of the king + 9000
                        // we can infer the position of the rook based on king pos and color
                        if (adjustedMove > 9000)
                            adjustedMove -= 9000;
                        squares[adjustedMove].setBackground(Color.BLUE);
                    }

                } else {
                    // Second click - attempt to move
                    int startPos = selectedPos;
                    int endPos = pos;

                    boolean containsMove = tempMoves.contains(endPos) || tempMoves.contains(endPos + 9000);
                    if (startPos != endPos && containsMove) {
                        // Move successful

                        // castling special move of rook (4 cases)
                        int posIfCastling = endPos + 9000;
                        if (tempMoves.contains(posIfCastling)) {
                            int rookPos = -1;
                            int rookEndPos = -1;
                            if (board.getPiece(startPos) instanceof King) {
                                if (posIfCastling == 9062) {
                                    // white king side
                                    rookPos = 63;
                                    rookEndPos = rookPos - 2;
                                } else if (posIfCastling == 9055) {
                                    // white queen side
                                    rookPos = 55;
                                    rookEndPos = rookPos + 3;
                                } else if (posIfCastling == 9006) {
                                    // black king side
                                    rookPos = 7;
                                    rookEndPos = rookPos - 2;
                                } else if (posIfCastling == 9002) {
                                    // black queen side
                                    rookPos = 0;
                                    rookEndPos = rookPos + 3;
                                } else
                                    // something is wrong
                                    System.out.println("CASTLING BUG");
                            }

                            if (board.getPiece(rookPos) instanceof Rook)
                                board.movePiece(rookPos, rookEndPos);
                        }

                        // make the move
                        board = board.makeMove(startPos, endPos);
                    } else {
                        // Move failed
                        JOptionPane.showMessageDialog(ChessGUI.this, "Invalid move!");
                    }
                    updateBoardDisplay();

                    // reset selection
                    selectedPos = -1;

                    // reset board
                    boardPanel.revalidate();
                    boardPanel.repaint();

                    // set hasMoved on any instance of FirstMoveTracker
                    Piece pieceToMove = board.getPiece(pos);
                    if (pieceToMove instanceof FirstMoveTracker)
                        ((FirstMoveTracker) pieceToMove).setMoved(true);

                }
            }

        }

        public static void main(String[] args) {
            SwingUtilities.invokeLater(() -> new ChessGUI());
        }}
    `,
  `
    const express = require("express");
    const http = require("http");
    const socketIo = require("socket.io");

    const app = express();
    const server = http.createServer(app);
    const io = socketIo(server);
    const PORT = process.env.PORT || 3010;

    let rooms = {};
    let playerList = {};
    let roomCreators = new Set();

    function updateRooms() {
    io.to("lobby").emit("updateRooms", rooms);
    }

    function updatePlayerList(id, roomName) {
    playerList[id] = roomName;
    }

    io.on("connection", (socket) => {
    console.log("a user connected:", socket.id);

    socket.join("lobby");
    updatePlayerList(socket.id, "lobby");
    updateRooms();

    socket.on("joinRoom", (roomName) => {
        console.log('socket.id is joining room roomName...');
        let room = rooms[roomName];

        if (roomCreators.has(socket.id)) {
        socket.emit("error", "You can only create one room.");
        return;
        }

        if (!room) {
        console.log('creating room roomName');
        roomCreators.add(socket.id);
        socket.leave("lobby");
        socket.join(roomName);

        updatePlayerList(socket.id, roomName);
        rooms[roomName] = {
            player1: socket.id,
            player2: null,
            choices: {
            p1choice: null,
            p2choice: null,
            },
        };
        updateRooms();
        } else if (!room.player2) {
        socket.leave("lobby");
        socket.join(roomName);

        updatePlayerList(socket.id, roomName);
        room.player2 = socket.id;
        updateRooms();
        } else {
        socket.emit("roomFull");
        return;
        }

        socket.emit("roomJoined", roomName);
    });

    socket.on("choice", (choice) => {
        const roomName = playerList[socket.id];
        const room = rooms[roomName];

        if (room && room.player1 && room.player2) {
        if (room.player1 === socket.id) {
            room.choices["p1choice"] = choice;
        } else if (room.player2 === socket.id) {
            room.choices["p2choice"] = choice;
        }
        socket.broadcast
            .to(room.player1 === socket.id ? room.player2 : room.player1)
            .emit("opponentChoice");

        if (room.choices["p1choice"] && room.choices["p2choice"]) {
            const result = decideWinner(
            room.choices["p1choice"],
            room.choices["p2choice"]
            );
            let winner;
            switch (result) {
            case 1:
                winner = room.player1;
                break;
            case 2:
                winner = room.player2;
                break;
            case 0:
                winner = "TIE";
                break;
            default:
                winner = "ERROR";
                break;
            }

            io.to(roomName).emit("result", winner);

            // Reset choices
            room.choices["p1choice"] = null;
            room.choices["p2choice"] = null;
        }
        }
    });

    socket.on("disconnect", () => {
        console.log("user disconnected:", socket.id);
        let roomName = playerList[socket.id];
        if (!roomName) return; // Exit if no roomName for socket.id

        let room = rooms[roomName];
        if (!room) return; // Exit if no room for roomName

        // Handle player disconnection and cleanup
        if (room.player1 === socket.id) {
        room.player1 = null;
        } else if (room.player2 === socket.id) {
        room.player2 = null;
        }

        const otherPlayer =
        room.player1 === socket.id ? room.player2 : room.player1;
        if (otherPlayer) {
        socket.broadcast.to(otherPlayer).emit("opponentLeft");
        }

        if (!room.player1 && !room.player2) {
        roomCreators.delete(socket.id);
        delete rooms[roomName];
        delete playerList[socket.id];
        }
    });
    });

    function decideWinner(choice1, choice2) {
    // If the choices are the same, it's a tie.
    if (choice1 === choice2) {
        return 0;
    }

    const rules = {
        rock: {
        scissors: 1,
        paper: 2,
        },
        paper: {
        rock: 1,
        scissors: 2,
        },
        scissors: {
        rock: 2,
        paper: 1,
        },
    };

    return rules[choice1] && rules[choice1][choice2]
        ? rules[choice1][choice2]
        : -1;
    }

    app.use(express.static("public"));
    server.listen(PORT, () => {
    });

    `,
  `
    const express = require("express");
    const http = require("http");
    const { Server } = require("socket.io");
    const WebSocket = require("ws"); // For connecting to Finnhub

    const app = express();
    const server = http.createServer(app);
    const react_ws = new Server(server, {
    cors: {
        origin: "http://localhost:3000", // Replace with your React app's origin
    },
    });
    require("dotenv").config(); // Load environment variables from .env file

    // Finnhub WebSocket connection details (replace with your credentials)
    const finnhubWsUrl = process.env.FINNHUB_API_TOKEN;

    let finnhubSocket = null; // Store the Finnhub WebSocket connection

    const connectToFinnhub = () => {
    finnhubSocket = new WebSocket(finnhubWsUrl);

    finnhubSocket.onopen = () => {
        console.log("Connected to Finnhub WebSocket API");
        finnhubSocket.send(
        JSON.stringify({ type: "subscribe", symbol: "BINANCE:ETHUSDT" })
        );
        finnhubSocket.send(
        JSON.stringify({ type: "subscribe", symbol: "BINANCE:BTCUSDT" })
        );
        finnhubSocket.send(
        JSON.stringify({ type: "subscribe", symbol: "BINANCE:MKRUSDT" })
        );
        finnhubSocket.send(
        JSON.stringify({ type: "subscribe", symbol: "BINANCE:PAXGUSDT" })
        );
    };

    finnhubSocket.onmessage = (message) => {
        const data = JSON.parse(message.data);
        // console.log(data);
        // Emit the received data to the React client(s)
        react_ws.emit("finnhub-data", data);
    };

    finnhubSocket.onerror = (error) => {
        console.error("Error with Finnhub WebSocket:", error);
        // Implement error handling (e.g., reconnect attempts)
    };

    finnhubSocket.onclose = () => {
        console.log("Disconnected from Finnhub WebSocket API");
        // Implement reconnection logic if needed
    };
    };

    connectToFinnhub(); // Establish connection on server startup

    react_ws.on("connection", (socket) => {
    console.log("Client connected to Express server");
    });

    server.listen(3001, () => {
    console.log("Server listening on port 3001");
    });
    `,
  `
    import React, { useState, useEffect, useRef } from "react";
    import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    } from "chart.js";
    import { Line } from "react-chartjs-2";
    import socket from "../../lib/socket";
    import ChartTrend from "./ChartTrend";

    ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
    );

    function convertUnixMsToTime(unixMs) {
    // Create a new Date object from the milliseconds
    const date = new Date(unixMs);

    // Options for formatting (adjust as needed)
    const options = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    };

    // Format the date according to the options
    const formattedTime = date.toLocaleString("en-US", options);

    return formattedTime;
    }

    const MAX_CHART_LENGTH = 60;
    const TIME_INTERVAL_MS = 1000;

    const StockChart = ({ symbol, stockData, setStockData }) => {
    const [timestamps, setTimestamps] = useState([]);
    const lastTimeStamp = useRef(0);

    useEffect(() => {
        // no-op if the socket is already connected
        socket.connect();

        socket.on("finnhub-data", (data) => {
        if (data["data"] === undefined || data["data"].length === 0) {
            return;
        }

        // filter by symbol
        const bigData = data["data"].filter((item) => item.s === symbol);
        let prunedTimeStamps = [];
        let prunedPrices = [];

        // prune the incoming data to only show a data point every TIME_INTERVAL_MS
        for (const element of bigData) {
            const currTime = element["t"];
            const currPrice = element["p"];

            if (currTime - lastTimeStamp.current >= TIME_INTERVAL_MS) {
            lastTimeStamp.current = currTime;
            prunedTimeStamps.push(convertUnixMsToTime(currTime));
            prunedPrices.push(currPrice);
            }
        }

        // set timeStamps and prices, slicing old data to keep max data points at MAX_CHART_LENGTH
        setTimestamps((prevTimestamps) => {
            const combinedLength = prevTimestamps.length + prunedTimeStamps.length;
            if (combinedLength > MAX_CHART_LENGTH) {
            const sliceAmount = combinedLength - MAX_CHART_LENGTH;
            const prevTimestampsSliced = prevTimestamps.slice(sliceAmount);
            return [...prevTimestampsSliced, ...prunedTimeStamps];
            } else {
            return [...prevTimestamps, ...prunedTimeStamps];
            }
        });

        setStockData((prevPrices) => {
            const combinedLength = prevPrices.length + prunedPrices.length;
            if (combinedLength > MAX_CHART_LENGTH) {
            const sliceAmount = combinedLength - MAX_CHART_LENGTH;
            const prevPricesSliced = prevPrices.slice(sliceAmount);
            return [...prevPricesSliced, ...prunedPrices];
            } else {
            return [...prevPrices, ...prunedPrices];
            }
        });
        });

        return () => {
        socket.disconnect();
        };
    }, []);

    const chartData = {
        labels: timestamps,
        datasets: [
        {
            label: symbol,
            data: stockData,
            backgroundColor: "rgba(54, 162, 235, 0.5)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
        },
        ],
    };

    const options = {
        animations: false,
        layout: {
        padding: 20,
        },
        plugins: {
        legend: {
            display: false,
        },
        },
        scales: {
        x: {
            ticks: {
            display: false, // Hide the x-axis labels
            },
        },
        },
    };

    return (
        <div className="Chart">
        <Line data={chartData} options={options} width={368} />
        <ChartTrend
            symbol={symbol}
            stockData={stockData}
            MAX_CHART_LENGTH={MAX_CHART_LENGTH}
        ></ChartTrend>
        </div>
    );
    };

    export default StockChart;
    `,
];

export default codeBlockStrings;
