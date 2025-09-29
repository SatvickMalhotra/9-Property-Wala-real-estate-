import { Property, PropertyStatus, Testimonial, NavLinkItem, ServiceArea } from './types';

export const NAV_LINKS: NavLinkItem[] = [
  { path: '/', name: 'Home' },
  { path: '/properties', name: 'Properties' },
  { path: '/about', name: 'About Us' },
  { path: '/contact', name: 'Contact Us' },
];

export const PROPERTIES: Property[] = [
    {
    id: 1,
    title: 'Luxury 2 BHK Fully Furnished',
    price: '₹ 90,00,000',
    description: 'A beautiful 2-bedroom house with guest room and study room, located in a prime area in Indirapuram.',
    beds: 2,
    area: 1450,
    image: 'https://cdn.glitch.global/6860b843-f780-4440-925e-8b3d8e29b369/IMG-20240905-WA0022%20(1).jpg?v=1746860108314',
    images: [
      'https://cdn.glitch.global/6860b843-f780-4440-925e-8b3d8e29b369/IMG-20240905-WA0022%20(1).jpg?v=1746860108314',
      "https://raw.githubusercontent.com/SatvickMalhotra/9-property-wala/main/Pictures/luxary%202%20bhk%20fully%20furnished/451859655_122122223318329936_6023270195237706670_n.jpg",
      "https://raw.githubusercontent.com/SatvickMalhotra/9-property-wala/main/Pictures/luxary%202%20bhk%20fully%20furnished/452038556_122122223288329936_6643726900238707893_n.jpg",
      "https://raw.githubusercontent.com/SatvickMalhotra/9-property-wala/main/Pictures/luxary%202%20bhk%20fully%20furnished/452167388_122122395914329936_3510774700022975871_n.jpg"
    ],
    status: PropertyStatus.ForSale,
    amenities: ['Swimming Pool', 'Gymnasium', '24x7 Security', 'Club House', 'Parking'],
    address: 'Ahinsa Khand 2, Indirapuram, Ghaziabad, Uttar Pradesh 201014',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8592940772924!2d77.3579456!3d28.6339789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce57955b2540f%3A0xa9465015daa4597b!2s9%20Property%20Wala!5e0!3m2!1sen!2sin!4v1746598990010!5m2!1sen!2sin'
  },
  {
    id: 2,
    title: 'Luxury 3 BHK Fully Furnished',
    price: '₹ 1,20,00,000',
    description: 'A beautiful 3-bedroom house with study room and Mandir, located in a prime area in Indirapuram.',
    beds: 3,
    area: 1700,
    image: 'https://cdn.glitch.global/6860b843-f780-4440-925e-8b3d8e29b369/3bhkimgae1.jpg?v=1746859494669',
     images: [
      'https://cdn.glitch.global/6860b843-f780-4440-925e-8b3d8e29b369/3bhkimgae1.jpg?v=1746859494669',
      "https://raw.githubusercontent.com/SatvickMalhotra/9-property-wala/main/Pictures/Luxury%203%20BHK%20Fully%20Furnished/450694516_122120111744329936_1724897798653847405_n.jpg",
      "https://raw.githubusercontent.com/SatvickMalhotra/9-property-wala/main/Pictures/Luxury%203%20BHK%20Fully%20Furnished/451873853_122122414958329936_6406941838663894661_n.jpg",
      "https://raw.githubusercontent.com/SatvickMalhotra/9-property-wala/main/Pictures/Luxury%203%20BHK%20Fully%20Furnished/448495869_122114019002329936_7490192530657079473_n.jpg"
    ],
    status: PropertyStatus.ForSale,
    amenities: ['Modular Kitchen', 'Wardrobes', 'Gated Community', 'CCTV Surveillance'],
    address: 'Vaibhav Khand, Indirapuram, Ghaziabad, Uttar Pradesh 201014',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8592940772924!2d77.3579456!3d28.6339789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce57955b2540f%3A0xa9465015daa4597b!2s9%20Property%20Wala!5e0!3m2!1sen!2sin!4v1746598990010!5m2!1sen!2sin'
  },
  {
    id: 3,
    title: 'Apex D Rio Prime 4 BHK + Servant Room',
    price: 'Net Deal: ₹5.2 Cr',
    description: "🏡 Urgent Sale – Apex D Rio ‼️\n📍 Prime 4 BHK + Servant Room\n📐 3695 sq ft | 💰 Net Deal: ₹5.2 Cr\n🔥 Just ₹14K/sq ft vs Market ₹16.5K/sq ft\n🚫 No Negotiations | 💼 Financiers Welcome\n\n📞 Serious buyers only\n📲 Call: 93116 32755 (Budget-ready inquiries only)",
    beds: 4,
    area: 3695,
    image: "https://raw.githubusercontent.com/SatvickMalhotra/9-property-wala/main/Pictures/Apex%20D'Rio/mian%20pic.jpg",
    images: [
      "https://raw.githubusercontent.com/SatvickMalhotra/9-property-wala/main/Pictures/Apex%20D'Rio/mian%20pic.jpg",
      "https://raw.githubusercontent.com/SatvickMalhotra/9-property-wala/main/Pictures/Apex%20D'Rio/c495212417ae42bb885f40ec282b7781.jpg",
      "https://raw.githubusercontent.com/SatvickMalhotra/9-property-wala/main/Pictures/Apex%20D'Rio/b7f3f27e829a4b4a9cfafce2dea389e3.jpg",
      "https://raw.githubusercontent.com/SatvickMalhotra/9-property-wala/main/Pictures/Apex%20D'Rio/b3bec4d280bc412f93c978e3dde24774.jpg"
    ],
    status: PropertyStatus.ForSale,
    amenities: ['Private Garden', 'Servant Room', 'Swimming Pool', '24x7 Security', 'Club House'],
    address: "Apex D'Rio, Indirapuram, Ghaziabad, Uttar Pradesh 201014",
    mapEmbedUrl: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.4373371233605!2d77.3764295755013!3d28.64662107565717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1a54e03d55b%3A0x77c3ecb30b5139b8!2sApex%20D'Rio!5e0!3m2!1sen!2sin!4v1759057690496!5m2!1sen!2sin`
  },
  {
    id: 4,
    title: 'RG Mirage 4 BHK + Servant room',
    price: '₹ 3,41,40,000',
    description: 'exclusive 4BHK project by RG Group in Noida sector 120 and the Experience modern living with world-class amenities designed for a refined lifestyle.',
    beds: 4,
    area: 2845,
    image: 'https://raw.githubusercontent.com/SatvickMalhotra/9-property-wala/main/Pictures/RG%20Mirage/890b07cc6cfc48388df3d5abffebde81.jpg',
    images: [
      'https://raw.githubusercontent.com/SatvickMalhotra/9-property-wala/main/Pictures/RG%20Mirage/890b07cc6cfc48388df3d5abffebde81.jpg',
      'https://raw.githubusercontent.com/SatvickMalhotra/9-property-wala/main/Pictures/RG%20Mirage/1cdaac393a5f44cd848b18cfa6c10947.jpg',
      'https://raw.githubusercontent.com/SatvickMalhotra/9-property-wala/main/Pictures/RG%20Mirage/6e8a37af915248458d821f57643797b7.jpg',
      'https://raw.githubusercontent.com/SatvickMalhotra/9-property-wala/main/Pictures/RG%20Mirage/74810e5bff1f4aac95a21ff9d49e68cb.jpg',
      'https://raw.githubusercontent.com/SatvickMalhotra/9-property-wala/main/Pictures/RG%20Mirage/ac0991f6e43e4a7089d84cb7ee2a458b.jpg',
      'https://raw.githubusercontent.com/SatvickMalhotra/9-property-wala/main/Pictures/RG%20Mirage/bed1.jpg',
      'https://raw.githubusercontent.com/SatvickMalhotra/9-property-wala/main/Pictures/RG%20Mirage/kitchen.jpg',
      'https://raw.githubusercontent.com/SatvickMalhotra/9-property-wala/main/Pictures/RG%20Mirage/living1.jpg',
      'https://raw.githubusercontent.com/SatvickMalhotra/9-property-wala/main/Pictures/RG%20Mirage/wash1.jpg',
      'https://raw.githubusercontent.com/SatvickMalhotra/9-property-wala/main/Pictures/RG%20Mirage/living2.jpg',
      'https://raw.githubusercontent.com/SatvickMalhotra/9-property-wala/main/Pictures/RG%20Mirage/masterplan.jpg'
      ],
    status: PropertyStatus.ForSale,
    amenities: ['Main Road Facing', 'Vallaya Home Interiors (Luxury Redefined)', '3 Side open plot', 'gym','landscaped gardens','parking'],
    address: 'Nyay Khand, Indirapuram, Ghaziabad, Uttar Pradesh 201014',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.3830745193986!2d77.39435467616312!3d28.588282586087633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef61e4cb491d%3A0xa9498a3d53d7b34e!2sRG%20Mirage!5e0!3m2!1sen!2sin!4v1755926525509!5m2!1sen!2sin'
  },
  {
    id: 5,
    title: 'RG Mirage 3 BHK + Study Room',
    price: '₹ 2,46,62,000',
    description: 'exclusive 3BHK property project by RG Group in Noida and  Experience modern living with world-class amenities designed for a refined lifestyle.',
    beds: 3,
    area: 2242,
    image: 'https://raw.githubusercontent.com/SatvickMalhotra/9-property-wala/main/Pictures/RG%20Mirage/890b07cc6cfc48388df3d5abffebde81.jpg',
    images: [
      'https://raw.githubusercontent.com/SatvickMalhotra/9-property-wala/main/Pictures/RG%20Mirage/890b07cc6cfc48388df3d5abffebde81.jpg',
      'https://raw.githubusercontent.com/SatvickMalhotra/9-property-wala/main/Pictures/RG%20Mirage/1cdaac393a5f44cd848b18cfa6c10947.jpg',
      'https://raw.githubusercontent.com/SatvickMalhotra/9-property-wala/main/Pictures/RG%20Mirage/6e8a37af915248458d821f57643797b7.jpg',
      'https://raw.githubusercontent.com/SatvickMalhotra/9-property-wala/main/Pictures/RG%20Mirage/74810e5bff1f4aac95a21ff9d49e68cb.jpg',
      'https://raw.githubusercontent.com/SatvickMalhotra/9-property-wala/main/Pictures/RG%20Mirage/ac0991f6e43e4a7089d84cb7ee2a458b.jpg',
      'https://raw.githubusercontent.com/SatvickMalhotra/9-property-wala/main/Pictures/RG%20Mirage/bed1.jpg',
      'https://raw.githubusercontent.com/SatvickMalhotra/9-property-wala/main/Pictures/RG%20Mirage/kitchen.jpg',
      'https://raw.githubusercontent.com/SatvickMalhotra/9-property-wala/main/Pictures/RG%20Mirage/living1.jpg',
      'https://raw.githubusercontent.com/SatvickMalhotra/9-property-wala/main/Pictures/RG%20Mirage/wash1.jpg',
      'https://raw.githubusercontent.com/SatvickMalhotra/9-property-wala/main/Pictures/RG%20Mirage/living2.jpg',
      'https://raw.githubusercontent.com/SatvickMalhotra/9-property-wala/main/Pictures/RG%20Mirage/masterplan.jpg'
      ], 
    status: PropertyStatus.ForSale,
    amenities: ['Main Road Facing', 'Vallaya Home Interiors (Luxury Redefined)', '3 Side open plot', 'gym','landscaped gardens','parking'],
    address: 'RG Mirage GH-1002, RG Residency, Sector 120, Noida, Uttar Pradesh 201307',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.3830745193986!2d77.39435467616312!3d28.588282586087633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef61e4cb491d%3A0xa9498a3d53d7b34e!2sRG%20Mirage!5e0!3m2!1sen!2sin!4v1755926525509!5m2!1sen!2sin'
  },
  {
    id: 6,
    title: '2 BHK fully Furnished',
    price: '₹ 80,00,000',
    description: 'Relaxing 2-bedroom house just steps away from the serene beach.',
    beds: 2,
    area: 2200,
    image: 'https://cdn.glitch.global/6860b843-f780-4440-925e-8b3d8e29b369/image5.jpeg?v=1746860916073',
    images:['https://cdn.glitch.global/6860b843-f780-4440-925e-8b3d8e29b369/image5.jpeg?v=1746860916073'],
    status: PropertyStatus.ForSale,
    amenities: ['Gated Community', '24x7 Security', 'Park', 'Wide Roads'],
    address: 'Shakti Khand, Indirapuram, Ghaziabad, Uttar Pradesh 201014',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8592940772924!2d77.3579456!3d28.6339789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce57955b2540f%3A0xa9465015daa4597b!2s9%20Property%20Wala!5e0!3m2!1sen!2sin!4v1746598990010!5m2!1sen!2sin'
  },
  {
    id: 7,
    title: 'Semi Furnished 2 BHK',
    price: '₹ 20,000 / month',
    description: 'Semi Furnished 2 BHK ready to move in with basic amenities.',
    beds: 2,
    area: 1500,
    image: 'https://cdn.glitch.global/6860b843-f780-4440-925e-8b3d8e29b369/IMG-20240820-WA0005.jpg?v=1746861176080',
    images: ['https://cdn.glitch.global/6860b843-f780-4440-925e-8b3d8e29b369/IMG-20240820-WA0005.jpg?v=1746861176080'],
    status: PropertyStatus.ForRent,
    amenities: ['Gated Community', '24x7 Security', 'Park'],
    address: 'Indirapuram, Ghaziabad, Uttar Pradesh 201014',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8592940772924!2d77.3579456!3d28.6339789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce57955b2540f%3A0xa9465015daa4597b!2s9%20Property%20Wala!5e0!3m2!1sen!2sin!4v1746598990010!5m2!1sen!2sin'
  },
  {
    id: 8,
    title: 'Commercial Property',
    price: '₹50,000 / ₹1 Cr',
    description: 'Large commercial unit in a high-traffic area, perfect for retail or office.',
    beds: 1,
    area: 5000,
    image: 'https://cdn.glitch.global/6860b843-f780-4440-925e-8b3d8e29b369/list-img016.jpg?v=1746864636674',
    images: ['https://cdn.glitch.global/6860b843-f780-4440-925e-8b3d8e29b369/list-img016.jpg?v=1746864636674'],
    status: PropertyStatus.SaleOrRent,
    amenities: ['Main Road Facing', 'Parking', 'Washroom'],
    address: 'Indirapuram, Ghaziabad, Uttar Pradesh 201014',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8592940772924!2d77.3579456!3d28.6339789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce57955b2540f%3A0xa9465015daa4597b!2s9%20Property%20Wala!5e0!3m2!1sen!2sin!4v1746598990010!5m2!1sen!2sin'
  },
  {
    id: 9,
    title: 'Semi Furnished 3 BHK',
    price: '₹ 28,000 / month',
    description: 'Semi Furnished 3 BHK ready to move in with basic amenities.',
    beds: 3,
    area: 1750,
    image: 'https://cdn.glitch.global/6860b843-f780-4440-925e-8b3d8e29b369/IMG-20241014-WA0172.jpg?v=1746864148820',
    images: ['https://cdn.glitch.global/6860b843-f780-4440-925e-8b3d8e29b369/IMG-20241014-WA0172.jpg?v=1746864148820'],
    status: PropertyStatus.ForRent,
    amenities: ['Gated Community', '24x7 Security', 'Park'],
    address: 'Indirapuram, Ghaziabad, Uttar Pradesh 201014',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8592940772924!2d77.3579456!3d28.6339789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce57955b2540f%3A0xa9465015daa4597b!2s9%20Property%20Wala!5e0!3m2!1sen!2sin!4v1746598990010!5m2!1sen!2sin'
  },
];


export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Raman Kothari',
    location: 'South Delhi',
    text: "The best part about working with Anirudh Ji was that he was always more focused on answering my questions, giving me good advice, and finding homes that met my needs.",
    rating: 5,
    image: 'https://cdn.glitch.global/6860b843-f780-4440-925e-8b3d8e29b369/c395d9e5-a6d4-47b0-be95-0cb2445c6d4a.image.png?v=1746871942178',
  },
  {
    id: 2,
    name: 'CA Joginder Kumar Mittal',
    location: 'South Delhi',
    text: "I recently found the need and desire to purchase a larger home. I spoke to a variety of different realtors that showed me a variety of homes until I found Anirudh Ji.",
    rating: 4,
    image: 'https://cdn.glitch.global/6860b843-f780-4440-925e-8b3d8e29b369/cd23a99f-8e93-4597-91c3-5afb0aaea810.image.png?v=1746872091126',
  },
  {
    id: 3,
    name: 'Prakhar Gupta',
    location: 'South Delhi',
    text: "We can't speak highly enough of our experience with Anirudh Ji. We were first-time homebuyers with very little knowledge about how to find the right place.",
    rating: 4.5,
    image: 'https://cdn.glitch.global/6860b843-f780-4440-925e-8b3d8e29b369/02ce566a-2118-4153-a738-693fedfa3870.image.png?v=1746872699445',
  },
  {
    id: 4,
    name: 'Arnav S.',
    location: 'Indirapuram',
    text: 'Absolutely fantastic service from start to finish. They made the whole process of finding our dream home seamless and stress-free. Highly recommend!',
    rating: 5,
    image: 'https://cdn.glitch.global/6860b843-f780-4440-925e-8b3d8e29b369/964bd4b0-15a8-4c8f-9f42-ad0e8b4e199f.image.png?v=1746872127117',
  },
  {
    id: 5,
    name: 'Rakesh Sharma',
    location: 'Noida',
    text: 'Excellent service and very professional. Found our dream home quickly!',
    rating: 5,
    image: 'https://cdn.glitch.global/6860b843-f780-4440-925e-8b3d8e29b369/0e86e8a9-257b-4001-b00f-586db0dfaadb.WhatsApp%20Image%202025-05-10%20at%2015.39.01_2dd783cb.jpg?v=1746872204969',
  },
  {
    id: 6,
    name: 'Meera Iyer',
    location: 'Vaishali',
    text: 'Great experience overall. Very responsive and addressed all our concerns.',
    rating: 4.5,
    image: 'https://cdn.glitch.global/6860b843-f780-4440-925e-8b3d8e29b369/a6952f6c-adf4-43ea-b378-af3bd826a501.WhatsApp%20Image%202025-05-10%20at%2015.39.20_83829872.jpg?v=1746872208079',
  },
  {
    id: 7,
    name: 'Vikram Patel',
    location: 'Delhi',
    text: 'Good understanding of the market. Helped us get a fair price for our property.',
    rating: 4.5,
    image: 'https://cdn.glitch.global/6860b843-f780-4440-925e-8b3d8e29b369/dcd4d3f6-fe51-4d93-8b1f-0c6ed71d9af7.WhatsApp%20Image%202025-05-10%20at%2015.39.45_a7452d47.jpg?v=1746872213770',
  },
];

export const SERVICE_AREAS: ServiceArea[] = [
  {
    name: 'Indirapuram',
    subLinks: ['Ahinsa Khand', 'Vaibhav Khand', 'Nyay Khand', 'Niti Khand', 'Shakti Khand']
  },
  {
    name: 'Ghaziabad',
    subLinks: ['Vaishali', 'Kaushambi', 'Raj Nagar Extension', 'Vasundhara']
  },
  {
    name: 'Noida',
    subLinks: ['Sector 62', 'Sector 63', 'Noida Extension', 'Sector 18']
  },
];