// My questions array of Objects

var questions = [
  {
    question: 'In the year 1900 in the U.S. what were the most popular first names given to boy and girl babies?',
    answers: ['William and Elizabeth', 'Joseph and Catherine', 'John and Mary', 'George and Anne'],
    correctAnswer: 'John and Mary'
  }, {
    question: 'When did the Liberty Bell get its name?',
    answers: ['when it was made, in 1701', 'when it rang on July 4, 1776', 'in the 19th century when it became a symbol of the abolition of slavery', 'none of the above'],
    correctAnswer: 'in the 19th century when it became a symbol of the abolition of slavery'
  }, {
    question: 'In the Roy Rogers-Dale Evans Museum, you will find Roy and Dales stuffed horses. Roy\'s horse was named Trigger, which was Dales horse?',
    answers: ['Buttermilk', 'Daisy', 'Scout', 'Tulip'],
    correctAnswer: 'Buttermilk'
  }, {
    question: 'The Daniel Boon museum at the home where he died can best be described how?',
    answers: ['a log cabin in Kentucky', 'a two-story clapboard house in Tennessee', 'a four-story Georgian-style home in Missouri', 'a three story brick house in Arkansas'],
    correctAnswer: 'a four-story Georgian-style home in Missouri'
  }, {
    question: 'Which of the following items was owned by the fewest U.S. homes in 1990?',
    answers: ['home computer', 'compact disk player', 'cordless phone', 'dishwasher'],
    correctAnswer: 'compact disk player'
  }, {
    question: 'Who holds the record for the most victories in a row on the professional golf tour?',
    answers: ['Jack Nicklaus', 'Arnold Palmer', 'Byron Nelson', 'Ben Hogan'],
    correctAnswer: 'Byron Nelson'
  }, {
    question: 'Who is third behind Hank Aaron and Babe Ruth in major league career home runs?',
    answers: ['Reggie Jackson', 'Harmon Killebrew', 'Willie Mays', 'Frank Robinson'],
    correctAnswer: 'Willie Mays'
  }, {
    question: 'In 1990, in what percentage of U.S. married couples did the wife earn more money than the husband',
    answers: ['8', '18', '38', '58'],
    correctAnswer: '18'
  }
];
// Adjustiong my game audio volume
var audio = document.getElementById('game-audio');
audio.volume = 0.3;
// Start my game when start btn clicked
$('#start').on('click', function(){
  game.start();
});
// End my game when my Done btn clicked
$('#done').on('click', function(){
  game.countDown();
});


var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,
  // Setting my counter
  countDown: function(){
    game.counter--;
    $('#counter').html(game.counter)
    if(game.counter <= 0){
      game.done();
    }
    if($('#done').on('click', function(){
      game.done();
    }));
    if(game.counter <= 20){
      $('#counter').css('color', 'red')
      $("<audio></audio>").attr({'src':'assets/audio/count-down.wav', 'autoplay':'autoplay'}).appendTo("#subwrapper");
    }
  },
  // start the game with a timer and add all the questions and answers
  start: function(){
    timer = setInterval(game.countDown, 1000)
    $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
    $('#start, .game-info').remove();
    for(var i=0; i<questions.length; i++){
      $('#subwrapper').append('<h3>' + questions[i].question + '</h3>')
      for(var j=0; j < questions[i].answers.length; j++){
        $('#subwrapper').append("<input class='check-with-label' type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>  <label class='label-for-check'>"+ questions[i].answers[j]+"  </label></br>");
      }
    }
    $('<button id="done" class="done-btn" type="button" name="button-done">Done</button>').appendTo('#subwrapper');
  },
  // checking each input if it is a correct answer or wrong answer and incrementing my game.correct and game.incorrect
  done: function(){
    $.each($('input[name="question-0"]:checked'), function(){
      if($(this).val() === questions[0].correctAnswer){
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($('input[name="question-1"]:checked'), function(){
      if($(this).val() === questions[1].correctAnswer){
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($('input[name="question-2"]:checked'), function(){
      if($(this).val() === questions[2].correctAnswer){
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($('input[name="question-3"]:checked'), function(){
      if($(this).val() === questions[3].correctAnswer){
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($('input[name="question-4"]:checked'), function(){
      if($(this).val() === questions[4].correctAnswer){
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($('input[name="question-5"]:checked'), function(){
      if($(this).val() === questions[5].correctAnswer){
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($('input[name="question-6"]:checked'), function(){
      if($(this).val() === questions[6].correctAnswer){
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($('input[name="question-7"]:checked'), function(){
      if($(this).val() === questions[7].correctAnswer){
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    // Show the results after checking all answers and play a congrats audio
    this.result();
    this.winAudio();
  },
  // Clearing my timer and remove it from page, adding correct answwers and incorrectanswers and Unanswered questions to the user
  result: function(){
    clearInterval(timer);
    $('#subwrapper h2').remove();
    $('#subwrapper').html('<h2>All Done!</h2>').addClass('all-done')
    $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
    $('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
    // display all the Unanswered questions
    $('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"<h3>");
  },
  winAudio: function(){
    var src = 'assets/audio/game-done.mp3';
    $('#subwrapper').append("<audio src="+src+" autoplay></audio>");
  }

}
