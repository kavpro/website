import {
  branding,
  website,
  content,
  juci,
  jyc,
  edufocal,
  missbirdie,
  nestle,
  invision,
} from '../images'

const clients = [edufocal, juci, invision, jyc, missbirdie, nestle]
const services = [
  {
    key: '1',
    title: 'Content',
    icon: content,
    body:
      'You deserve to have content that is relevant, attractive and effective. Let’s work with you to make it happen.',
  },
  {
    key: '2',
    title: 'Website',
    icon: website,
    body:
      'Your website is your own piece of digital real estate. We’ll make you a fast, modern and reliable web application so you can own that space.',
  },
  {
    key: '3',
    title: 'Branding',
    icon: branding,
    body:
      'From logos to corporate identity kits, from display material to rebranding, we have you covered.',
  },
]

const slides = [
  {
    title: 'Julia Day',
    company: 'Juci Patties',
    quote:
      'Thanks Guys! Keep up the good work.Awesome Design that completely surpassed our expectations',
  },
]

export { clients, services, slides }
