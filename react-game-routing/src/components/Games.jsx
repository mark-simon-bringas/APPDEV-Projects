import { Link } from "react-router-dom"
import Footer from "../Footer"

const games = [
    {
        id: 1, 
        name: "Honkai Impact 3rd", 
        description: 
        "Honkai Impact 3rd is a free-to-play 3D action role-playing game that incorporates a variety of genres, from hack and slash and social simulation, to elements of bullet hell, platforming, \
        shoot 'em up and dungeon crawling across multiple single and multiplayer modes. Honkai Impact 3rd is set in an alternate version of Earth, plagued by catastrophes resulting from the Honkai. \
        The Honkai is largely viewed as a malevolent force with a will of its own. It has the ability to corrupt humans (ranging from mind manipulation and diseases to turning them into undead creatures), \
        create various monsters, and imbue certain individuals with god-like powers, enabling them to trigger apocalyptic events. These super-powered humans are known as Herrschers. \
        The Honkai is a cyclical phenomenon, returning to test civilization on Earth each time it gets too advanced. The game takes place in the year 2015 of the Current Era, \
        with the more technologically-advanced Previous Era having been destroyed by Honkai 50,000 years prior. In the Current Era, various global factions exist to combat or take advantage of the power of Honkai. \
        These include Schicksal, a European-based peacekeeping organization that deploys human warriors known as Valkyries to combat the Honkai; Anti-Entropy, \
        formerly the North American branch of Schicksal that objected to the use of human soldiers in favor of mechanized robots; and World Serpent, \
        a shadow organization that has been manipulating world events since the end of the Previous Era.",
        publisher: "HoYoverse",
        developer: "miHoYo",
        image:"/src/assets/hi3-poster.jpg",
        reviews: [
            {
                id: 1,
                author: "GameMaster123",
                rating: 4.5,
                text: "Amazing combat system and emotional story. The character designs are top-notch!"
            },
            {
                id: 2,
                author: "RPGFanatic",
                rating: 4.8,
                text: "One of the best mobile action RPGs I've ever played. The story gets better with each chapter."
            },
            {
                id: 3,
                author: "MobileGamer",
                rating: 4.2,
                text: "Great gameplay and graphics, though it can be grindy at times. Still highly recommended!"
            }
        ]
    },
    {
        id: 2, 
        name: "Genshin Impact", 
        description: 
        "Genshin Impact is a free-to-play, action role-playing video game that features an anime-style open world environment and an action-based battle system using elemental magic and character-switching. \
        The story takes place in the fantasy world of Teyvat, home to seven nations, each of which is tied to a different element and ruled by a different god (archon). The story follows the Traveler, \
        an interstellar adventurer who, at the start of the game, is separated from their twin sibling after the two land in Teyvat. Thereafter, the Traveler journeys across the nations of Teyvat in search of the lost sibling, \
        accompanied by their guide, Paimon. Along the way, the two befriend myriad individuals, become involved in the affairs of its nations, and begin to unravel the mysteries of the land.",
        publisher: "HoYoverse",
        developer: "HoYoverse",
        image:"/src/assets/gi-poster.jpg",
        reviews: [
            {
                id: 1,
                author: "OpenWorldExplorer",
                rating: 4.7,
                text: "Breathtaking open world and soundtrack. The element system is incredibly fun to experiment with."
            },
            {
                id: 2,
                author: "AdventureSeeker",
                rating: 4.5,
                text: "The world-building and lore are fantastic. Each region feels unique and alive."
            },
            {
                id: 3,
                author: "CasualPlayer",
                rating: 4.3,
                text: "Perfect game for both casual and hardcore players. The co-op mode is really enjoyable."
            }
        ]
    },
    {
        id: 3, 
        name: "Honkai Star Rail", 
        description: 
        "Honkai: Star Rail is a free-to-play role-playing gacha and turn-based video game that features the main character, who is referred to as the Trailblazer, \
        travelling across planets through the Astral Express to help and connect the worlds while resolving disasters caused by \"Stellarons\" and other third-parties.\
        The game is set in a science-fantasy universe in which humanity and sentient non-human beings follow the Paths of god-like beings known as Aeons. Those who follow Paths are known as Pathstriders. \
        Each Path espouses an ideal: for example, the Abundance is based on the view that immortality is a blessing and that healing and altruism should be valued as a top priority. \
        The Destruction believes that civilization is cancerous to the universe, and seeks to eradicate all of civilization through the spreading of various disasters, such as the Stellaron, \
        an object known as the Cancer of All Worlds, which brings destruction to any planet it is placed on. Some Paths were led by Aeons who are now deceased, but continue to exist without the influence of their Aeons. \
        The main character of the game known as the Trailblazer, a mysterious amnesiac possessing a Stellaron, follows the Path of Trailblaze, a Path created by the deceased Akivili. Pathstriders of Trailblaze seek to \
        \"explore, establish, and connect\" among different worlds. Different Paths are portrayed as antagonistic, protagonistic, or neutral. The primary antagonist of the game is Nanook, who controls the Path of Destruction, \
        along with Antimatter Legion led by Lord Ravagers, the Emanators of the Path of Destruction. Other Paths, such as the Path of Abundance, are not necessarily seen as antagonistic, \
        but are involved in rivalries with the Hunt and other Paths, who view the immortality granted by the Path of Abundance as a curse. Aside from the Path of Destruction, \
        the Stellaron Hunters are a somewhat antagonistic antihero group throughout the game, who search for and collect Stellarons across the universe and claim to be able to see the future. \
        The main characters are often in conflict with the Stellaron Hunters, though they more or less end up aiding each other on their journeys.",
        publisher: "HoYoverse",
        developer: "miHoYo",
        image:"/src/assets/hsr-poster.jpg",
        reviews: [
            {
                id: 1,
                author: "TurnBasedTactician",
                rating: 4.6,
                text: "Fresh take on turn-based combat. The space fantasy setting is unique and engaging."
            },
            {
                id: 2,
                author: "StoryLover",
                rating: 4.8,
                text: "The character interactions and world-building are phenomenal. Each character feels distinct."
            },
            {
                id: 3,
                author: "GachaVeteran",
                rating: 4.4,
                text: "Excellent balance of story and gameplay. The turn-based combat is surprisingly deep."
            }
        ]
    },
    {
        id: 4, 
        name: "Fate/Grand Order", 
        description:
        "Fate/Grand Order is a free-to-play Japanese gacha mobile and turn-based role-playing game with some visual novel elements that is centered around turn-based combat where the player, \
        who takes on the role of a \"Master\", summons and commands powerful familiars known as \"Servants\" to battle enemies. The story narrative is presented in a visual novel format, \
        and each Servant has their own scenario which the player can explore.",
        publisher: "Aniplex",
        developer: "Lasengle",
        image:"/src/assets/fgo-poster.jpeg",
        reviews: [
            {
                id: 1,
                author: "FateFanatic",
                rating: 4.7,
                text: "The story writing is exceptional. Each chapter feels like a full visual novel."
            },
            {
                id: 2,
                author: "GachaGuru",
                rating: 4.4,
                text: "Great integration of Fate lore. The servant designs and animations are excellent."
            },
            {
                id: 3,
                author: "VisualNovelReader",
                rating: 4.6,
                text: "Impressive narrative depth. The events and story chapters are consistently engaging."
            }
        ]
    },
    {
        id: 5,
        name: "Wuthering Waves",
        description: 
        "Wuthering Waves is a free-to-play open-world action role-playing game that is set in a futuristic, post-apocalyptic world after a catastrophe called the \
        \"Lament\" wiped out most of humanity and caused unknown beings and monsters, called Tacet Discords, to appear. Humanity adapted to the threat and over time rebuilt civilization. \
        The story follows the amnesiac Rover, who has awakened from a deep slumber and sets out to explore this new world.",
        publisher: "Kuro Games",
        developer: "Kuro Games",
        image:"/src/assets/wuwa-poster.jpg",
        reviews: [
            {
                id: 1,
                author: "BetaTester",
                rating: 4.5,
                text: "Promising combat system and gorgeous visuals. The post-apocalyptic setting is intriguing."
            },
            {
                id: 2,
                author: "ActionFan",
                rating: 4.3,
                text: "Smooth combat mechanics and interesting world design. Looking forward to the full release."
            },
            {
                id: 3,
                author: "RPGEnthusiast",
                rating: 4.4,
                text: "The atmosphere and environment design are fantastic. Combat feels impactful and satisfying."
            }
        ]
    }
]
export default function Games() {
    return (
        <>
            <div className="games-list">
                <h1>Games List:</h1>
                <div className="games-list-images">
                    {
                        games.map((game) => (
                            <>
                                <Link to={`/games/${game.id}`} state={{game}}>
                                    <img 
                                        key={game.id} 
                                        src={game.image} 
                                        alt={game.name} 
                                        title={game.name}
                                        style={{width: "200px", height: "300px"}}
                                    />
                                    <br />
                                    <center>
                                        <strong>{game.name.toUpperCase()}</strong> 
                                        <br/>
                                        <i>
                                            Publisher: {game.publisher}
                                            <br/>
                                            Developer: {game.developer}
                                        </i>
                                    </center>
                                </Link>                                
                            </>
                        ))
                    }
                </div>
            </div>
            <div className="games-footer">
                <Footer />
            </div>
        </>
    )    
};
