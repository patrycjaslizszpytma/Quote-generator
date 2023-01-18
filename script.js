function generate() {
    const quotes = {
        "-Albert Camus": "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.",
        "-Ronald Reagan": "A people free to choose will always choose peace.",
        "-Voltaire": "It is difficult to free fools from the chains they revere.",
        "-Lewis B. Smedes": "To forgive is to set a prisoner free and discover that the prisoner was you.",
        "-Richard Bach": "If you love someone, set them free. If they come back they're yours; if they don't they never were.",
        "-Douglas Horton": "Smile, it's free therapy.",
        "-Maya Angelou": "When someone shows you who they are, believe them the first time.",
        "-Epictetus": "It's not what happens to you, but how you react to it that matters.",
        "-Rose Kennedy": "Birds sing after a storm; why shouldn't people feel as free to delight in whatever sunlight remains to them?",
        "-Bessie Coleman": "The air is the only place free from prejudice.",
        "-Fannie Lou Hamer": "Nobody's free until everybody's free.",
    }
    let authors = Object.keys(quotes); //generate array with keys
    let author = authors[Math.floor(Math.random()*authors.length)];

    let quote = quotes[author]; //key is the name of the author, based on this we obtain the quote

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
} 