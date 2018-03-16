# Game Time

## Project Goals
  * Learn OOP(object Oriented Program) by building a game that is playable in the browser
  * Learn how to use modular code: its benefits, how to implement, and extending classes
  * Creating a robust testing suite that tests all functionality of a client-side application
    * Using Mocha and Chai
  * Using HTML Canvas to draw and animate

## Needed Playability Features
  * Indicate when the game is over and won or lost
  * Allow the user to start a new game
  * Display a score
  * Include a clean UI surrounding the actual game interface itself, including thorough instructions
  * Create multiple rounds of difficulty

## Code Organization
  The game should have at least two classes and needs to implement inheritance
  * A parent class should have properties that might be shared by several other child classes
  * A parent class’s properties and methods should be shared by all the child classes
  * A child classes should inherit those properties from the parent class

## User Interface Specifications
  * Instructions to begin and play the game
  * Tell the user when the game is over (due to losing, winning, or completing the game)
  * Tell the user the score or number of lives remaining (if applicable)
  * Allow the user to start a new game

## Testing Specifications
  * Class default properties
  * Class methods
  * Anything that updates class properties
  * Class interactions