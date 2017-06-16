document.addEventListener('DOMContentLoaded', function() {
    $("#new-quote").on('click', function() {
      $('#quote').empty();
      var count = Math.floor(Math.random() * 26);
      var phrase = "b"
      switch(count) {
        case 1:
        phrase = "If you live a long life and get to the end of it without ever having felt crushingly depressed, you weren't paying attention. <i>- Every Brilliant Thing</i>";
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 2:
        phrase = "The supreme art of war is to subdue the enemy without fighting. <i>- Sun Tzu</i>";
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 3:
        phrase = "The true sign of intelligence is not knowledge but imagination. <i>- Albert Einstien</i>";
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 4:
        phrase = "Today you are you! That is truer than true! There is no one alive who is you-er than you! <i>- Dr. Seuss</i>";
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 5:
        phrase = "There is only one happiness in this life, to love and be loved. <i>- George Sand</i>";
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 6:
        phrase = "Happiness can exist only in acceptance. <i>- George Orwell</i>";
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 7:
        phrase = "No act of kindness, no matter how small, is ever wasted. <i>- Aesop</i>";
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 8:
        phrase = "We are what we repeatedly do. Excellence, then, is not an act, but a habit. <i>— Aristotle</i>";
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 9:
        phrase = "A fool thinks himself to be wise, but a wise man knows himself to be a fool. <i>- William Shakespeare</i>";
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 10:
        phrase = "Open your eyes and see what you can with them before they close forever. <i>- All the Light we Cannot See</i>";
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 11:
        phrase = "The moon rolls over the roof and falls behind my house <i>- Continuum</i>";
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 12:
        phrase = "I took a deep breath and listened to the old brag of my heart; I am, I am, I am. <i>- The Bell Jar</i>";
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 13:
        phrase = "I celebrate myself, and sing myself. — Walt Whitman</i>";
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 14:
        phrase = "I wondered if that was how forgiveness budded; not with the fanfare of epiphany, but with pain gathering its things, packing up, and slipping away unannounced in the middle of the night. <i>- The Kite Runner</i>";
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 15:
        phrase = "And the rest is rust and stardust. <i>- Lolita</i>";
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 16:
        phrase = "The mark of the immature man is that he wants to die nobly for a cause, while the mark of the mature man is that he wants to live humbly for one. — Catcher in the Rye</i>";
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 17:
        phrase = "Even the darkest night will end and the sun will rise <i>- Les Misérables</i>";
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 18:
        phrase = "The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time<i> — On the Road</i>";
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 19:
        phrase = "I would always rather be happy than dignified <i>- Jane Eyre</i>";
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 20:
        phrase = "Maybe forgetfulness, like a kind snow, would numb and cover them. But they were part of me. They were my landscape. <i>— The Bell Jar</i>";
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 21:
        phrase = "If we wait until we're ready we'll be waiting for the rest of our lives <i>- A Series of Unfortunate Events</i>";
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 22:
        phrase = "Whenever you feel like criticizing anyone, just remember that all the people in this world hasn't had the advantages that you've had <i>- The Great Gatsby</i>";
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 23:
        phrase = "Atticus told me to delete the adjectives and I'd have the facts <i>- To Kill a Mokingbird</i>";
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 24:
        phrase = "Scout: He was real nice.\nAtticus: Most people are, Scout, when you finally see them. <i>- To Kill a Mokingbird</i>";
        $('#quote').append('<p>' + phrase + '</p>');
        break;

        case 25:
        phrase = "She wasn’t doing a thing that I could see, except standing there leaning on the balcony railing, holding the universe together. <i>— J.D Salinger</i>";
        $('#quote').append('<p>' + phrase + '</p>');
        break;


        break;
  }});

});
