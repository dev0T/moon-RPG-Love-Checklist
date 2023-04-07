import hauntedHouseImage from '../../assets/locations/location_haunted_house.jpg'
import twilightCanyonImage from '../../assets/locations/location_twilight_canyon.jpg'
import rainbowRocksImage from '../../assets/locations/location_rainbow_rocks.jpg'
import technopolisImage from '../../assets/locations/location_technopolis.jpg'
import valleyOfTheWindImage from '../../assets/locations/location_valley_of_the_wind.jpg'
import protagonistsHouseImage from '../../assets/locations/location_valley_of_the_wind.jpg' // this one is missing, figure it out later
import burrnHallImage from '../../assets/locations/location_burrn_hall.jpg'
import castleTownImage from '../../assets/locations/location_castle_town.jpg'
import castleImage from '../../assets/locations/location_the_castle.jpg'
import mushroomForestImage from '../../assets/locations/location_mushroom_forest.jpg'
import tropicalFieldsImage from '../../assets/locations/location_tropical_fields.jpg'
import shellwhaleCoveImage from '../../assets/locations/location_shellwhale_cove.jpg'
import americanHouseImage from '../../assets/locations/location_american_house.jpg'
import tamayasLauncherImage from '../../assets/locations/location_tamayas_launcher.jpg'
import sunbeamsRoadImage from '../../assets/locations/location_sunbeams_road.jpg'
import windmillHermitageImage from '../../assets/locations/location_windmill_hermitage.jpg'
import grambysHouseImage from '../../assets/locations/location_grambys_house.jpg'
import addersHouseImage from '../../assets/locations/location_adders_house.jpg'
import caveGuysCaveImage from '../../assets/locations/location_cave_guys_cave.jpg'
import drHagersLabImage from '../../assets/locations/location_dr_hager_lab.jpg'
import wildcatHouseImage from '../../assets/locations/location_wildcat_house.jpg'

const data = {
  levels: [
    {
      level: 1,
      name: "Love's Awakening",
      love: 0,
    },
    {
      level: 2,
      name: 'Love Apprentice',
      love: 2,
    },
    {
      level: 3,
      name: "Love's First Step",
      love: 4,
    },
    {
      level: 4,
      name: 'Love Two-Three',
      love: 7,
    },
    {
      level: 5,
      name: 'Love Disciple',
      love: 10,
    },
    {
      level: 6,
      name: 'Love Beginner',
      love: 13,
    },
    {
      level: 7,
      name: 'Love Herald',
      love: 16,
    },
    {
      level: 8,
      name: 'Love Intern',
      love: 20,
    },
    {
      level: 9,
      name: 'Love Debutante',
      love: 24,
    },
    {
      level: 10,
      name: 'Love Black Belt',
      love: 28,
    },
    {
      level: 11,
      name: 'Love Pilgrim',
      love: 33,
    },
    {
      level: 12,
      name: 'Love Master',
      love: 38,
    },
    {
      level: 13,
      name: 'Love Value Set',
      love: 42,
    },
    {
      level: 14,
      name: 'Love Teacher',
      love: 47,
    },
    {
      level: 15,
      name: "Love's Backbone",
      love: 52,
    },
    {
      level: 16,
      name: 'Love Instructor',
      love: 58,
    },
    {
      level: 17,
      name: 'Love Triple Crown',
      love: 64,
    },
    {
      level: 18,
      name: 'Love Copernicus',
      love: 72,
    },
    {
      level: 19,
      name: 'Love Revivalist',
      love: 78,
    },
    {
      level: 20,
      name: 'Love Expert',
      love: 84,
    },
    {
      level: 21,
      name: 'Mature Love',
      love: 90,
    },
    {
      level: 22,
      name: 'Lover First-Class',
      love: 97,
    },
    {
      level: 23,
      name: 'Love Graduate',
      love: 104,
    },
    {
      level: 24,
      name: "Love's Answer",
      love: 111,
    },
    {
      level: 25,
      name: 'Love CEO',
      love: 118,
    },
    {
      level: 26,
      name: 'Love Superstar',
      love: 125,
    },
    {
      level: 27,
      name: 'Love Yokozuna',
      love: 132,
    },
    {
      level: 28,
      name: 'President of Love',
      love: 150,
    },
    {
      level: 29,
      name: 'Love Maestro',
      love: 170,
    },
    {
      level: 30,
      name: 'Big Bang of Love',
      love: 200,
    },
  ],
  locations: [
    {
      name: 'Haunted House',
      wiki: 'https://moonrpg.fandom.com/wiki/Haunted_House',
      image: hauntedHouseImage,
    },
    {
      name: 'Twilight Canyon',
      wiki: 'https://moonrpg.fandom.com/wiki/Twilight_Canyon',
      image: twilightCanyonImage,
    },
    {
      name: 'Rainbow Rocks',
      wiki: 'https://moonrpg.fandom.com/wiki/Rainbow_Rocks',
      image: rainbowRocksImage,
    },
    {
      name: 'Technopolis',
      wiki: 'https://moonrpg.fandom.com/wiki/Technopolis',
      image: technopolisImage,
    },
    {
      name: 'Valley of the Wind',
      wiki: 'https://moonrpg.fandom.com/wiki/Valley_of_the_Wind',
      image: valleyOfTheWindImage,
    },
    {
      name: "Protagonist's House",
      wiki: 'https://moonrpg.fandom.com/wiki/Protagonist%27s_House',
      image: protagonistsHouseImage,
    },
    {
      name: 'Burrn Hall',
      wiki: 'https://moonrpg.fandom.com/wiki/Burrn_Hall',
      image: burrnHallImage,
    },
    {
      name: "Curio's Shop",
      wiki: "https://moonrpg.fandom.com/wiki/Curio's_Shop",
      image: castleTownImage,
    },
    {
      name: 'Castle Town',
      wiki: 'https://moonrpg.fandom.com/wiki/Castle_Town',
      image: castleTownImage,
    },
    {
      name: "Flora's Flower Shop",
      wiki: 'https://moonrpg.fandom.com/wiki/Flora%27s_Flower_Shop',
      image: castleTownImage,
    },
    {
      name: "Baker's Bakery",
      wiki: 'https://moonrpg.fandom.com/wiki/Baker%27s_Bakery',
      image: castleTownImage,
    },
    {
      name: 'Castle',
      wiki: 'https://moonrpg.fandom.com/wiki/Baker%27s_Bakery',
      image: castleImage,
    },
    {
      name: 'Mushroom Forest',
      wiki: 'https://moonrpg.fandom.com/wiki/Mushroom_Forest',
      image: mushroomForestImage,
    },
    {
      name: 'Tropical Fields',
      wiki: 'https://moonrpg.fandom.com/wiki/Tropical_Fields',
      image: tropicalFieldsImage,
    },
    {
      name: 'Shellwhale Cove',
      wiki: 'https://moonrpg.fandom.com/wiki/Shellwhale_Cove',
      image: shellwhaleCoveImage,
    },
    {
      name: 'American House',
      wiki: 'https://moonrpg.fandom.com/wiki/American_House',
      image: americanHouseImage,
    },
    {
      name: "Tamaya's Launcher",
      wiki: "https://moonrpg.fandom.com/wiki/Tamaya's_Launcher",
      image: tamayasLauncherImage,
    },
    {
      name: 'Sunbeams Road',
      wiki: 'https://moonrpg.fandom.com/wiki/Sunbeams_Road',
      image: sunbeamsRoadImage,
    },
    {
      name: 'Windmill Hermitage',
      wiki: 'https://moonrpg.fandom.com/wiki/Windmill_Hermitage',
      image: windmillHermitageImage,
    },
    {
      name: "Gramby's House",
      wiki: "https://moonrpg.fandom.com/wiki/Gramby's_House",
      image: grambysHouseImage,
    },
    {
      name: "Adder's House",
      wiki: "https://moonrpg.fandom.com/wiki/Adder's_House",
      image: addersHouseImage,
    },
    {
      name: "Cave Guy's Cave",
      wiki: 'https://moonrpg.fandom.com/wiki/Cave_Guy%27s_Cave',
      image: caveGuysCaveImage,
    },
    {
      name: "Dr. Hager's Lab",
      wiki: 'https://moonrpg.fandom.com/wiki/Dr._Hager%27s_Lab',
      image: drHagersLabImage,
    },
    {
      name: 'Bar Wanda',
      wiki: 'https://moonrpg.fandom.com/wiki/Bar_Wanda',
      image: castleTownImage,
    },
    {
      name: 'Wildcat House',
      wiki: 'https://moonrpg.fandom.com/wiki/Wildcat_House',
      image: wildcatHouseImage,
    },
  ],
  animals: [
    {
      name: 'Stompkins',
      love: 2,
      location: 'Haunted House',
      wiki: 'https://moonrpg.fandom.com/wiki/Stompkins',
    },
    {
      name: 'Sadmile',
      love: 2,
      location: 'Twilight Canyon',
      wiki: 'https://moonrpg.fandom.com/wiki/Sadmile',
    },
    {
      name: 'Rocque',
      love: 2,
      location: 'Haunted House',
      wiki: 'https://moonrpg.fandom.com/wiki/Rocque',
    },
    {
      name: 'Mackarther',
      love: 2,
      location: "Curio's Shop",
      wiki: 'https://moonrpg.fandom.com/wiki/Mackarther',
    },
    {
      name: 'Yenom Frog',
      love: 2,
      location: 'Castle Town',
      wiki: 'https://moonrpg.fandom.com/wiki/Yenom_Frog',
    },
    {
      name: 'Dream Alien',
      love: 2,
      location: "Cave Guy's Cave",
      wiki: 'https://moonrpg.fandom.com/wiki/Dream_Alien',
    },
    {
      name: 'Two-oh-cloky',
      love: 2,
      location: 'Haunted House',
      wiki: 'https://moonrpg.fandom.com/wiki/Two-oh-clocky',
    },
    {
      name: 'Tommy',
      love: 3,
      location: 'Tropical Fields',
      wiki: 'https://moonrpg.fandom.com/wiki/Tommy',
    },
    {
      name: 'Ovon',
      love: 2,
      location: 'Rainbow Rocks',
      wiki: 'https://moonrpg.fandom.com/wiki/Ovon',
    },
    {
      name: 'Kovon',
      love: 2,
      location: 'Rainbow Rocks',
      wiki: 'https://moonrpg.fandom.com/wiki/Kovon',
    },
    {
      name: 'Mino',
      love: 2,
      location: "Protagonist's House",
      wiki: 'https://moonrpg.fandom.com/wiki/Mino',
    },
    {
      name: 'Snacky',
      love: 4,
      location: "Gramby's House",
      wiki: 'https://moonrpg.fandom.com/wiki/Snacky',
    },
    {
      name: 'Tottoteruri',
      love: 8,
      location: 'Mushroom Forest',
      wiki: 'https://moonrpg.fandom.com/wiki/Tottoteruri',
    },
    {
      name: 'Sid Vitness',
      love: 2,
      location: "Adder's House",
      wiki: 'https://moonrpg.fandom.com/wiki/Sid_Vitness',
    },
    {
      name: 'Keith',
      love: 2,
      location: 'Technopolis',
      wiki: 'https://moonrpg.fandom.com/wiki/Keith',
    },
    {
      name: 'Beck',
      love: 2,
      location: 'Technopolis',
      wiki: 'https://moonrpg.fandom.com/wiki/Beck',
    },
    {
      name: 'Hanachan',
      love: 2,
      location: 'Tropical Fields',
      wiki: 'https://moonrpg.fandom.com/wiki/Hanachan',
    },
    {
      name: 'Snowbuddy',
      love: 2,
      location: 'Windmill Hermitage',
      wiki: 'https://moonrpg.fandom.com/wiki/Snowbuddy',
    },
    {
      name: 'Block of Tofu',
      love: 2,
      location: 'Windmill Hermitage',
      wiki: 'https://moonrpg.fandom.com/wiki/Block_of_Tofu',
    },
    {
      name: 'Pampoo',
      love: 2,
      location: 'Haunted House',
      wiki: 'https://moonrpg.fandom.com/wiki/Pampoo',
    },
    {
      name: 'Harpflower',
      love: 2,
      location: "Flora's Flower Shop",
      wiki: 'https://moonrpg.fandom.com/wiki/Harpflower',
    },
    {
      name: 'Chairby',
      love: 2,
      location: 'Sunbeams Road',
      wiki: 'https://moonrpg.fandom.com/wiki/Chairby',
    },
    {
      name: 'Koma-chan',
      love: 2,
      location: 'Sunbeams Road',
      wiki: 'https://moonrpg.fandom.com/wiki/Koma-chan',
    },
    {
      name: 'Mr. Nacky',
      love: 2,
      location: 'Sunbeams Road',
      wiki: 'https://moonrpg.fandom.com/wiki/Mr._Nacky',
    },
    {
      name: 'Cyclolyphant',
      love: 2,
      location: 'Mushroom Forest',
      wiki: 'https://moonrpg.fandom.com/wiki/Cyclolyphant',
    },
    {
      name: 'Gentlemister',
      love: 2,
      location: "Tamaya's Launcher",
      wiki: 'https://moonrpg.fandom.com/wiki/Gentlemister',
    },
    {
      name: 'Heyboy',
      love: 4,
      location: 'Burrn Hall',
      wiki: 'https://moonrpg.fandom.com/wiki/Heyboy',
    },
    {
      name: 'Philip',
      love: 2,
      location: 'Technopolis',
      wiki: 'https://moonrpg.fandom.com/wiki/Philip',
    },
    {
      name: 'Bonzo',
      love: 2,
      location: 'Technopolis',
      wiki: 'https://moonrpg.fandom.com/wiki/Bonzo',
    },
    {
      name: 'Erik',
      love: 2,
      location: 'Technopolis',
      wiki: 'https://moonrpg.fandom.com/wiki/Erik',
    },
    {
      name: 'Fighting Fish',
      love: 3,
      location: 'Valley of the Wind',
      wiki: 'https://moonrpg.fandom.com/wiki/Fighting_Fish',
    },
    {
      name: 'Birdon',
      love: 2,
      location: 'Twilight Canyon',
      wiki: 'https://moonrpg.fandom.com/wiki/Birdon',
    },
    {
      name: 'Rockboy',
      love: 2,
      location: 'Mushroom Forest',
      wiki: 'https://moonrpg.fandom.com/wiki/Rockboy',
    },
    {
      name: 'Shocky Catfish',
      love: 3,
      location: 'Valley of the Wind',
      wiki: 'https://moonrpg.fandom.com/wiki/Shocky_Catfish',
    },
    {
      name: 'Master Leaf',
      love: 2,
      location: 'Tropical Fields',
      wiki: 'https://moonrpg.fandom.com/wiki/Master_Leaf',
    },
    {
      name: 'Drakey',
      love: 2,
      location: 'Rainbow Rocks',
      wiki: 'https://moonrpg.fandom.com/wiki/Drakey',
    },
    {
      name: 'Elmo',
      love: 2,
      location: 'Rainbow Rocks',
      wiki: 'https://moonrpg.fandom.com/wiki/Elmo',
    },
    {
      name: 'Gajiro',
      love: 2,
      location: 'Haunted House',
      wiki: 'https://moonrpg.fandom.com/wiki/Gajiro',
    },
    {
      name: 'Thworm',
      love: 4,
      location: 'Rainbow Rocks',
      wiki: 'https://moonrpg.fandom.com/wiki/Thworm',
    },
    {
      name: 'Value Boy',
      love: 2,
      location: 'American House',
      wiki: 'https://moonrpg.fandom.com/wiki/Value_Boy',
    },
    {
      name: 'Wavio',
      love: 2,
      location: 'Mushroom Forest',
      wiki: 'https://moonrpg.fandom.com/wiki/Wavio',
    },
    {
      name: 'Slymy',
      love: 2,
      location: 'Rainbow Rocks',
      wiki: 'https://moonrpg.fandom.com/wiki/Slymy',
    },
    {
      name: 'Shlyme',
      love: 2,
      location: 'Rainbow Rocks',
      wiki: 'https://moonrpg.fandom.com/wiki/Shlyme',
    },
    {
      name: 'Goddog Mai Mai',
      love: 2,
      location: 'Rainbow Rocks',
      wiki: 'https://moonrpg.fandom.com/wiki/Goddog_Mai_Mai',
    },
    {
      name: 'Jimi',
      love: 2,
      location: 'Technopolis',
      wiki: 'https://moonrpg.fandom.com/wiki/Jimi',
    },
    {
      name: 'Gluttandra',
      love: 2,
      location: 'Rainbow Rocks',
      wiki: 'https://moonrpg.fandom.com/wiki/Gluttandra',
    },
    {
      name: 'Mr. Droll',
      love: 3,
      location: 'Valley of the Wind',
      wiki: 'https://moonrpg.fandom.com/wiki/Mr._Droll',
    },
    {
      name: 'Molio',
      love: 3,
      location: 'Valley of the Wind',
      wiki: 'https://moonrpg.fandom.com/wiki/Molio',
    },
    {
      name: 'Semimaru',
      love: 2,
      location: 'Rainbow Rocks',
      wiki: 'https://moonrpg.fandom.com/wiki/Semimaru',
    },
    {
      name: 'Shellwhale',
      love: 2,
      location: 'Shellwhale Cove',
      wiki: 'https://moonrpg.fandom.com/wiki/Shellwhale',
    },
    {
      name: 'Shadowbird',
      love: 3,
      location: 'Tropical Fields',
      wiki: 'https://moonrpg.fandom.com/wiki/Shadowbird',
    },
  ],
  people: [
    {
      name: 'Kenji',
      wiki: 'https://moonrpg.fandom.com/wiki/Kenji',
      loveRewards: [
        {
          id: 1,
          love: 1,
          location: 'Wildcat House',
        },
      ],
    },
    {
      name: 'Clis',
      wiki: 'https://moonrpg.fandom.com/wiki/Clis',
      loveRewards: [
        {
          id: 1,
          love: 2,
          location: 'Wildcat House',
        },
        {
          id: 2,
          love: 2,
          location: 'Technopolis',
        },
      ],
    },
    {
      name: 'Fred',
      wiki: 'https://moonrpg.fandom.com/wiki/Fred',
      loveRewards: [
        {
          id: 1,
          love: 6,
          location: 'Castle',
        },
      ],
    },
    {
      name: 'Noge',
      wiki: 'https://moonrpg.fandom.com/wiki/Noge',
      loveRewards: [
        {
          id: 1,
          love: 1,
          location: 'Castle',
        },
        {
          id: 2,
          love: 2,
          location: 'Castle',
        },
      ],
    },
    {
      name: 'Minister',
      wiki: 'https://moonrpg.fandom.com/wiki/Minister',
      loveRewards: [
        {
          id: 1,
          love: 2,
          location: 'Castle',
        },
      ],
    },
    {
      name: 'Tao',
      wiki: 'https://moonrpg.fandom.com/wiki/Tao',
      loveRewards: [
        {
          id: 1,
          love: 4,
          location: "Gramby's House",
        },
      ],
    },
    {
      name: 'Wanda',
      wiki: 'https://moonrpg.fandom.com/wiki/Wanda',
      loveRewards: [
        {
          id: 1,
          love: 1,
          location: 'Bar Wanda',
        },
      ],
    },
    {
      name: 'Florence',
      wiki: 'https://moonrpg.fandom.com/wiki/Florence',
      loveRewards: [
        {
          id: 1,
          love: 1,
          location: 'Mushroom Forest',
        },
      ],
    },
    {
      name: 'Birdman',
      wiki: 'https://moonrpg.fandom.com/wiki/Birdman',
      loveRewards: [
        {
          id: 1,
          love: 2,
          location: 'Twilight Canyon',
        },
      ],
    },
    {
      name: 'Gramby',
      wiki: 'https://moonrpg.fandom.com/wiki/Gramby',
      loveRewards: [
        {
          id: 1,
          love: 1,
          location: "Gramby's House",
        },
        {
          id: 2,
          love: 1,
          location: "Gramby's House",
        },
      ],
    },
    {
      name: 'Curio',
      wiki: 'https://moonrpg.fandom.com/wiki/Curio',
      loveRewards: [
        {
          id: 1,
          love: 1,
          location: "Curio's Shop",
        },
      ],
    },
    {
      name: 'Baker',
      wiki: 'https://moonrpg.fandom.com/wiki/Baker',
      loveRewards: [
        {
          id: 1,
          love: 1,
          location: "Baker's Bakery",
        },
      ],
    },
    {
      name: 'Dr. Stein Hager',
      wiki: 'https://moonrpg.fandom.com/wiki/Dr._Stein_Hager',
      loveRewards: [
        {
          id: 1,
          love: 3,
          location: "Dr. Hager's Lab",
        },
      ],
    },
    {
      name: 'Adder',
      wiki: 'https://moonrpg.fandom.com/wiki/Adder',
      loveRewards: [
        {
          id: 1,
          love: 2,
          location: "Adder's House",
        },
      ],
    },
    {
      name: 'Old Man',
      wiki: 'https://moonrpg.fandom.com/wiki/Old_Man',
      loveRewards: [
        {
          id: 1,
          love: 2,
          location: 'Windmill Hermitage',
        },
      ],
    },
    {
      name: 'Gamakatsu',
      wiki: 'https://moonrpg.fandom.com/wiki/Gamakatsu',
      loveRewards: [
        {
          id: 1,
          love: 1,
          location: 'Shellwhale Cove',
        },
      ],
    },
    {
      name: 'Shambles',
      wiki: 'https://moonrpg.fandom.com/wiki/Shambles',
      loveRewards: [
        {
          id: 1,
          love: 2,
          location: 'Castle Town',
        },
      ],
    },
    {
      name: 'MadeSuma',
      wiki: 'https://moonrpg.fandom.com/wiki/MadeSuma',
      loveRewards: [
        {
          id: 1,
          love: 2,
          location: 'Bali Bali Island',
        },
      ],
    },
    {
      name: 'Bilby',
      wiki: 'https://moonrpg.fandom.com/wiki/Bilby',
      loveRewards: [
        {
          id: 1,
          love: 2,
          location: 'Castle',
        },
      ],
    },
    {
      name: 'King Carefree XIII',
      wiki: 'https://moonrpg.fandom.com/wiki/King_Carefree_XIII',
      loveRewards: [
        {
          id: 1,
          love: 2,
          location: 'Castle',
        },
      ],
    },
    {
      name: 'Pokka',
      wiki: 'https://moonrpg.fandom.com/wiki/Pokka',
      loveRewards: [
        {
          id: 1,
          love: 1,
          location: `Protagonist's House`,
        },
      ],
    },
    {
      name: 'Nikka',
      wiki: 'https://moonrpg.fandom.com/wiki/Nikka',
      loveRewards: [
        {
          id: 1,
          love: 1,
          location: `Protagonist's House`,
        },
      ],
    },
    {
      name: 'Burrn',
      wiki: 'https://moonrpg.fandom.com/wiki/Burrn',
      loveRewards: [
        {
          id: 1,
          love: 1,
          location: `Burrn Hall`,
        },
      ],
    },
    {
      name: 'Kakunte Tribe',
      wiki: 'https://moonrpg.fandom.com/wiki/Kakunte_Tribe',
      loveRewards: [
        {
          id: 1,
          love: 1,
          location: `Mushroom Forest`,
        },
      ],
    },
    {
      name: 'Beehav The Pirate',
      wiki: 'https://moonrpg.fandom.com/wiki/Beehav_The_Pirate',
      loveRewards: [
        {
          id: 1,
          love: 1,
          location: `???`,
        },
      ],
    },
    {
      name: 'Pistil',
      wiki: 'https://moonrpg.fandom.com/wiki/Pistil',
      loveRewards: [
        {
          id: 1,
          love: 1,
          location: `Protagonist's House`,
        },
      ],
    },
    {
      name: 'Mammas',
      wiki: 'https://moonrpg.fandom.com/wiki/Pistil',
      loveRewards: [
        {
          id: 1,
          love: 1,
          location: `American House`,
        },
      ],
    },
    {
      name: 'Pappas',
      wiki: 'https://moonrpg.fandom.com/wiki/Pistil',
      loveRewards: [
        {
          id: 1,
          love: 1,
          location: `American House`,
        },
      ],
    },
    {
      name: 'Darlia',
      wiki: 'https://moonrpg.fandom.com/wiki/Darlia',
      loveRewards: [
        {
          id: 1,
          love: 4,
          location: `American House`,
        },
      ],
    },
    {
      name: 'Lady Techno',
      wiki: 'https://moonrpg.fandom.com/wiki/Lady_Techno',
      loveRewards: [
        {
          id: 1,
          love: 2,
          location: `Technopolis`,
        },
      ],
    },
    {
      name: 'Robo Mayor',
      wiki: 'https://moonrpg.fandom.com/wiki/Robo_Mayor',
      loveRewards: [
        {
          id: 1,
          love: 1,
          location: `Technopolis`,
        },
      ],
    },
    {
      name: 'Whisper',
      wiki: 'https://moonrpg.fandom.com/wiki/Whisper',
      loveRewards: [
        {
          id: 1,
          love: 2,
          location: `Haunted House`,
        },
      ],
    },
    {
      name: 'Tamaya Heikichi',
      wiki: 'https://moonrpg.fandom.com/wiki/Tamaya_Heikichi',
      loveRewards: [
        {
          id: 1,
          love: 1,
          location: `Tamaya's Launcher`,
        },
        {
          id: 2,
          love: 1,
          location: `Tamaya's Launcher`,
        },
      ],
    },
    {
      name: 'Femi',
      wiki: 'https://moonrpg.fandom.com/wiki/Femi',
      loveRewards: [
        {
          id: 1,
          love: 1,
          location: `Bar Wanda`,
        },
      ],
    },
    {
      name: 'Momi',
      wiki: 'https://moonrpg.fandom.com/wiki/Momi',
      loveRewards: [
        {
          id: 1,
          love: 1,
          location: `Rainbow Rocks`,
        },
      ],
    },
    {
      name: 'Umi',
      wiki: 'https://moonrpg.fandom.com/wiki/Momi',
      loveRewards: [
        {
          id: 1,
          love: 1,
          location: `Shellwhale Cove`,
        },
      ],
    },
    {
      name: 'Wilted Flowers',
      wiki: 'https://moonrpg.fandom.com/wiki/Valley_of_the_Wind',
      loveRewards: [
        {
          id: 1,
          love: 3,
          location: `Valley of the Wind`,
        },
      ],
    },
    {
      name: 'XINGISKAN',
      wiki: 'https://moonrpg.fandom.com/wiki/Technopolis',
      loveRewards: [
        {
          id: 1,
          love: 1,
          location: `Technopolis`,
        },
      ],
    },
    {
      name: 'Sacrifice Animals',
      wiki: 'https://moonrpg.fandom.com/wiki/Technopolis',
      loveRewards: [
        {
          id: 1,
          love: 2,
          location: `Technopolis`,
        },
      ],
    },
    {
      name: 'Robi',
      wiki: 'https://moonrpg.fandom.com/wiki/Robi',
      loveRewards: [
        {
          id: 1,
          love: 1,
          location: `Technopolis`,
        },
      ],
    },
    {
      name: 'Re-men',
      wiki: 'https://moonrpg.fandom.com/wiki/Re-men',
      loveRewards: [
        {
          id: 1,
          love: 4,
          location: `Technopolis`,
        },
      ],
    },
    {
      name: 'Saike',
      wiki: 'https://moonrpg.fandom.com/wiki/Saike',
      loveRewards: [
        {
          id: 1,
          love: 1,
          location: `Technopolis`,
        },
      ],
    },
    {
      name: 'Yoshida',
      wiki: 'https://moonrpg.fandom.com/wiki/Yoshida',
      loveRewards: [
        {
          id: 1,
          love: 1,
          location: `Castle Town`,
        },
      ],
    },
    {
      name: 'Cave Guy',
      wiki: 'https://moonrpg.fandom.com/wiki/Cave_Guy',
      loveRewards: [
        {
          id: 1,
          love: 1,
          location: `Cave Guy's Cave`,
        },
      ],
    },
  ],
}

export default data
