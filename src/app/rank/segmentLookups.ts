const segmentPathname: { [key: number]: string } = {
    1: '/1.Jpeg',
    2: '/2.jpg',
    3: '/3.jpg',
    4: '/4.webp',
    5: '/5.jpg',
    6: '/6.jpg',
    7: '/7.jpg',
    8: '/8.jpg',
    9: '/9.jpg',
}

const segmentDimensions: { [key: number]: { width: number, height: number } } = {
    1: {width: 500, height: 350},
    2: {width: 300, height: 300},
    3: {width: 300, height: 300},
    4: {width: 300, height: 400},
    5: {width: 300, height: 500},
    6: {width: 600, height: 350},
    7: {width: 666, height: 400},
    8: {width: 400, height: 400},
    9: {width: 500, height: 500},
}

const segmentDescription: {[key: number]: string} = {
    1: 'Hermann Naumann: Literature illustration for Franz Kafka penal colony',
    2: 'Rich Johnson: The Unfortunate Mr. Samsa',
    3: 'Robert Crum: Ah, Kafka',
    4: 'Kafka: His Drawings',
    5: 'Ellie O\' Shea: Singing Mouse',
    6: 'BBC: Knut',
    7: 'Spirited Away',
    8: 'Happy Kafka',
    9: 'Some English Department: Happy Birthday Kafka',
}

const segmentLink: {[key: number]: string} = {
    1: 'https://www.mutualart.com/Artwork/Literature-illustration-for-Franz-Kafka-/27CCE785376558FAE0EA7C5AA0A1A0EF',
    2: 'https://www.richjohnson.co.uk/drawing/pen/gregor-samsa',
    3: 'https://www.amazon.com/R-Crumbs-Kafka-Robert-Crumb/dp/0743493443',
    4: 'https://www.nytimes.com/2022/05/26/books/review/kafka-drawings-andreas-kilcher.html',
    5: 'https://iartprints.com/prints/ellie_o_shea_singing_mouse-37940.html',
    6: 'https://www.bbc.com/news/science-environment-34073689',
    7: 'https://en.wikipedia.org/wiki/Spirited_Away',
    8: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fhappy_kafka&psig=AOvVaw1pmkPlbf5rDYJ6K_7PpVc_&ust=1733781083017000&source=images&cd=vfe&opi=89978449&ved=0CBgQ3YkBahcKEwjolML-k5mKAxUAAAAAHQAAAAAQBA',
    9: 'https://www.facebook.com/photo.php?fbid=1730769403681012&id=357707964320503&set=a.360493964041903&locale=hi_IN',
}

    export {segmentPathname, segmentDimensions, segmentDescription, segmentLink}