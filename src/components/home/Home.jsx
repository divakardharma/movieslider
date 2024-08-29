import React, { useState } from 'react';
import './Home.css';
import { FaSearch } from 'react-icons/fa';
import img1 from '../../assets/hp.jpg';
import img2 from '../../assets/st.jpg';
import img3 from '../../assets/one\ piece.jpg';
import img4 from '../../assets/js1.jpg';
import Thum1 from '../../assets/thumb1.jpg';
import Thum2 from '../../assets/thumb2.jpg';
import Thum3 from '../../assets/opthump.jpg';
import Thum4 from '../../assets/thum4.jpg';
import img5 from '../../assets/gotthumb2.jpg'
import Thum5 from '../../assets/gotthumb.jpg'
import img6 from '../../assets/bb.webp'
import Thum6 from '../../assets/bbthumb.jpg'
import img7 from '../../assets/bp1.webp'
import Thum7 from '../../assets/bpthumb1.jpg'
import img8 from '../../assets/jw.jpg'
import Thum8 from '../../assets/jwthumb.jpg'
import img9 from '../../assets/jp.jpg'
import Thum9 from '../../assets/jpthumb.jpg'
import img10 from '../../assets/t.jpg'
import Thum10 from '../../assets/tthumb.jpg'
import img11 from '../../assets/dk.jpg'
import Thum11 from '../../assets/dkthumb.jpg'
import img12 from "../../assets/dj.jpg"
import Thum12 from "../../assets/djthumb.jpg"

function Home() {
  return (
    <div className="App">
      <Header />
      <Slider />
    </div>
  );
}

function Header() {
  return (
    <header>
      <div className="logo">Movies4u</div>
      <ul className="menu">
        {/* <li>Anime</li>
        <li>Adventure Movies</li>
        <li>Horror Movies</li>
        <li>Web Series</li> */}
      </ul>
      <div className="search">
        <FaSearch />
      </div>
    </header>
  );
}

function Slider() {
  const slides = [
    {
      image: img1,
      thumbnail: Thum1,
      category: "Movies",
      title: "Harry Potter",
      description:
        "Harry Potter follows a young wizard, Harry, who attends Hogwarts School. He battles the dark wizard Voldemort, learns about his magical heritage, and uncovers his destiny.",
    },
    {
      image: img2,
      thumbnail: Thum2,
      category: "Movies",
      title: "Stranger Things",
      description:
        "Stranger Things is a sci-fi series where kids in the 80s uncover supernatural events and government secrets.",
    },
    {
      image: img3,
      thumbnail: Thum3,
      category: "Movies",
      title: "One Piece",
      description:
        "One Piece is a manga and anime series following Monkey D. Luffy, a young pirate with stretchy powers, on his quest to find the legendary One Piece treasure and become the Pirate King.",
    },
    {
      image: img4,
      thumbnail: Thum4,
      category: "Movies",
      title: "Jack Sparrow",
      description:
        "Jack Sparrow is the charming and cunning pirate captain from the Pirates of the Caribbean films, known for his unconventional methods and quest for treasure.",
    },
    {
      image: img5,
      thumbnail: Thum5,
      category: "Movies",
      title: "Harry Potter",
      description:
        "Harry Potter follows a young wizard, Harry, who attends Hogwarts School. He battles the dark wizard Voldemort, learns about his magical heritage, and uncovers his destiny.",
    },
    {
      image: img6,
      thumbnail: Thum6,
      category: "Movies",
      title: "Bad Boys",
      description: "Bad Boys follows two Miami detectives, Mike and Marcus, as they take down drug dealers while navigating personal challenges and their strong friendship.",
    },
    {
      image: img7,
      thumbnail: Thum7,
      category: "Movies",
      title: "Black Panther",
      description:
       "Black Panther follows T'Challa, king of Wakanda, as he battles Killmonger to protect his nation and legacy.",
    },
    {
      image: img8,
      thumbnail: Thum8,
      category: "Movies",
      title: "John Wick",
      description:"John Wick follows a retired hitman seeking vengeance against those who wronged him, unleashing his deadly skills in a relentless quest for justice.",
    },
    {
      image: img9,
      thumbnail: Thum9,
      category: "Movies",
      title: "Jurassic Park",
      description:
       "Jurassic Park is about a theme park with cloned dinosaurs that turn deadly when the creatures escape and threaten the visitors.",
    },
    {
      image: img10,
      thumbnail: Thum10,
      category: "Movies",
      title: "Terminator",
      description:
       "Terminator follows a cyborg assassin sent from the future to kill Sarah Connor, whose son will lead humanity against machines.",
    },
    {
      image: img11,
      thumbnail: Thum11,
      category: "Movies",
      title: "Dark Knight",
      description:"The Dark Knight follows Batman as he battles the Joker, a chaotic villain who seeks to plunge Gotham City into anarchy, challenging Batman's moral limits.",
    },
    {
      image: img12,
      thumbnail: Thum12,
      category: "Movies",
      title: "Django Unchained",
      description:
       "Django Unchained follows Django, a freed slave, who teams up with a bounty hunter to rescue his wife from a brutal plantation owner in the antebellum South.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider">
      <div className="list">
        {slides.map((slide, index) => (
          <SliderItem
            key={index}
            image={slide.image}
            category={slide.category}
            title={slide.title}
            description={slide.description}
            isActive={index === currentSlide}
          />
        ))}
      </div>
      <Arrows handlePrev={handlePrev} handleNext={handleNext} />
      <Thumbnail
        slides={slides}
        currentSlide={currentSlide}
        onThumbnailClick={handleThumbnailClick}
      />
    </div>
  );
}

function SliderItem({ image, category, title, description, isActive }) {
  return (
    <div className={`item ${isActive ? 'active' : ''}`}>
      <img src={image} alt={title} />
      <div className="content">
        <p>{category}</p>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Arrows({ handlePrev, handleNext }) {
  return (
    <div className="arrows">
      <button id="prev" onClick={handlePrev}>
        &lt;
      </button>
      <button id="next" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
}

function Thumbnail({ slides, currentSlide, onThumbnailClick }) {
  return (
    <div className="thumbnail">
      {slides.map((slide, index) => (
        <ThumbnailItem
          key={index}
          image={slide.thumbnail}
          title={slide.title}
          isActive={index === currentSlide}
          onClick={() => onThumbnailClick(index)}
        />
      ))}
    </div>
  );
}

function ThumbnailItem({ image, title, isActive, onClick }) {
  return (
    <div
      className={`item ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <img src={image} alt={title} />
      <div className="content">{title}</div>
    </div>
  );
}

export default Home;
