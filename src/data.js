import moon from './Images/moon.svg'
import mars from './Images/marss.svg'
import europa from './Images/europa.svg'
import titan from './Images/titan.svg'
import douglas from './Images/doug.svg'
import victor from './Images/vic.svg'
import mark from './Images/Mark.svg'
import anoush from './Images/anoush.svg'
import capsule from './Images/capsule.svg'
import port from './Images/spaceport.svg'
import rocket from './Images/rocket.svg'

const destination = [
  {
    name: 'moon',
    image: moon,
    brief: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    avg_distance: '384,400 km',
    est_travel: '3 days',
  },
  {
    name: 'mars',
    image: mars,
    brief: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
    avg_distance: '225 MIL. km',
    est_travel: '9 months',
  },
  {
    name: 'europa',
    image: europa,
    brief: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    avg_distance: '628 MIL. km',
    est_travel: '3 years',
  },
  {
    name: 'titan',
    image: titan,
    brief: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
    avg_distance: '1.6 BIL. km',
    est_travel: '7 years',
  },
]

const crew = [
  {
    rank: 'commander',
    name: 'Douglas Hurley',
    bio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    image: douglas
  },
  {
    rank: 'mission specialist',
    name: 'MARK SHUTTLEWORTH',
    bio: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
    image: mark
  },
  {
    rank: 'pilot',
    name: 'VICTOR GLOVER',
    bio: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
    image: victor
  },
  {
    rank: 'FLIGHT ENGINEER',
    name: 'Anousheh Ansari',
    bio: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
    image: anoush
  }
]

const technology = [
  {
    mach: 'launch Vehicle',
    info: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
    image: rocket
  },
  {
    mach: 'spaceport',
    info: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`,
    image: port
  },
  {
    mach: 'space capsule',
    info: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`,
    image:capsule
  },
]

export function getDestinations() {
  return destination
}
export function getCrews() {
  return crew
}
export function getTech() {
  return technology
}