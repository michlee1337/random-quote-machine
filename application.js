  var quotes = [
    //1
    "If you live a long life and get to the end of it without ever having felt crushingly depressed, you weren't paying attention. <i>- Every Brilliant Thing</i>",
    //2
    "The supreme art of war is to subdue the enemy without fighting. <i>- Sun Tzu</i>",
    //3
    "The true sign of intelligence is not knowledge but imagination. <i>- Albert Einstien</i>",
    //4
    "Today you are you! That is truer than true! There is no one alive who is you-er than you! <i>- Dr. Seuss</i>",
    //5
    "There is only one happiness in this life, to love and be loved. <i>- George Sand</i>",
    //6
    "Happiness can exist only in acceptance. <i>- George Orwell</i>",
    //7
    "No act of kindness, no matter how small, is ever wasted. <i>- Aesop</i>",
    //8
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit. <i>— Aristotle</i>",
    //9
    "A fool thinks himself to be wise, but a wise man knows himself to be a fool. <i>- William Shakespeare</i>",
    //10
    "Open your eyes and see what you can with them before they close forever. <i>- All the Light we Cannot See</i>",
    //11
    "The moon rolls over the roof and falls behind my house <i>- Continuum</i>",
    //12
    "I took a deep breath and listened to the old brag of my heart; I am, I am, I am. <i>- The Bell Jar</i>",
    //13
    "I celebrate myself, and sing myself. — Walt Whitman</i>",
    //14
    "I wondered if that was how forgiveness budded; not with the fanfare of epiphany, but with pain gathering its things, packing up, and slipping away unannounced in the middle of the night. <i>- The Kite Runner</i>",
    //15
    "And the rest is rust and stardust. <i>- Lolita</i>",
    //16
    "The mark of the immature man is that he wants to die nobly for a cause, while the mark of the mature man is that he wants to live humbly for one. — Catcher in the Rye</i>",
    //17
    "Even the darkest night will end and the sun will rise <i>- Les Misérables</i>",
    //18
    "The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time<i> — On the Road</i>",
    //19
    "I would always rather be happy than dignified <i>- Jane Eyre</i>",
    //20
    "Maybe forgetfulness, like a kind snow, would numb and cover them. But they were part of me. They were my landscape. <i>— The Bell Jar</i>",
    //21
    "If we wait until we're ready we'll be waiting for the rest of our lives <i>- A Series of Unfortunate Events</i>",
    //22
    "Whenever you feel like criticizing anyone, just remember that all the people in this world hasn't had the advantages that you've had <i>- The Great Gatsby</i>",
    //23
    "Atticus told me to delete the adjectives and I'd have the facts <i>- To Kill a Mokingbird</i>",
    //24
    "Scout: He was real nice.\nAtticus: Most people are, Scout, when you finally see them. <i>- To Kill a Mokingbird</i>",
    //25
    "She wasn’t doing a thing that I could see, except standing there leaning on the balcony railing, holding the universe together. <i>— J.D Salinger</i>"];




document.addEventListener('DOMContentLoaded', function() {
    $("#new-quote").on('click', function() {
      $('#quote').empty();
      var count = Math.floor(Math.random() * 25);
      var phrase = "b"
      switch(count) {
        case 0:
        phrase = quotes[0];
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 1:
        phrase = quotes[1];
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 2:
        phrase = quotes[2];
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 3:
        phrase = quotes[3];
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 4:
        phrase = quotes[4];
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 5:
        phrase = quotes[5];
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 6:
        phrase = quotes[6];
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 7:
        phrase = quotes[7];
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 8:
        phrase = quotes[8];
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 9:
        phrase = quotes[9];
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 10:
        phrase = quotes[10];
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 11:
        phrase = quotes[11];
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 12:
        phrase = quotes[12];
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 13:
        phrase = quotes[13];
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 14:
        phrase = quotes[14];
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 15:
        phrase = quotes[15];
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 16:
        phrase = quotes[16];
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 17:
        phrase = quotes[17];
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 18:
        phrase = quotes[18];
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 19:
        phrase = quotes[19];
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 20:
        phrase = quotes[20];
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 21:
        phrase = quotes[21];
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 22:
        phrase = quotes[22];
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 23:
        phrase = quotes[23];
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 24:
        phrase = quotes[24];
        $('#quote').append('<p>' + phrase + '</p>');
        break;
  }});

});
